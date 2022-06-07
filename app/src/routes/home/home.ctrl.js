const UserStorage = require("../../models/UserStorage")

const output = {
    home: (req, res)=>{
        res.render("home/index");
    },
    login: (req, res)=>{
        res.render("home/login")
    },
    register: (req, res)=>{
        res.render("home/register")
    }
}



let i = 0
const process = {
    login: (req, res)=>{
        const id = req.body.id,
            psword = req.body.psword
        
        const users = UserStorage.getUsers()
        if(users.id.includes(id)){  //id 가 존재하는 id인지 확인
            const idx = users.id.indexOf(id)    //입력한 id 인덱스 검사
            if(users.psword[idx]=== psword){       //비밀번호 검사
                return res.json({   //일치 할때 반환값
                    success: true,
                })
            }
        }
        i++;
        return res.json({   //실패시 반환하는 코드
            success: false,
            msg: "로그인 실패하셨습니다.",
            count: i,
        })
    }
}


module.exports = {
    output,
    process,
}



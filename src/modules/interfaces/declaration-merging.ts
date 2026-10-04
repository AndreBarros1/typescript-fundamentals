export const bootstrap = () => {
    interface Resume {
        fullName: string
        email: string
        skills: Skill[]
        addSkill: (skill: Skill) => boolean
    }

    interface Skill {
        name:string
        level: 'beginner' | 'intermediate' | 'advanced'
    }

    interface Resume {
        dateOfBirth?: Date
        sumary?: string
    }

    class MyResume implements Resume {
        constructor(
            public fullName: string,
            public email: string,
            public skills: Skill[],
        ){}

        addSkill(skill: Skill): boolean {
            const initialLength = this.skills.length
            this.skills.push(skill)
        
            return this.skills.length > initialLength
        }
    }

    const myResume = new MyResume('André Rossi', 'andre@hotmail.com', [{name: 'Typescript', level: 'advanced'}])
    console.log(myResume)


    // const MyResume: Resume = {
    //     fullName: 'André Rossi',
    //     email: 'andre@hotmail.com',
    //     skills: [
    //         {name:'Javascript', level: 'advanced'},
    //         {name:'Typescript', level: 'advanced'}
    //     ]
    // }

    // console.log(MyResume)

}
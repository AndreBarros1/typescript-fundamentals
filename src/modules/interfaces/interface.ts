export const bootstrap = () => {
    interface Resume {
        fullName: string
        email: string
        skills: Skill[]
        addSkill?: (skill: Skill) => void
    }

    interface Skill {
        name:string
        level: 'beginner' | 'intermediate' | 'advanced'
    }

    const MyResume: Resume = {
        fullName: 'André Rossi',
        email: 'andre@hotmail.com',
        skills: [
            {name:'Javascript', level: 'advanced'},
            {name:'Typescript', level: 'advanced'}
        ]
    }

    console.log(MyResume)

}
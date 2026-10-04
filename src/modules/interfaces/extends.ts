export const bootstrap = () => {
    interface PersonalInfo {
        fullName: string
        email: string
        dateOfBirth?: Date
        sumary?: string
    }
      
    interface Resume extends PersonalInfo, Theme{
        skills: Skill[]
        addSkill: (skill: Skill) => boolean
    }

    interface Skill {
        name:string
        level: 'beginner' | 'intermediate' | 'advanced'
    }

    type Font = 'open-sans' | 'roboto'
    type ColorScheme = 'light' | 'dark'
    type Layout = 'one-column' | 'two-column'

    interface Theme {
        font: 'open-sans' | 'roboto'
        colorScheme: 'light' | 'dark'
        layout: 'one-column' | 'two-column'
    }

    class MyResume implements Resume {
        constructor(
            public fullName: string,
            public email: string,
            public skills: Skill[],
            public font: Font,
            public colorScheme: ColorScheme,
            public layout: Layout

        ){}

        addSkill(skill: Skill): boolean {
            const initialLength = this.skills.length
            this.skills.push(skill)
        
            return this.skills.length > initialLength
        }
    }

    const myResume = new MyResume('André Rossi', 'andre@hotmail.com', [{name: 'Typescript', level: 'advanced'}], "roboto", "light", "one-column") // Ctrl + Espaço já auto-completa com as opções do parâmetro faltante
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
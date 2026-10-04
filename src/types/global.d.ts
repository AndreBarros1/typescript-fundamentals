interface PersonalInfo {
        fullName: string
        email: string
        dateOfBirth?: Date
        sumary?: string
    }

interface Skill {
        name:string
        level: 'beginner' | 'intermediate' | 'advanced'
    }

interface Resume extends PersonalInfo, Theme{
        skills: Skill[]
        addSkill: (skill: Skill) => boolean
    }

interface Theme {
        font: 'open-sans' | 'roboto'
        colorScheme: 'light' | 'dark'
        layout: 'one-column' | 'two-column'
    }
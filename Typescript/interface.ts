interface User {
    readonly dbId: number
    email: string
    userId: number
    googleId?: string
    //startTrial: () => string
    startTrial(): string
    getCoupon(couponname: string): number
}

const sanj: User = {
    dbId: 2, email: "s", userId: 1,
    githubToken: "github",
    startTrial: () => {
        return "trial started"
    },
    getCoupon: (name: "promo10") => {
        return 10
    }
}

//reopen interface
interface User {
    githubToken: string
}

// inheritance of interface
interface Admin extends User {
    role: "admin" | "superadmin"
}

const sanj1: Admin = {
    dbId: 2, email: "s", userId: 1,
    githubToken: "github",
    role: "admin",
    startTrial: () => {
        return "trial started"
    },
    getCoupon: (name: "promo10") => {
        return 10
    }
}

export {}
export namespace ErroAuthEn {
    export function convertMessage(code: string): string {
        switch (code) {
            case 'auth/user-disabled': {
                return 'Bocsika a felhasználód ki van kapcsolva.';
            }
            case 'auth/user-not-found': {
                return 'Nem található ilyen felhasználó.';
            }
            case 'auth/email-already-exists':{
                return 'Ezzel az email címmel már van felhasználó.';
            }
            default: {
                return 'Bejelentkezési hiba próbáld újra később.';
            }
        }
    }
}
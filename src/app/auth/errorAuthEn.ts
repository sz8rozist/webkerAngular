export namespace ErroAuthEn {
    export function convertMessage(code: string): string {
        switch (code) {
            case 'auth/user-disabled': {
                return 'Sorry your user is disabled.';
            }
            case 'auth/user-not-found': {
                return 'Nem található ilyen felhasználó.';
            }
            default: {
                return 'Login error try again later.';
            }
        }
    }
}
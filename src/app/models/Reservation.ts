export interface Reservation {
  id?: string;
  user_id: string;
  nev: {
    veznev: string;
    kernev: string;
  };
  szulido: string;
  szigsz: string;
  nem: string;
}

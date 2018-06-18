import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class NotificationService {
    public showInspiration = false;
    constructor(public snackBar: MatSnackBar) { }

    success(mes: string) {
        this.snackBar.open(mes, '', {
            duration: 2000,
            panelClass:  ['success-snackbar']
        });
    }

    error(mes: string) {
        this.snackBar.open(mes, '', {
            duration: 2000,
            panelClass:  ['error-snackbar']
        });
    }
}

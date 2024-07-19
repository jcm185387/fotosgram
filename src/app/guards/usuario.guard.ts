import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

export const usuarioGuard: CanActivateFn = (route, state) => {
  const authService = inject(UsuarioService);
  return authService.validaToken();
};

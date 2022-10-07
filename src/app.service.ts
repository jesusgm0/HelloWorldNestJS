import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string{
    return 'Hello World!';
  }
  getBSM(): string{
    return 'Mentalidade de Crescimento, <br>Responsabilidade Pessoal, <br>Orientação ao futuro, <br>Persistência, <br>Comunicação, <br>Orientação ao Detalhe, <br>Trabalho em Equipe, <br>Gestão do Tempo'
  }
  getObjSemanal(): string{
    return 'Construção de Banco de Dados, e introdução ao Nest.js'
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserContractsComponent } from './user-contracts/user-contracts.component';
import { MenuService } from 'qbm';
import { UserContractsTileComponent } from './user-contracts-tile/user-contracts-tile.component';
import { TilesModule } from './../tiles/tiles.module';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    UserContractsComponent,
    UserContractsTileComponent
  ],
  imports: [
    CommonModule,TilesModule,MatButtonModule
  ],
  exports: [
    UserContractsComponent,
    UserContractsTileComponent
  ]
})

export class ContractsModule { 

  constructor(private readonly menuService: MenuService) {
    this.setupMenu();
  }

private setupMenu(): void {
  this.menuService.addMenuFactories(
   
    (preProps: string[], __: string[]) => {
      return {
        id: 'ROOT_CONTRACTS',
        title: '#LDS#Contracts',
        route: 'contracts',
        sorting: '70'
      };
    }  
  );
}
}

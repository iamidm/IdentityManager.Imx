import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserContractsComponent } from './user-contracts/user-contracts.component';
import { MenuService } from 'qbm';



@NgModule({
  declarations: [
    UserContractsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserContractsComponent
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

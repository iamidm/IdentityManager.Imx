import { Component, OnInit } from '@angular/core';
import { IdentityRoleMembershipsService } from '../../../identities/identity-sidesheet/identity-role-memberships/identity-role-memberships.service'
import { CollectionLoadParameters, DisplayColumns, EntitySchema, IClientProperty, TypedEntity, ValType } from 'imx-qbm-dbts';
import { BusyService, DataSourceToolbarSettings, DynamicTabDataProviderDirective, MetadataService, SettingsService } from 'qbm';
import { RoleService } from '../../../role-management/role.service';
import { QerApiService } from '../../../qer-api-client.service';
import { PortalPersonRolemembershipsProfitcenter} from 'imx-api-qer';

import { IdentityRoleMembershipsParameter, MembershipContolInfo } from '../../../identities/identity-sidesheet/identity-role-memberships/identity-role-memberships-parameter.interface';
@Component({
  selector: 'ccc-profitcenter-dialog',
  templateUrl: './profitcenter-dialog.component.html',
  styleUrls: ['./profitcenter-dialog.component.scss']
})
export class ProfitcenterDialogComponent implements OnInit {

  // constructor(private readonly qerApiClient: QerApiService) {
  //   this.addPredefinedTargets();
    
  // }


  ngOnInit(): void {
    }
  
//     public addTarget(parameter: IdentityRoleMembershipsParameter): void {
//       this.targets.push(parameter.table);
//       this.targetMap.set(parameter.table, parameter);
  
//   private addPredefinedTargets(): void {

//     this.addTarget({
//       table: this.profitCenterTag,
//       type: PortalPersonRolemembershipsProfitcenter,
//       entitySchema: this.qerApiClient.typedClient.PortalPersonRolemembershipsProfitcenter.GetSchema(),
//       controlInfo: {
//         label: '#LDS#Menu Entry Cost centers',
//         index: 50,
//       },
//       get: async (uidPerson:string, parameter: CollectionLoadParameters) => this.qerApiClient.client.portal_person_rolememberships_ProfitCenter_get(
//         uidPerson,
//         parameter
//       ),
//       withAnalysis: true
//     });
// }
  }

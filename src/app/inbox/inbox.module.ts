import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxRoutingModule } from './inbox-routing.module';
import { InboxHomeComponent } from './inbox-home/inbox-home.component';
import { EmailCreateComponent } from './email-create/email-create.component';
import { EmailReplyComponent } from './email-reply/email-reply.component';
import { EmailIndexComponent } from './email-index/email-index.component';
import { EmailShowComponent } from './email-show/email-show.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';



@NgModule({
  declarations: [ 
    EmailCreateComponent, 
    EmailReplyComponent, 
    EmailIndexComponent, 
    EmailShowComponent,
    InboxHomeComponent, 
    PlaceholderComponent, 
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    InboxRoutingModule,
    SharedModuleModule,
  ]
})
export class InboxModule { }

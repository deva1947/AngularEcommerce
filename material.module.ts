import { NgModule } from "@angular/core";
import{MatInputModule} from "@angular/material/input"
import{MatSelectModule} from "@angular/material/select"
import{MatCardModule} from "@angular/material/card"
import{MatRadioModule} from "@angular/material/radio"
import{MatCheckboxModule} from "@angular/material/checkbox"
import{MatTableModule} from "@angular/material/table"
import{MatPaginatorModule} from "@angular/material/paginator"
import{MatSortModule} from "@angular/material/sort"
import{MatDialogModule} from "@angular/material/dialog"
@NgModule({
  exports:[
    MatInputModule,
    MatDialogModule,
    MatSortModule,
    MatPaginatorModule,
    MatTableModule,
    MatCheckboxModule,
    MatRadioModule,
    MatCardModule,
    MatSelectModule
  ]
})
export class MaterialModule{}

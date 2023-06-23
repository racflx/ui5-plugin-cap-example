using {managed} from '@sap/cds/common';

entity ExampleEntity : managed {
  key ID           : UUID
      @(Core.Computed: true)
      @odata.Type: 'Edm.String';

      exampleKey   : String;
      exampleValue : String;
}

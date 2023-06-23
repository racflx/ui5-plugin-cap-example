using {ExampleEntity} from '../db/db';


service ExampleService @(path: '/api/v1/template/') @(impl: '../src/handlers/example-service.handler') {
    @readonly
    entity Example as projection on ExampleEntity order by
        createdAt asc
    limit 500;

    function helloWorld() returns String;
}

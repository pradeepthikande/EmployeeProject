import { AddEmployeeModuleModule } from './add-employee-module.module';

describe('AddEmployeeModuleModule', () => {
  let addEmployeeModuleModule: AddEmployeeModuleModule;

  beforeEach(() => {
    addEmployeeModuleModule = new AddEmployeeModuleModule();
  });

  it('should create an instance', () => {
    expect(addEmployeeModuleModule).toBeTruthy();
  });
});

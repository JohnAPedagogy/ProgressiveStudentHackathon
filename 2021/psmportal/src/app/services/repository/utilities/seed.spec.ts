import { Faker } from './seed';


describe('database seed/generator', () => {
  let service: Faker;

  beforeEach(() => {
    service = new Faker();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should generate a random person', () => {
    const value = service.personOne();
    expect(value.lastName).toBeDefined();
  });
  
  it('should generate 2 people', () => {
    const value = service.personMany(2);
    expect(value.length==2).toBeDefined();
  });
  
});

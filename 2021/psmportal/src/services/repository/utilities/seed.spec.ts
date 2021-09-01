import { Faker } from './seed';


fdescribe('database seed/generator', () => {
  let service: Faker;

  beforeEach(() => {
    service = new Faker();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created', () => {
    const value = service.personeOne();
    console.log(value);
    expect(value.lastName=='faker').toBeFalse();
  });
});

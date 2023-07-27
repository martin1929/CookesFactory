import { TestBed } from '@angular/core/testing';

import { MyResolverResolver } from './my-resolver.resolver';

describe('MyResolverResolver', () => {
  let resolver: MyResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(MyResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});

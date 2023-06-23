import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MembersService } from './members.service';
import { Member } from '../_models/membet';

describe('MembersService', () => {
  let service: MembersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MembersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
// describe('MyComponent', () => {
//   let component: MembersService;
//   let httpMock: HttpTestingController;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule]
//     });
//     component = TestBed.inject(MembersService);
//     httpMock = TestBed.inject(HttpTestingController);
//   });

//   afterEach(() => {
//     httpMock.verify();
//   });

//   it('should update a member and add it to the members array', () => {
//     const memberToUpdate: Member = { id: 1, userName: 'John', age: 30 };
//     const updatedMember: Member = { id: 1, userName: 'John Doe', age: 35 };

//     component.members = [memberToUpdate];
//     component.updateMember(updatedMember).subscribe(() => {
//       expect(component.members[0]).toEqual(updatedMember);
//     });

//     const req = httpMock.expectOne(component.baseUrl + 'user');
//     expect(req.request.method).toBe('PUT');
//     expect(req.request.body).toEqual(updatedMember);

//     req.flush({}); // Complete the request with an empty response
//   });
// });
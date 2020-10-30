describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect( split([1,2]) ).toEqual( [[1],[2]] );
  });
  it('is able to split an odd length array into two halves', function() {
    expect( split([1,2,3]) ).toEqual( [[1],[2,3]] );
  });
});

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect( merge([1,3,5],[2,4,6]) ).toEqual( [1,2,3,4,5,6] );
  });
  it('is able to merge two diff sorted arrays into one sorted array', function(){
    expect( merge([1,3,5,8,9],[2,4,6,7]) ).toEqual( [1,2,3,4,5,6,7,8,9] );
  });
});

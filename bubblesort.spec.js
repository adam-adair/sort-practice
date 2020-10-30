describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles an array of length 1', function() {
    expect( bubbleSort([1])).toEqual([1]);
  });
  it('sorts an array with length > 1', function() {
    expect(bubbleSort([1, 3, 2, 5, 4])).toEqual([1, 2, 3, 4, 5]);
  });
});

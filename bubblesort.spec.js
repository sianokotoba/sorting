describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('throws an error when passed the wrong argument', function(){
    var arg = function() {
      bubbleSort("hello");
    }
    expect( arg ).toThrow(new Error("unexpected argument"));
  });



  it('tracks the number of comparisons are done for each Bubble sort', function(){
    spyOn(window, 'helper').and.callThrough(); // callThrough creates a new helper
    // in Jasmine to call helper fn. This allows you to use the methods 'call' and 'count'
    bubbleSort([3,1,2,5,6]);
    expect( helper.calls.count() ).toEqual( 10 );
  });

  it('sorts a given array of numbers', function(){
    expect( bubbleSort([4,2,5,1,3]) ).toEqual( [1,2,3,4,5] );
  });

  xit('sorts a given array of strings alphabetically regardless of case', function(){
    expect( bubbleSort(["cat", "banana", "apple", "Candle"]) ).toEqual( ["apple", "banana", "Candle", "cat"] );
  });

});

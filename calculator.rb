class Calculator  
  def add(a, b)
    a + b
  end

  def subtract(a, b)
    a - b
  end
end
calculator = Calculator.new
result = calculator.add(5, 3)
print "5 \+ 3 \= ", result, "\n"
result = calculator.subtract(5, 3)
print "5 \- 3 \= ", result
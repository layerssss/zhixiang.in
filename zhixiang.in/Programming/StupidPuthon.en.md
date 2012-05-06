Stupid Python
==============================
##4.8.Coding Styles

Python is using camelcase mixed with underscore. What if a method name includes a class name?

    kill_the_FilthyMan(man)  
    or
    kill_the_filthyman(man)

And it never mentioned about being private or public, so what should destinguish a variable/argument name and a type name?

##4.4._else_ Clauses on Loops

This looks clumsy.

##5.1.List Comprehensions

Firstly, this hell looks like LINQ.  

And, if this..

    combs = []
    for x in [1,2,3]:
       for y in [3,1,4]:
           if x != y:
                combs.append((x, y))
    
    combs

..can be shortened to..

     [(x, y) for x in [1,2,3] for y in [3,1,4] if x != y]

..,then how can this..

    combs = []
    for x in [1,2,3]:
       for y in [3,1,4]:
           if x != y:
             combs.append((x, y))
      fun();    
    combs

..be shortend?

##5.2.The _del_ statement

_del_ statement can delete an entry from a list-like object.

    >>> a=[1,2,3]
    >>> del a[1]
    >>> a
    [1,3]

Should this really be a statement instead of a build-in function? Or a  member of IEnumerable?

##5.6.Looping Techniques

Should enumerate() be a function instead of a language feature? Are these looping techniques?

##5.7.Chained Comparison

    >>> a=1
    >>> b=2
    >>> c=True
    >>> a<b==c #Can you imagine what it is? 
    False
    >>> (a<b)==c
    True


##5.8.Comparing Sequences and Other Types

Oh, thanks for that, then we no gonna care about all the computation being made anymore.

##7.1.Misleading _zfill_ function

_zfill_ is a method belongs to _string_?!

##9.3.2._self_ Argument

The instant itself is referenced by first argument in _init_ instead of by a _this_ pointer.

    >>> class Complex:
    ...     def __init__(self, realpart, imagpart):
    ...         self.r = realpart
    ...         self.i = imagpart
    ...
    >>> x = Complex(3.0, -4.5)
    >>> x.r, x.i
    (3.0, -4.5)

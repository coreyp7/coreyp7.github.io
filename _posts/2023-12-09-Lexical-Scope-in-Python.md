---
layout: post
category: blog
description: Some explanation and examples of nonlocal keyword.
---

<!-- # Lexical Scope in Python, and the keywords ``global`` and ``nonlocal`` -->

### Quick and dirty summary

In any other modern languages (which follow lexical scope structure), the example below intuitively works.

```
def fun():
	item = 3
	def double():
		item *= 2
		return item
		
	return double()

fun()
```

But it doesn’t, it results in an error: ``UnboundLocalError: local variable ‘item’ referenced before assignment.``

This doesn’t make sense to me, the variable ``item`` should clearly be accessible inside the function ``double()``.

**In Python, outer variables are *generally* accessible to reference, but are unchangeable**.

You can change a variable by declaring that variable in your scope as **``nonlocal``** to modify it.

```
def fun():
	item = 3
	def double():
		nonlocal item
		item *= 2
		return item
		
	return double()

print(fun()) # prints 6, no error
```

*(For other hacky ways of solving the situation and more information on this, read more below).*

## Lexical Scope in Python

**An informal definition of Lexical Scope**: *the ability of a function scope to access variables from its parent scope, and the limitation of being unable to access child function scopes inside of it.*

Here I will outline the dirty rules concerning scope in Python. Pay extra pedantic attention to italicized words, as these are very specific rules:

- You can always *access* variables of the outer scope (unless you've shadowed them, more on that later).

- You are *unable to reassign outer variables* without declaring them first as **``nonlocal``** ( or **``global``** for global variables ).

- If you try to assign a new value to an outer variable without ``nonlocal``/``global``, it will create a new local variable of the same name (which is called ‘shadowing’).

This is where it gets less intuitive for me:

- You can mutate outer variables.
	- You cannot reassign a variable to a different object, but because you have access to it, you can still mutate it.

This is what the ``nonlocal`` keyword is for. Here's the example from earlier:

```
def fun():
	item = 3
	def double():
		nonlocal item
		item *= 2
		return item
		
	return double()

print(fun()) # prints 6, no error
```

[**``nonlocal``**](https://docs.python.org/3/reference/simple_stmts.html#the-nonlocal-statement) specifies the identifier item "*to refer to previously bound variable(s) in the nearest enclosing scope excluding globals*". In this case, the closest definition of item found is 3.

Interestingly (as specified in the documentation linked above), ``nonlocal`` looks for bound variables excluding globals. So this:

```
item = 7
def fun():
	def double():
		nonlocal item
		item *= 2
	
	double()

fun()
print(item)
```

results in a ``Syntax error: no binding for nonlocal 'item' found``.

So, you'd have to utilize the ``global`` keyword for this situation.

```
item = 7
def fun():
	def double():
		global item
		item *= 2
		return item
		
	return double()
	
print(fun()) # prints 14
```

### Cursed Solutions: Warning
Remember in the annoying rules earlier where its mentioned that you can access outer variables, just not modify them?
```
item = 7
def fun():
	def dummy():
		print(item)
		return item
	
	return dummy()

print(fun())
# output will be:
# 7
# 7
```

This is valid. Problems only arise when reassigning those variables. This seems to stem from the lack of a variable declaration keyword.

But because we have access to a variable, we are able to mutate it.

```
class Item:
	def __init__(self, value):
		self.value = value

item = Item(12)
print(item.value) # 12

def fun():
	item.value = 7
	
fun()
print(item.value) # 7
```

See what I mean? You can do the same with a list.

```
item = [4]
print(item[0]) # 4

def fun():
	item[0] = 7

fun()
print(item[0]) # 7
```

*(I saw someone use this in their leetcode solution instead of ``nonlocal`` and I was appalled.)*

It seems that before ``nonlocal``, in situations which ``nonlocal`` solves, you'd have to do this.

### Personal notes

I shockingly never ran into these specifics until 2 situations recently to learn about nonlocal:

- a certain leetcode problem. I wanted to keep track of a number outside of an inner function. I read another  answer where the programmer used the list trick I mentioned above, and I was really confused.

- was writing a program in a functional structure larger than a little script, and just wanted to keep a global dictionary in the module to keep track of something. I was able to mutate it but unable to reassign it from a function.
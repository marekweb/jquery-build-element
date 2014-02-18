# build-element plugin

`build-element` builds elements fast.

Requires jQuery 1.8+.

## Usage

One function: `$.build`.

Give it a tag in the style of a CSS selector.

`$.build('h1#title.heading')` &rarr; `<h1 id="title" class="heading"></h1>`

Pass in attributes as an extra argument.

`$.build('a.link', {href: '/welcome'})` &rarr; `<a class="link" href="/welcome"></a>`
`$.build('h1#title')` &rarr; `<h1 id="title"></h1>`

`$.build('h1#title.heading')` &rarr; `<h1 id="title" class="heading"></h1>`

Pass in child elements or plain text to insert into the element.

`$.build('h1.heading`, 'Welcome') &rarr; `<h1 class="heading">Welcome</h1>`
`$.build('h1.heading{Welcome}')` &rarr; `<h1 class="heading">Welcome</h1>`

## Features

- Slim and fast.
- Test coverage: 100%
- Inspired by Emmet

## Tag string syntax

- `p` Plain tag
- `p#intro` Tag with id
- `p.highlight` Tag with class
- `p#intro.highlight.outline` Multiple classes
- `h1{Introduction to Calculus}` Content text in brackets.

## Nesting

Pass an element as an extra argument to nest it.

```javascript
var $$ = $.build; // Optionally use an alias for easy access.

$$('p', $$('b{Welcome}'));
```
&rarr;
```html
&lt;p&gt;&lt;b&gt;Welcome&lt;/b&gt;&lt;/p&gt;
```

Pass an array of elements to nest them.

```javascript
$$('ul.list', [
	$$('li.item{First Item}'),
	$$('li.item{Second item}')
]);
```
&rarr;
```html
&lt;ul class=&quot;list&quot;&gt;
      &lt;li class=&quot;item&quot;&gt;First Item&lt;/li&gt;
      &lt;li class=&quot;item&quot;&gt;Second Item&lt;/li&gt;
     &lt;/ul&gt;
```

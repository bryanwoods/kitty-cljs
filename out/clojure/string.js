goog.provide('clojure.string');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
clojure.string.seq_reverse = (function seq_reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* Returns s with its characters reversed.
*/
clojure.string.reverse = (function reverse(s){
if(cljs.core.truth_(cljs.core._EQ_.call(null,s.length,0)))
{return "";
} else
{var sb__2086 = (new goog.string.StringBuffer());

var coll__2087 = clojure.string.seq_reverse.call(null,cljs.core.seq.call(null,s.split("")));

while(true){
if(cljs.core.truth_(coll__2087))
{sb__2086.append(cljs.core.first.call(null,coll__2087));
{
var G__2088 = cljs.core.next.call(null,coll__2087);
coll__2087 = G__2088;
continue;
}
} else
{}
break;
}
return sb__2086.toString();
}
});
/**
* Replaces all instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace = (function replace(s,match,replacement){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,match)))
{return s.replace((new RegExp(goog.string.regExpEscape.call(null,match),"g")),replacement);
} else
{if(cljs.core.truth_(match.hasOwnProperty("source")))
{return s.replace((new RegExp(match.source,"g")),replacement);
} else
{if(cljs.core.truth_("﷐'else"))
{throw cljs.core.str.call(null,"Invalid match arg: ",match);
} else
{return null;
}
}
}
});
/**
* Replaces the first instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace_first = (function replace_first(s,match,replacement){
return s.replace(match,replacement);
});
/**
* Returns a string of all elements in coll, as returned by (seq coll),
* separated by an optional separator.
*/
clojure.string.join = (function() {
var join = null;
var join__2089 = (function (coll){
return cljs.core.apply.call(null,cljs.core.str,coll);
});
var join__2090 = (function (separator,coll){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,separator,coll));
});
join = function(separator,coll){
switch(arguments.length){
case  1 :
return join__2089.call(this,separator);
case  2 :
return join__2090.call(this,separator,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return join;
})()
;
/**
* Converts string to all upper-case.
*/
clojure.string.upper_case = (function upper_case(s){
return s.toUpperCase();
});
/**
* Converts string to all lower-case.
*/
clojure.string.lower_case = (function lower_case(s){
return s.toLowerCase();
});
/**
* Converts first character of the string to upper-case, all other
* characters to lower-case.
*/
clojure.string.capitalize = (function capitalize(s){
if(cljs.core.truth_(cljs.core._LT_.call(null,cljs.core.count.call(null,s),2)))
{return clojure.string.upper_case.call(null,s);
} else
{return cljs.core.str.call(null,clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,0,1)),clojure.string.lower_case.call(null,cljs.core.subs.call(null,s,1)));
}
});
/**
* Splits string on a regular expression. Optional argument limit is
* the maximum number of splits. Not lazy. Returns vector of the splits.
*/
clojure.string.split = (function() {
var split = null;
var split__2098 = (function (s,re){
return cljs.core.vec.call(null,cljs.core.str.call(null,s).split(re));
});
var split__2099 = (function (s,re,limit){
if(cljs.core.truth_(cljs.core._LT_.call(null,limit,1)))
{return cljs.core.vec.call(null,cljs.core.str.call(null,s).split(re));
} else
{var s__2092 = s;
var limit__2093 = limit;
var parts__2094 = cljs.core.Vector.fromArray([]);

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,limit__2093,1)))
{return cljs.core.conj.call(null,parts__2094,s__2092);
} else
{var temp__3695__auto____2095 = cljs.core.re_find.call(null,re,s__2092);

if(cljs.core.truth_(temp__3695__auto____2095))
{var m__2096 = temp__3695__auto____2095;

var index__2097 = s__2092.indexOf(m__2096);

{
var G__2101 = s__2092.substring(cljs.core._PLUS_.call(null,index__2097,cljs.core.count.call(null,m__2096)));
var G__2102 = cljs.core.dec.call(null,limit__2093);
var G__2103 = cljs.core.conj.call(null,parts__2094,s__2092.substring(0,index__2097));
s__2092 = G__2101;
limit__2093 = G__2102;
parts__2094 = G__2103;
continue;
}
} else
{return cljs.core.conj.call(null,parts__2094,s__2092);
}
}
break;
}
}
});
split = function(s,re,limit){
switch(arguments.length){
case  2 :
return split__2098.call(this,s,re);
case  3 :
return split__2099.call(this,s,re,limit);
}
throw('Invalid arity: ' + arguments.length);
};
return split;
})()
;
/**
* Splits s on
* or
* .
*/
clojure.string.split_lines = (function split_lines(s){
return clojure.string.split.call(null,s,/\n|\r\n/);
});
/**
* Removes whitespace from both ends of string.
*/
clojure.string.trim = (function trim(s){
return goog.string.trim.call(null,s);
});
/**
* Removes whitespace from the left side of string.
*/
clojure.string.triml = (function triml(s){
return goog.string.trimLeft.call(null,s);
});
/**
* Removes whitespace from the right side of string.
*/
clojure.string.trimr = (function trimr(s){
return goog.string.trimRight.call(null,s);
});
/**
* Removes all trailing newline \n or return \r characters from
* string.  Similar to Perl's chomp.
*/
clojure.string.trim_newline = (function trim_newline(s){
var index__2104 = s.length;

while(true){
if(cljs.core.truth_(cljs.core.zero_QMARK_.call(null,index__2104)))
{return "";
} else
{var ch__2105 = cljs.core.get.call(null,s,cljs.core.dec.call(null,index__2104));

if(cljs.core.truth_((function (){var or__3548__auto____2106 = cljs.core._EQ_.call(null,ch__2105,"\n");

if(cljs.core.truth_(or__3548__auto____2106))
{return or__3548__auto____2106;
} else
{return cljs.core._EQ_.call(null,ch__2105,"\r");
}
})()))
{{
var G__2107 = cljs.core.dec.call(null,index__2104);
index__2104 = G__2107;
continue;
}
} else
{return s.substring(0,index__2104);
}
}
break;
}
});
/**
* True is s is nil, empty, or contains only whitespace.
*/
clojure.string.blank_QMARK_ = (function blank_QMARK_(s){
var s__2108 = cljs.core.str.call(null,s);

if(cljs.core.truth_((function (){var or__3548__auto____2109 = cljs.core.not.call(null,s__2108);

if(cljs.core.truth_(or__3548__auto____2109))
{return or__3548__auto____2109;
} else
{var or__3548__auto____2110 = cljs.core._EQ_.call(null,"",s__2108);

if(cljs.core.truth_(or__3548__auto____2110))
{return or__3548__auto____2110;
} else
{return cljs.core.re_matches.call(null,/\s+/,s__2108);
}
}
})()))
{return true;
} else
{return false;
}
});
/**
* Return a new string, using cmap to escape each character ch
* from s as follows:
* 
* If (cmap ch) is nil, append ch to the new string.
* If (cmap ch) is non-nil, append (str (cmap ch)) instead.
*/
clojure.string.escape = (function escape(s,cmap){
var buffer__2111 = (new goog.string.StringBuffer());
var length__2112 = s.length;

var index__2113 = 0;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,length__2112,index__2113)))
{return buffer__2111.toString();
} else
{var ch__2114 = s.charAt(index__2113);

var temp__3695__auto____2115 = cljs.core.get.call(null,cmap,ch__2114);

if(cljs.core.truth_(temp__3695__auto____2115))
{var replacement__2116 = temp__3695__auto____2115;

buffer__2111.append(cljs.core.str.call(null,replacement__2116));
} else
{buffer__2111.append(ch__2114);
}
{
var G__2117 = cljs.core.inc.call(null,index__2113);
index__2113 = G__2117;
continue;
}
}
break;
}
});

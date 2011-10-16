goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3548__auto____2086 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____2086))
{return or__3548__auto____2086;
} else
{var or__3548__auto____2087 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____2087))
{return or__3548__auto____2087;
} else
{return false;
}
}
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error.call(null,"No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return array[i];
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2088 = coll;

if(cljs.core.truth_(and__3546__auto____2088))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____2088;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____2089 = (_count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2089))
{return or__3548__auto____2089;
} else
{var or__3548__auto____2090 = (_count["_"]);

if(cljs.core.truth_(or__3548__auto____2090))
{return or__3548__auto____2090;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2091 = coll;

if(cljs.core.truth_(and__3546__auto____2091))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____2091;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____2092 = (_empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2092))
{return or__3548__auto____2092;
} else
{var or__3548__auto____2093 = (_empty["_"]);

if(cljs.core.truth_(or__3548__auto____2093))
{return or__3548__auto____2093;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____2094 = coll;

if(cljs.core.truth_(and__3546__auto____2094))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____2094;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____2095 = (_conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2095))
{return or__3548__auto____2095;
} else
{var or__3548__auto____2096 = (_conj["_"]);

if(cljs.core.truth_(or__3548__auto____2096))
{return or__3548__auto____2096;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2103 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____2097 = coll;

if(cljs.core.truth_(and__3546__auto____2097))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____2097;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____2098 = (_nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2098))
{return or__3548__auto____2098;
} else
{var or__3548__auto____2099 = (_nth["_"]);

if(cljs.core.truth_(or__3548__auto____2099))
{return or__3548__auto____2099;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__2104 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____2100 = coll;

if(cljs.core.truth_(and__3546__auto____2100))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____2100;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____2101 = (_nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2101))
{return or__3548__auto____2101;
} else
{var or__3548__auto____2102 = (_nth["_"]);

if(cljs.core.truth_(or__3548__auto____2102))
{return or__3548__auto____2102;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__2103.call(this,coll,n);
case  3 :
return _nth__2104.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2106 = coll;

if(cljs.core.truth_(and__3546__auto____2106))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____2106;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____2107 = (_first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2107))
{return or__3548__auto____2107;
} else
{var or__3548__auto____2108 = (_first["_"]);

if(cljs.core.truth_(or__3548__auto____2108))
{return or__3548__auto____2108;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2109 = coll;

if(cljs.core.truth_(and__3546__auto____2109))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____2109;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____2110 = (_rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2110))
{return or__3548__auto____2110;
} else
{var or__3548__auto____2111 = (_rest["_"]);

if(cljs.core.truth_(or__3548__auto____2111))
{return or__3548__auto____2111;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2118 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____2112 = o;

if(cljs.core.truth_(and__3546__auto____2112))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____2112;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____2113 = (_lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2113))
{return or__3548__auto____2113;
} else
{var or__3548__auto____2114 = (_lookup["_"]);

if(cljs.core.truth_(or__3548__auto____2114))
{return or__3548__auto____2114;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__2119 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____2115 = o;

if(cljs.core.truth_(and__3546__auto____2115))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____2115;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____2116 = (_lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2116))
{return or__3548__auto____2116;
} else
{var or__3548__auto____2117 = (_lookup["_"]);

if(cljs.core.truth_(or__3548__auto____2117))
{return or__3548__auto____2117;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__2118.call(this,o,k);
case  3 :
return _lookup__2119.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2121 = coll;

if(cljs.core.truth_(and__3546__auto____2121))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____2121;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____2122 = (_contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2122))
{return or__3548__auto____2122;
} else
{var or__3548__auto____2123 = (_contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____2123))
{return or__3548__auto____2123;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____2124 = coll;

if(cljs.core.truth_(and__3546__auto____2124))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____2124;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____2125 = (_assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2125))
{return or__3548__auto____2125;
} else
{var or__3548__auto____2126 = (_assoc["_"]);

if(cljs.core.truth_(or__3548__auto____2126))
{return or__3548__auto____2126;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2127 = coll;

if(cljs.core.truth_(and__3546__auto____2127))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____2127;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____2128 = (_dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2128))
{return or__3548__auto____2128;
} else
{var or__3548__auto____2129 = (_dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____2129))
{return or__3548__auto____2129;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____2130 = coll;

if(cljs.core.truth_(and__3546__auto____2130))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____2130;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____2131 = (_disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2131))
{return or__3548__auto____2131;
} else
{var or__3548__auto____2132 = (_disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____2132))
{return or__3548__auto____2132;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2133 = coll;

if(cljs.core.truth_(and__3546__auto____2133))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____2133;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____2134 = (_peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2134))
{return or__3548__auto____2134;
} else
{var or__3548__auto____2135 = (_peek["_"]);

if(cljs.core.truth_(or__3548__auto____2135))
{return or__3548__auto____2135;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2136 = coll;

if(cljs.core.truth_(and__3546__auto____2136))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____2136;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____2137 = (_pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2137))
{return or__3548__auto____2137;
} else
{var or__3548__auto____2138 = (_pop["_"]);

if(cljs.core.truth_(or__3548__auto____2138))
{return or__3548__auto____2138;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____2139 = coll;

if(cljs.core.truth_(and__3546__auto____2139))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____2139;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____2140 = (_assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2140))
{return or__3548__auto____2140;
} else
{var or__3548__auto____2141 = (_assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____2141))
{return or__3548__auto____2141;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____2142 = o;

if(cljs.core.truth_(and__3546__auto____2142))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____2142;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____2143 = (_deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2143))
{return or__3548__auto____2143;
} else
{var or__3548__auto____2144 = (_deref["_"]);

if(cljs.core.truth_(or__3548__auto____2144))
{return or__3548__auto____2144;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____2145 = o;

if(cljs.core.truth_(and__3546__auto____2145))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____2145;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____2146 = (_deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2146))
{return or__3548__auto____2146;
} else
{var or__3548__auto____2147 = (_deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____2147))
{return or__3548__auto____2147;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____2148 = o;

if(cljs.core.truth_(and__3546__auto____2148))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____2148;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____2149 = (_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2149))
{return or__3548__auto____2149;
} else
{var or__3548__auto____2150 = (_meta["_"]);

if(cljs.core.truth_(or__3548__auto____2150))
{return or__3548__auto____2150;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____2151 = o;

if(cljs.core.truth_(and__3546__auto____2151))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____2151;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____2152 = (_with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2152))
{return or__3548__auto____2152;
} else
{var or__3548__auto____2153 = (_with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____2153))
{return or__3548__auto____2153;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2160 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____2154 = coll;

if(cljs.core.truth_(and__3546__auto____2154))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____2154;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____2155 = (_reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2155))
{return or__3548__auto____2155;
} else
{var or__3548__auto____2156 = (_reduce["_"]);

if(cljs.core.truth_(or__3548__auto____2156))
{return or__3548__auto____2156;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__2161 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____2157 = coll;

if(cljs.core.truth_(and__3546__auto____2157))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____2157;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____2158 = (_reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2158))
{return or__3548__auto____2158;
} else
{var or__3548__auto____2159 = (_reduce["_"]);

if(cljs.core.truth_(or__3548__auto____2159))
{return or__3548__auto____2159;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__2160.call(this,coll,f);
case  3 :
return _reduce__2161.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____2163 = o;

if(cljs.core.truth_(and__3546__auto____2163))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____2163;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____2164 = (_equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2164))
{return or__3548__auto____2164;
} else
{var or__3548__auto____2165 = (_equiv["_"]);

if(cljs.core.truth_(or__3548__auto____2165))
{return or__3548__auto____2165;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____2166 = o;

if(cljs.core.truth_(and__3546__auto____2166))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____2166;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____2167 = (_hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2167))
{return or__3548__auto____2167;
} else
{var or__3548__auto____2168 = (_hash["_"]);

if(cljs.core.truth_(or__3548__auto____2168))
{return or__3548__auto____2168;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____2169 = o;

if(cljs.core.truth_(and__3546__auto____2169))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____2169;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____2170 = (_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2170))
{return or__3548__auto____2170;
} else
{var or__3548__auto____2171 = (_seq["_"]);

if(cljs.core.truth_(or__3548__auto____2171))
{return or__3548__auto____2171;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IRecord = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3546__auto____2172 = o;

if(cljs.core.truth_(and__3546__auto____2172))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____2172;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____2173 = (_pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2173))
{return or__3548__auto____2173;
} else
{var or__3548__auto____2174 = (_pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____2174))
{return or__3548__auto____2174;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____2175 = d;

if(cljs.core.truth_(and__3546__auto____2175))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____2175;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____2176 = (_realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____2176))
{return or__3548__auto____2176;
} else
{var or__3548__auto____2177 = (_realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____2177))
{return or__3548__auto____2177;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return cljs.core.identical_QMARK_.call(null,x,null);
});
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return cljs.core.nil_QMARK_.call(null,o);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__2178 = null;
var G__2178__2179 = (function (_,n){
return null;
});
var G__2178__2180 = (function (_,n,not_found){
return not_found;
});
G__2178 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__2178__2179.call(this,_,n);
case  3 :
return G__2178__2180.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2178;
})()
);
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__2182 = null;
var G__2182__2183 = (function (_,f){
return f.call(null);
});
var G__2182__2184 = (function (_,f,start){
return start;
});
G__2182 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__2182__2183.call(this,_,f);
case  3 :
return G__2182__2184.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2182;
})()
);
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__2186 = null;
var G__2186__2187 = (function (o,k){
return null;
});
var G__2186__2188 = (function (o,k,not_found){
return not_found;
});
G__2186 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__2186__2187.call(this,o,k);
case  3 :
return G__2186__2188.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2186;
})()
);
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return cljs.core.identical_QMARK_.call(null,o.toString,other.toString);
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return cljs.core.identical_QMARK_.call(null,x,o);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
cljs.core.lt_ = (function lt_(x,y){
return (x < y);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2196 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__2190 = cljs.core._nth.call(null,cicoll,0);
var n__2191 = 1;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__2191,cljs.core._count.call(null,cicoll))))
{{
var G__2200 = f.call(null,val__2190,cljs.core._nth.call(null,cicoll,n__2191));
var G__2201 = cljs.core.inc.call(null,n__2191);
val__2190 = G__2200;
n__2191 = G__2201;
continue;
}
} else
{return val__2190;
}
break;
}
}
});
var ci_reduce__2197 = (function (cicoll,f,val){
var val__2192 = val;
var n__2193 = 0;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__2193,cljs.core._count.call(null,cicoll))))
{{
var G__2202 = f.call(null,val__2192,cljs.core._nth.call(null,cicoll,n__2193));
var G__2203 = cljs.core.inc.call(null,n__2193);
val__2192 = G__2202;
n__2193 = G__2203;
continue;
}
} else
{return val__2192;
}
break;
}
});
var ci_reduce__2198 = (function (cicoll,f,val,idx){
var val__2194 = val;
var n__2195 = idx;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__2195,cljs.core._count.call(null,cicoll))))
{{
var G__2204 = f.call(null,val__2194,cljs.core._nth.call(null,cicoll,n__2195));
var G__2205 = cljs.core.inc.call(null,n__2195);
val__2194 = G__2204;
n__2195 = G__2205;
continue;
}
} else
{return val__2194;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__2196.call(this,cicoll,f);
case  3 :
return ci_reduce__2197.call(this,cicoll,f,val);
case  4 :
return ci_reduce__2198.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__2213 = null;
var G__2213__2214 = (function (coll,f){
var this__2206 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__2206.a[this__2206.i]),cljs.core.inc.call(null,this__2206.i));
});
var G__2213__2215 = (function (coll,f,start){
var this__2207 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__2207.i);
});
G__2213 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2213__2214.call(this,coll,f);
case  3 :
return G__2213__2215.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2213;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2208 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__2209 = this;
return this__2209.a.length;
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__2210 = this;
return (this__2210.a[this__2210.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__2211 = this;
if(cljs.core.truth_(cljs.core.lt_.call(null,cljs.core.inc.call(null,this__2211.i),this__2211.a.length)))
{return (new cljs.core.IndexedSeq(this__2211.a,cljs.core.inc.call(null,this__2211.i)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__2212 = this;
return this$;
});
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,prim.length)))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__2217 = null;
var G__2217__2218 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__2217__2219 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__2217 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__2217__2218.call(this,array,f);
case  3 :
return G__2217__2219.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2217;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__2221 = null;
var G__2221__2222 = (function (array,k){
return (array[k]);
});
var G__2221__2223 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__2221 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__2221__2222.call(this,array,k);
case  3 :
return G__2221__2223.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2221;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__2225 = null;
var G__2225__2226 = (function (array,n){
if(cljs.core.truth_(cljs.core.lt_.call(null,n,array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__2225__2227 = (function (array,n,not_found){
if(cljs.core.truth_(cljs.core.lt_.call(null,n,array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__2225 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__2225__2226.call(this,array,n);
case  3 :
return G__2225__2227.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2225;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3698__auto____2229 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____2229))
{var s__2230 = temp__3698__auto____2229;

return cljs.core._first.call(null,s__2230);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__2231 = cljs.core.next.call(null,s);
s = G__2231;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__2232 = cljs.core.seq.call(null,x);
var n__2233 = 0;

while(true){
if(cljs.core.truth_(s__2232))
{{
var G__2234 = cljs.core.next.call(null,s__2232);
var G__2235 = cljs.core.inc.call(null,n__2233);
s__2232 = G__2234;
n__2233 = G__2235;
continue;
}
} else
{return n__2233;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return cljs.core.identical_QMARK_.call(null,x,o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2236 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__2237 = (function() { 
var G__2239__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__2240 = conj.call(null,coll,x);
var G__2241 = cljs.core.first.call(null,xs);
var G__2242 = cljs.core.next.call(null,xs);
coll = G__2240;
x = G__2241;
xs = G__2242;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__2239 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2239__delegate.call(this, coll, x, xs);
};
G__2239.cljs$lang$maxFixedArity = 2;
G__2239.cljs$lang$applyTo = (function (arglist__2243){
var coll = cljs.core.first(arglist__2243);
var x = cljs.core.first(cljs.core.next(arglist__2243));
var xs = cljs.core.rest(cljs.core.next(arglist__2243));
return G__2239__delegate.call(this, coll, x, xs);
});
return G__2239;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__2236.call(this,coll,x);
default:
return conj__2237.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__2237.cljs$lang$applyTo;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2244 = (function (coll,n){
return cljs.core._nth.call(null,coll,n);
});
var nth__2245 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,n,not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__2244.call(this,coll,n);
case  3 :
return nth__2245.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2247 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__2248 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__2247.call(this,o,k);
case  3 :
return get__2248.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__2251 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__2252 = (function() { 
var G__2254__delegate = function (coll,k,v,kvs){
while(true){
var ret__2250 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__2255 = ret__2250;
var G__2256 = cljs.core.first.call(null,kvs);
var G__2257 = cljs.core.second.call(null,kvs);
var G__2258 = cljs.core.nnext.call(null,kvs);
coll = G__2255;
k = G__2256;
v = G__2257;
kvs = G__2258;
continue;
}
} else
{return ret__2250;
}
break;
}
};
var G__2254 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2254__delegate.call(this, coll, k, v, kvs);
};
G__2254.cljs$lang$maxFixedArity = 3;
G__2254.cljs$lang$applyTo = (function (arglist__2259){
var coll = cljs.core.first(arglist__2259);
var k = cljs.core.first(cljs.core.next(arglist__2259));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2259)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2259)));
return G__2254__delegate.call(this, coll, k, v, kvs);
});
return G__2254;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__2251.call(this,coll,k,v);
default:
return assoc__2252.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__2252.cljs$lang$applyTo;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__2261 = (function (coll){
return coll;
});
var dissoc__2262 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__2263 = (function() { 
var G__2265__delegate = function (coll,k,ks){
while(true){
var ret__2260 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2266 = ret__2260;
var G__2267 = cljs.core.first.call(null,ks);
var G__2268 = cljs.core.next.call(null,ks);
coll = G__2266;
k = G__2267;
ks = G__2268;
continue;
}
} else
{return ret__2260;
}
break;
}
};
var G__2265 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2265__delegate.call(this, coll, k, ks);
};
G__2265.cljs$lang$maxFixedArity = 2;
G__2265.cljs$lang$applyTo = (function (arglist__2269){
var coll = cljs.core.first(arglist__2269);
var k = cljs.core.first(cljs.core.next(arglist__2269));
var ks = cljs.core.rest(cljs.core.next(arglist__2269));
return G__2265__delegate.call(this, coll, k, ks);
});
return G__2265;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__2261.call(this,coll);
case  2 :
return dissoc__2262.call(this,coll,k);
default:
return dissoc__2263.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__2263.cljs$lang$applyTo;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if(cljs.core.truth_((function (){var x__163__auto____2270 = o;

if(cljs.core.truth_((function (){var and__3546__auto____2271 = x__163__auto____2270;

if(cljs.core.truth_(and__3546__auto____2271))
{return x__163__auto____2270.cljs$core$IMeta$;
} else
{return and__3546__auto____2271;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__163__auto____2270);
}
})()))
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__2273 = (function (coll){
return coll;
});
var disj__2274 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__2275 = (function() { 
var G__2277__delegate = function (coll,k,ks){
while(true){
var ret__2272 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2278 = ret__2272;
var G__2279 = cljs.core.first.call(null,ks);
var G__2280 = cljs.core.next.call(null,ks);
coll = G__2278;
k = G__2279;
ks = G__2280;
continue;
}
} else
{return ret__2272;
}
break;
}
};
var G__2277 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2277__delegate.call(this, coll, k, ks);
};
G__2277.cljs$lang$maxFixedArity = 2;
G__2277.cljs$lang$applyTo = (function (arglist__2281){
var coll = cljs.core.first(arglist__2281);
var k = cljs.core.first(cljs.core.next(arglist__2281));
var ks = cljs.core.rest(cljs.core.next(arglist__2281));
return G__2277__delegate.call(this, coll, k, ks);
});
return G__2277;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__2273.call(this,coll);
case  2 :
return disj__2274.call(this,coll,k);
default:
return disj__2275.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__2275.cljs$lang$applyTo;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__163__auto____2282 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2283 = x__163__auto____2282;

if(cljs.core.truth_(and__3546__auto____2283))
{return x__163__auto____2282.cljs$core$ICollection$;
} else
{return and__3546__auto____2283;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__163__auto____2282);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__163__auto____2284 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2285 = x__163__auto____2284;

if(cljs.core.truth_(and__3546__auto____2285))
{return x__163__auto____2284.cljs$core$ISet$;
} else
{return and__3546__auto____2285;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__163__auto____2284);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__163__auto____2286 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2287 = x__163__auto____2286;

if(cljs.core.truth_(and__3546__auto____2287))
{return x__163__auto____2286.cljs$core$IAssociative$;
} else
{return and__3546__auto____2287;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__163__auto____2286);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__163__auto____2288 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2289 = x__163__auto____2288;

if(cljs.core.truth_(and__3546__auto____2289))
{return x__163__auto____2288.cljs$core$ISequential$;
} else
{return and__3546__auto____2289;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__163__auto____2288);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__163__auto____2290 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2291 = x__163__auto____2290;

if(cljs.core.truth_(and__3546__auto____2291))
{return x__163__auto____2290.cljs$core$ICounted$;
} else
{return and__3546__auto____2291;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__163__auto____2290);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__163__auto____2292 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2293 = x__163__auto____2292;

if(cljs.core.truth_(and__3546__auto____2293))
{return x__163__auto____2292.cljs$core$IMap$;
} else
{return and__3546__auto____2293;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__163__auto____2292);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__163__auto____2294 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2295 = x__163__auto____2294;

if(cljs.core.truth_(and__3546__auto____2295))
{return x__163__auto____2294.cljs$core$IVector$;
} else
{return and__3546__auto____2295;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__163__auto____2294);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__2296 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__2296.push(key);
}));
return keys__2296;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,s)))
{return false;
} else
{var x__163__auto____2297 = s;

if(cljs.core.truth_((function (){var and__3546__auto____2298 = x__163__auto____2297;

if(cljs.core.truth_(and__3546__auto____2298))
{return x__163__auto____2297.cljs$core$ISeq$;
} else
{return and__3546__auto____2298;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__163__auto____2297);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3546__auto____2299 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2299))
{return cljs.core.not.call(null,(function (){var or__3548__auto____2300 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____2300))
{return or__3548__auto____2300;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____2299;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____2301 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2301))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____2301;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____2302 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2302))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____2302;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3546__auto____2303 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____2303))
{return (n == n.toFixed());
} else
{return and__3546__auto____2303;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel),cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2304 = coll;

if(cljs.core.truth_(and__3546__auto____2304))
{var and__3546__auto____2305 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____2305))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____2305;
}
} else
{return and__3546__auto____2304;
}
})()))
{return cljs.core.Vector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___2310 = (function (x){
return true;
});
var distinct_QMARK___2311 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___2312 = (function() { 
var G__2314__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__2306 = cljs.core.set([y,x]);
var xs__2307 = more;

while(true){
var x__2308 = cljs.core.first.call(null,xs__2307);
var etc__2309 = cljs.core.next.call(null,xs__2307);

if(cljs.core.truth_(xs__2307))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__2306,x__2308)))
{return false;
} else
{{
var G__2315 = cljs.core.conj.call(null,s__2306,x__2308);
var G__2316 = etc__2309;
s__2306 = G__2315;
xs__2307 = G__2316;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__2314 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2314__delegate.call(this, x, y, more);
};
G__2314.cljs$lang$maxFixedArity = 2;
G__2314.cljs$lang$applyTo = (function (arglist__2317){
var x = cljs.core.first(arglist__2317);
var y = cljs.core.first(cljs.core.next(arglist__2317));
var more = cljs.core.rest(cljs.core.next(arglist__2317));
return G__2314__delegate.call(this, x, y, more);
});
return G__2314;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___2310.call(this,x);
case  2 :
return distinct_QMARK___2311.call(this,x,y);
default:
return distinct_QMARK___2312.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___2312.cljs$lang$applyTo;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__2318 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__2318)))
{return r__2318;
} else
{if(cljs.core.truth_(r__2318))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__2320 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2321 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__2319 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__2319,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__2319);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__2320.call(this,comp);
case  2 :
return sort__2321.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2323 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__2324 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__2323.call(this,keyfn,comp);
case  3 :
return sort_by__2324.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2326 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__2327 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__2326.call(this,f,val);
case  3 :
return reduce__2327.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2333 = (function (f,coll){
var temp__3695__auto____2329 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____2329))
{var s__2330 = temp__3695__auto____2329;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__2330),cljs.core.next.call(null,s__2330));
} else
{return f.call(null);
}
});
var seq_reduce__2334 = (function (f,val,coll){
var val__2331 = val;
var coll__2332 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__2332))
{{
var G__2336 = f.call(null,val__2331,cljs.core.first.call(null,coll__2332));
var G__2337 = cljs.core.next.call(null,coll__2332);
val__2331 = G__2336;
coll__2332 = G__2337;
continue;
}
} else
{return val__2331;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__2333.call(this,f,val);
case  3 :
return seq_reduce__2334.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__2338 = null;
var G__2338__2339 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__2338__2340 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__2338 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2338__2339.call(this,coll,f);
case  3 :
return G__2338__2340.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2338;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___2342 = (function (){
return 0;
});
var _PLUS___2343 = (function (x){
return x;
});
var _PLUS___2344 = (function (x,y){
return (x + y);
});
var _PLUS___2345 = (function() { 
var G__2347__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,_PLUS_.call(null,x,y),more);
};
var G__2347 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2347__delegate.call(this, x, y, more);
};
G__2347.cljs$lang$maxFixedArity = 2;
G__2347.cljs$lang$applyTo = (function (arglist__2348){
var x = cljs.core.first(arglist__2348);
var y = cljs.core.first(cljs.core.next(arglist__2348));
var more = cljs.core.rest(cljs.core.next(arglist__2348));
return G__2347__delegate.call(this, x, y, more);
});
return G__2347;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___2342.call(this);
case  1 :
return _PLUS___2343.call(this,x);
case  2 :
return _PLUS___2344.call(this,x,y);
default:
return _PLUS___2345.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___2345.cljs$lang$applyTo;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___2349 = (function (x){
return (- x);
});
var ___2350 = (function (x,y){
return (x - y);
});
var ___2351 = (function() { 
var G__2353__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,_.call(null,x,y),more);
};
var G__2353 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2353__delegate.call(this, x, y, more);
};
G__2353.cljs$lang$maxFixedArity = 2;
G__2353.cljs$lang$applyTo = (function (arglist__2354){
var x = cljs.core.first(arglist__2354);
var y = cljs.core.first(cljs.core.next(arglist__2354));
var more = cljs.core.rest(cljs.core.next(arglist__2354));
return G__2353__delegate.call(this, x, y, more);
});
return G__2353;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___2349.call(this,x);
case  2 :
return ___2350.call(this,x,y);
default:
return ___2351.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___2351.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___2355 = (function (){
return 1;
});
var _STAR___2356 = (function (x){
return x;
});
var _STAR___2357 = (function (x,y){
return (x * y);
});
var _STAR___2358 = (function() { 
var G__2360__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,_STAR_.call(null,x,y),more);
};
var G__2360 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2360__delegate.call(this, x, y, more);
};
G__2360.cljs$lang$maxFixedArity = 2;
G__2360.cljs$lang$applyTo = (function (arglist__2361){
var x = cljs.core.first(arglist__2361);
var y = cljs.core.first(cljs.core.next(arglist__2361));
var more = cljs.core.rest(cljs.core.next(arglist__2361));
return G__2360__delegate.call(this, x, y, more);
});
return G__2360;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___2355.call(this);
case  1 :
return _STAR___2356.call(this,x);
case  2 :
return _STAR___2357.call(this,x,y);
default:
return _STAR___2358.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___2358.cljs$lang$applyTo;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___2362 = (function (x){
return (1 / x);
});
var _SLASH___2363 = (function (x,y){
return (x / y);
});
var _SLASH___2364 = (function() { 
var G__2366__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__2366 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2366__delegate.call(this, x, y, more);
};
G__2366.cljs$lang$maxFixedArity = 2;
G__2366.cljs$lang$applyTo = (function (arglist__2367){
var x = cljs.core.first(arglist__2367);
var y = cljs.core.first(cljs.core.next(arglist__2367));
var more = cljs.core.rest(cljs.core.next(arglist__2367));
return G__2366__delegate.call(this, x, y, more);
});
return G__2366;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___2362.call(this,x);
case  2 :
return _SLASH___2363.call(this,x,y);
default:
return _SLASH___2364.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___2364.cljs$lang$applyTo;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___2368 = (function (x){
return true;
});
var _LT___2369 = (function (x,y){
return (x < y);
});
var _LT___2370 = (function() { 
var G__2372__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2373 = y;
var G__2374 = cljs.core.first.call(null,more);
var G__2375 = cljs.core.next.call(null,more);
x = G__2373;
y = G__2374;
more = G__2375;
continue;
}
} else
{return _LT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2372 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2372__delegate.call(this, x, y, more);
};
G__2372.cljs$lang$maxFixedArity = 2;
G__2372.cljs$lang$applyTo = (function (arglist__2376){
var x = cljs.core.first(arglist__2376);
var y = cljs.core.first(cljs.core.next(arglist__2376));
var more = cljs.core.rest(cljs.core.next(arglist__2376));
return G__2372__delegate.call(this, x, y, more);
});
return G__2372;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___2368.call(this,x);
case  2 :
return _LT___2369.call(this,x,y);
default:
return _LT___2370.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___2370.cljs$lang$applyTo;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___2377 = (function (x){
return true;
});
var _LT__EQ___2378 = (function (x,y){
return (x <= y);
});
var _LT__EQ___2379 = (function() { 
var G__2381__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2382 = y;
var G__2383 = cljs.core.first.call(null,more);
var G__2384 = cljs.core.next.call(null,more);
x = G__2382;
y = G__2383;
more = G__2384;
continue;
}
} else
{return _LT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2381 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2381__delegate.call(this, x, y, more);
};
G__2381.cljs$lang$maxFixedArity = 2;
G__2381.cljs$lang$applyTo = (function (arglist__2385){
var x = cljs.core.first(arglist__2385);
var y = cljs.core.first(cljs.core.next(arglist__2385));
var more = cljs.core.rest(cljs.core.next(arglist__2385));
return G__2381__delegate.call(this, x, y, more);
});
return G__2381;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___2377.call(this,x);
case  2 :
return _LT__EQ___2378.call(this,x,y);
default:
return _LT__EQ___2379.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___2379.cljs$lang$applyTo;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___2386 = (function (x){
return true;
});
var _GT___2387 = (function (x,y){
return (x > y);
});
var _GT___2388 = (function() { 
var G__2390__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2391 = y;
var G__2392 = cljs.core.first.call(null,more);
var G__2393 = cljs.core.next.call(null,more);
x = G__2391;
y = G__2392;
more = G__2393;
continue;
}
} else
{return _GT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2390 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2390__delegate.call(this, x, y, more);
};
G__2390.cljs$lang$maxFixedArity = 2;
G__2390.cljs$lang$applyTo = (function (arglist__2394){
var x = cljs.core.first(arglist__2394);
var y = cljs.core.first(cljs.core.next(arglist__2394));
var more = cljs.core.rest(cljs.core.next(arglist__2394));
return G__2390__delegate.call(this, x, y, more);
});
return G__2390;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___2386.call(this,x);
case  2 :
return _GT___2387.call(this,x,y);
default:
return _GT___2388.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___2388.cljs$lang$applyTo;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___2395 = (function (x){
return true;
});
var _GT__EQ___2396 = (function (x,y){
return (x >= y);
});
var _GT__EQ___2397 = (function() { 
var G__2399__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2400 = y;
var G__2401 = cljs.core.first.call(null,more);
var G__2402 = cljs.core.next.call(null,more);
x = G__2400;
y = G__2401;
more = G__2402;
continue;
}
} else
{return _GT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2399 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2399__delegate.call(this, x, y, more);
};
G__2399.cljs$lang$maxFixedArity = 2;
G__2399.cljs$lang$applyTo = (function (arglist__2403){
var x = cljs.core.first(arglist__2403);
var y = cljs.core.first(cljs.core.next(arglist__2403));
var more = cljs.core.rest(cljs.core.next(arglist__2403));
return G__2399__delegate.call(this, x, y, more);
});
return G__2399;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___2395.call(this,x);
case  2 :
return _GT__EQ___2396.call(this,x,y);
default:
return _GT__EQ___2397.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___2397.cljs$lang$applyTo;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return cljs.core._.call(null,x,1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__2404 = (function (x){
return x;
});
var max__2405 = (function (x,y){
return ((x > y) ? x : y);
});
var max__2406 = (function() { 
var G__2408__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,max.call(null,x,y),more);
};
var G__2408 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2408__delegate.call(this, x, y, more);
};
G__2408.cljs$lang$maxFixedArity = 2;
G__2408.cljs$lang$applyTo = (function (arglist__2409){
var x = cljs.core.first(arglist__2409);
var y = cljs.core.first(cljs.core.next(arglist__2409));
var more = cljs.core.rest(cljs.core.next(arglist__2409));
return G__2408__delegate.call(this, x, y, more);
});
return G__2408;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__2404.call(this,x);
case  2 :
return max__2405.call(this,x,y);
default:
return max__2406.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__2406.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__2410 = (function (x){
return x;
});
var min__2411 = (function (x,y){
return ((x < y) ? x : y);
});
var min__2412 = (function() { 
var G__2414__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,min.call(null,x,y),more);
};
var G__2414 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2414__delegate.call(this, x, y, more);
};
G__2414.cljs$lang$maxFixedArity = 2;
G__2414.cljs$lang$applyTo = (function (arglist__2415){
var x = cljs.core.first(arglist__2415);
var y = cljs.core.first(cljs.core.next(arglist__2415));
var more = cljs.core.rest(cljs.core.next(arglist__2415));
return G__2414__delegate.call(this, x, y, more);
});
return G__2414;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__2410.call(this,x);
case  2 :
return min__2411.call(this,x,y);
default:
return min__2412.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__2412.cljs$lang$applyTo;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_(cljs.core._GT__EQ_.call(null,q,0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__2416 = cljs.core.mod.call(null,n,d);

return cljs.core.fix.call(null,((n - rem__2416) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__2417 = cljs.core.quot.call(null,n,d);

return (n - (d * q__2417));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__2418 = (function (){
return Math.random.call(null);
});
var rand__2419 = (function (n){
return cljs.core._STAR_.call(null,n,rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__2418.call(this);
case  1 :
return rand__2419.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___2421 = (function (x){
return true;
});
var _EQ__EQ___2422 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___2423 = (function() { 
var G__2425__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2426 = y;
var G__2427 = cljs.core.first.call(null,more);
var G__2428 = cljs.core.next.call(null,more);
x = G__2426;
y = G__2427;
more = G__2428;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2425 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2425__delegate.call(this, x, y, more);
};
G__2425.cljs$lang$maxFixedArity = 2;
G__2425.cljs$lang$applyTo = (function (arglist__2429){
var x = cljs.core.first(arglist__2429);
var y = cljs.core.first(cljs.core.next(arglist__2429));
var more = cljs.core.rest(cljs.core.next(arglist__2429));
return G__2425__delegate.call(this, x, y, more);
});
return G__2425;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___2421.call(this,x);
case  2 :
return _EQ__EQ___2422.call(this,x,y);
default:
return _EQ__EQ___2423.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___2423.cljs$lang$applyTo;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return cljs.core._LT_.call(null,0,n);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return cljs.core._EQ__EQ_.call(null,0,n);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__2430 = n;
var xs__2431 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____2432 = xs__2431;

if(cljs.core.truth_(and__3546__auto____2432))
{return cljs.core.pos_QMARK_.call(null,n__2430);
} else
{return and__3546__auto____2432;
}
})()))
{{
var G__2433 = cljs.core.dec.call(null,n__2430);
var G__2434 = cljs.core.next.call(null,xs__2431);
n__2430 = G__2433;
xs__2431 = G__2434;
continue;
}
} else
{return xs__2431;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__2439 = null;
var G__2439__2440 = (function (coll,n){
var temp__3695__auto____2435 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____2435))
{var xs__2436 = temp__3695__auto____2435;

return cljs.core.first.call(null,xs__2436);
} else
{throw "Index out of bounds";
}
});
var G__2439__2441 = (function (coll,n,not_found){
var temp__3695__auto____2437 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____2437))
{var xs__2438 = temp__3695__auto____2437;

return cljs.core.first.call(null,xs__2438);
} else
{return not_found;
}
});
G__2439 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2439__2440.call(this,coll,n);
case  3 :
return G__2439__2441.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2439;
})()
);
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__2443 = (function (){
return "";
});
var str__2444 = (function (x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{return x.toString();
}
});
var str__2445 = (function() { 
var G__2447__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__2448 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__2449 = cljs.core.next.call(null,more);
sb = G__2448;
more = G__2449;
continue;
}
} else
{return str.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__2447 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__2447__delegate.call(this, x, ys);
};
G__2447.cljs$lang$maxFixedArity = 1;
G__2447.cljs$lang$applyTo = (function (arglist__2450){
var x = cljs.core.first(arglist__2450);
var ys = cljs.core.rest(arglist__2450);
return G__2447__delegate.call(this, x, ys);
});
return G__2447;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__2443.call(this);
case  1 :
return str__2444.call(this,x);
default:
return str__2445.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2445.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2451 = (function (s,start){
return s.substring(start);
});
var subs__2452 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__2451.call(this,s,start);
case  3 :
return subs__2452.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__2454 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return cljs.core.str.call(null,"﷑","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str.call(null,"﷑","'",name);
} else
{return null;
}
}
}
});
var symbol__2455 = (function (ns,name){
return symbol.call(null,cljs.core.str.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__2454.call(this,ns);
case  2 :
return symbol__2455.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__2457 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str.call(null,"﷐","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str.call(null,"﷐","'",name);
} else
{return null;
}
}
}
});
var keyword__2458 = (function (ns,name){
return keyword.call(null,cljs.core.str.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__2457.call(this,ns);
case  2 :
return keyword__2458.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__2460 = cljs.core.seq.call(null,x);
var ys__2461 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__2460)))
{return cljs.core.nil_QMARK_.call(null,ys__2461);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__2461)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__2460),cljs.core.first.call(null,ys__2461))))
{{
var G__2462 = cljs.core.next.call(null,xs__2460);
var G__2463 = cljs.core.next.call(null,ys__2461);
xs__2460 = G__2462;
ys__2461 = G__2463;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return cljs.core.bit_xor.call(null,seed,cljs.core._PLUS_.call(null,hash,2654435769,cljs.core.bit_shift_left.call(null,seed,6),cljs.core.bit_shift_right.call(null,seed,2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__2464_SHARP_,p2__2465_SHARP_){
return cljs.core.hash_combine.call(null,p1__2464_SHARP_,cljs.core.hash.call(null,p2__2465_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2466 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2467 = this;
return (new cljs.core.List(this__2467.meta,o,coll,cljs.core.inc.call(null,this__2467.count)));
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2468 = this;
return this__2468.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2469 = this;
return this__2469.rest;
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2470 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2471 = this;
return this__2471.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2472 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2473 = this;
return (new cljs.core.List(meta,this__2473.first,this__2473.rest,this__2473.count));
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2474 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2475 = this;
return this__2475.meta;
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2476 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2477 = this;
return this__2477.count;
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2478 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2479 = this;
return (new cljs.core.List(this__2479.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2480 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2481 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2482 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2483 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2484 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2485 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2486 = this;
return coll;
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2487 = this;
return this__2487.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2488 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2489 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__2490){
var items = cljs.core.seq( arglist__2490 );;
return list__delegate.call(this, items);
});
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2491 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2492 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2493 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2494 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2494.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2495 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2496 = this;
return this__2496.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2497 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__2497.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__2497.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2498 = this;
return this__2498.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2499 = this;
return (new cljs.core.Cons(meta,this__2499.first,this__2499.rest));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__2500 = null;
var G__2500__2501 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__2500__2502 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__2500 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__2500__2501.call(this,string,f);
case  3 :
return G__2500__2502.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2500;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__2504 = null;
var G__2504__2505 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__2504__2506 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__2504 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__2504__2505.call(this,string,k);
case  3 :
return G__2504__2506.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2504;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__2508 = null;
var G__2508__2509 = (function (string,n){
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__2508__2510 = (function (string,n,not_found){
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__2508 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__2508__2509.call(this,string,n);
case  3 :
return G__2508__2510.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2508;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
String['prototype']['call'] = (function() {
var G__2512 = null;
var G__2512__2513 = (function (_,coll){
return cljs.core.get.call(null,coll,this.toString());
});
var G__2512__2514 = (function (_,coll,not_found){
return cljs.core.get.call(null,coll,this.toString(),not_found);
});
G__2512 = function(_,coll,not_found){
switch(arguments.length){
case  2 :
return G__2512__2513.call(this,_,coll);
case  3 :
return G__2512__2514.call(this,_,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2512;
})()
;
String['prototype']['apply'] = (function (s,args){
if(cljs.core.truth_(cljs.core._LT_.call(null,cljs.core.count.call(null,args),2)))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__2516 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__2516;
} else
{lazy_seq.x = x__2516.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2517 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2518 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2519 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2520 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2520.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2521 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2522 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2523 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2524 = this;
return this__2524.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2525 = this;
return (new cljs.core.LazySeq(meta,this__2525.realized,this__2525.x));
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__2526 = cljs.core.array.call(null);

var s__2527 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__2527)))
{ary__2526.push(cljs.core.first.call(null,s__2527));
{
var G__2528 = cljs.core.next.call(null,s__2527);
s__2527 = G__2528;
continue;
}
} else
{return ary__2526;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__2529 = s;
var i__2530 = n;
var sum__2531 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____2532 = cljs.core.pos_QMARK_.call(null,i__2530);

if(cljs.core.truth_(and__3546__auto____2532))
{return cljs.core.seq.call(null,s__2529);
} else
{return and__3546__auto____2532;
}
})()))
{{
var G__2533 = cljs.core.next.call(null,s__2529);
var G__2534 = cljs.core.dec.call(null,i__2530);
var G__2535 = cljs.core.inc.call(null,sum__2531);
s__2529 = G__2533;
i__2530 = G__2534;
sum__2531 = G__2535;
continue;
}
} else
{return sum__2531;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,arglist)))
{return null;
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.next.call(null,arglist))))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__2539 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__2540 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__2541 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__2536 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__2536))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__2536),concat.call(null,cljs.core.rest.call(null,s__2536),y));
} else
{return y;
}
})));
});
var concat__2542 = (function() { 
var G__2544__delegate = function (x,y,zs){
var cat__2538 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__2537 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__2537))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__2537),cat.call(null,cljs.core.rest.call(null,xys__2537),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__2538.call(null,concat.call(null,x,y),zs);
};
var G__2544 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2544__delegate.call(this, x, y, zs);
};
G__2544.cljs$lang$maxFixedArity = 2;
G__2544.cljs$lang$applyTo = (function (arglist__2545){
var x = cljs.core.first(arglist__2545);
var y = cljs.core.first(cljs.core.next(arglist__2545));
var zs = cljs.core.rest(cljs.core.next(arglist__2545));
return G__2544__delegate.call(this, x, y, zs);
});
return G__2544;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__2539.call(this);
case  1 :
return concat__2540.call(this,x);
case  2 :
return concat__2541.call(this,x,y);
default:
return concat__2542.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__2542.cljs$lang$applyTo;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___2546 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2547 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___2548 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___2549 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___2550 = (function() { 
var G__2552__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__2552 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2552__delegate.call(this, a, b, c, d, more);
};
G__2552.cljs$lang$maxFixedArity = 4;
G__2552.cljs$lang$applyTo = (function (arglist__2553){
var a = cljs.core.first(arglist__2553);
var b = cljs.core.first(cljs.core.next(arglist__2553));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2553)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2553))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2553))));
return G__2552__delegate.call(this, a, b, c, d, more);
});
return G__2552;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___2546.call(this,a);
case  2 :
return list_STAR___2547.call(this,a,b);
case  3 :
return list_STAR___2548.call(this,a,b,c);
case  4 :
return list_STAR___2549.call(this,a,b,c,d);
default:
return list_STAR___2550.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___2550.cljs$lang$applyTo;
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2563 = (function (f,args){
var fixed_arity__2554 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,args,cljs.core.inc.call(null,fixed_arity__2554)),fixed_arity__2554)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__2564 = (function (f,x,args){
var arglist__2555 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__2556 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2555,fixed_arity__2556),fixed_arity__2556)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2555));
} else
{return f.cljs$lang$applyTo(arglist__2555);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2555));
}
});
var apply__2565 = (function (f,x,y,args){
var arglist__2557 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__2558 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2557,fixed_arity__2558),fixed_arity__2558)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2557));
} else
{return f.cljs$lang$applyTo(arglist__2557);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2557));
}
});
var apply__2566 = (function (f,x,y,z,args){
var arglist__2559 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__2560 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2559,fixed_arity__2560),fixed_arity__2560)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2559));
} else
{return f.cljs$lang$applyTo(arglist__2559);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2559));
}
});
var apply__2567 = (function() { 
var G__2569__delegate = function (f,a,b,c,d,args){
var arglist__2561 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__2562 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2561,fixed_arity__2562),fixed_arity__2562)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2561));
} else
{return f.cljs$lang$applyTo(arglist__2561);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2561));
}
};
var G__2569 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__2569__delegate.call(this, f, a, b, c, d, args);
};
G__2569.cljs$lang$maxFixedArity = 5;
G__2569.cljs$lang$applyTo = (function (arglist__2570){
var f = cljs.core.first(arglist__2570);
var a = cljs.core.first(cljs.core.next(arglist__2570));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2570)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2570))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2570)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2570)))));
return G__2569__delegate.call(this, f, a, b, c, d, args);
});
return G__2569;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__2563.call(this,f,a);
case  3 :
return apply__2564.call(this,f,a,b);
case  4 :
return apply__2565.call(this,f,a,b,c);
case  5 :
return apply__2566.call(this,f,a,b,c,d);
default:
return apply__2567.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__2567.cljs$lang$applyTo;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__2571){
var obj = cljs.core.first(arglist__2571);
var f = cljs.core.first(cljs.core.next(arglist__2571));
var args = cljs.core.rest(cljs.core.next(arglist__2571));
return vary_meta__delegate.call(this, obj, f, args);
});
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___2572 = (function (x){
return false;
});
var not_EQ___2573 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___2574 = (function() { 
var G__2576__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__2576 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2576__delegate.call(this, x, y, more);
};
G__2576.cljs$lang$maxFixedArity = 2;
G__2576.cljs$lang$applyTo = (function (arglist__2577){
var x = cljs.core.first(arglist__2577);
var y = cljs.core.first(cljs.core.next(arglist__2577));
var more = cljs.core.rest(cljs.core.next(arglist__2577));
return G__2576__delegate.call(this, x, y, more);
});
return G__2576;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___2572.call(this,x);
case  2 :
return not_EQ___2573.call(this,x,y);
default:
return not_EQ___2574.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___2574.cljs$lang$applyTo;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.seq.call(null,coll))))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__2578 = pred;
var G__2579 = cljs.core.next.call(null,coll);
pred = G__2578;
coll = G__2579;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3548__auto____2580 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____2580))
{return or__3548__auto____2580;
} else
{{
var G__2581 = pred;
var G__2582 = cljs.core.next.call(null,coll);
pred = G__2581;
coll = G__2582;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return cljs.core.zero_QMARK_.call(null,cljs.core.bit_and.call(null,n,1));
} else
{throw cljs.core.str.call(null,"Argument must be an integer: ",n);
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__2583 = null;
var G__2583__2584 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__2583__2585 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__2583__2586 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__2583__2587 = (function() { 
var G__2589__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__2589 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2589__delegate.call(this, x, y, zs);
};
G__2589.cljs$lang$maxFixedArity = 2;
G__2589.cljs$lang$applyTo = (function (arglist__2590){
var x = cljs.core.first(arglist__2590);
var y = cljs.core.first(cljs.core.next(arglist__2590));
var zs = cljs.core.rest(cljs.core.next(arglist__2590));
return G__2589__delegate.call(this, x, y, zs);
});
return G__2589;
})()
;
G__2583 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__2583__2584.call(this);
case  1 :
return G__2583__2585.call(this,x);
case  2 :
return G__2583__2586.call(this,x,y);
default:
return G__2583__2587.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2583.cljs$lang$maxFixedArity = 2;
G__2583.cljs$lang$applyTo = G__2583__2587.cljs$lang$applyTo;
return G__2583;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__2591__delegate = function (args){
return x;
};
var G__2591 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2591__delegate.call(this, args);
};
G__2591.cljs$lang$maxFixedArity = 0;
G__2591.cljs$lang$applyTo = (function (arglist__2592){
var args = cljs.core.seq( arglist__2592 );;
return G__2591__delegate.call(this, args);
});
return G__2591;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__2596 = (function (){
return cljs.core.identity;
});
var comp__2597 = (function (f){
return f;
});
var comp__2598 = (function (f,g){
return (function() {
var G__2602 = null;
var G__2602__2603 = (function (){
return f.call(null,g.call(null));
});
var G__2602__2604 = (function (x){
return f.call(null,g.call(null,x));
});
var G__2602__2605 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__2602__2606 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__2602__2607 = (function() { 
var G__2609__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__2609 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2609__delegate.call(this, x, y, z, args);
};
G__2609.cljs$lang$maxFixedArity = 3;
G__2609.cljs$lang$applyTo = (function (arglist__2610){
var x = cljs.core.first(arglist__2610);
var y = cljs.core.first(cljs.core.next(arglist__2610));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2610)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2610)));
return G__2609__delegate.call(this, x, y, z, args);
});
return G__2609;
})()
;
G__2602 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__2602__2603.call(this);
case  1 :
return G__2602__2604.call(this,x);
case  2 :
return G__2602__2605.call(this,x,y);
case  3 :
return G__2602__2606.call(this,x,y,z);
default:
return G__2602__2607.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2602.cljs$lang$maxFixedArity = 3;
G__2602.cljs$lang$applyTo = G__2602__2607.cljs$lang$applyTo;
return G__2602;
})()
});
var comp__2599 = (function (f,g,h){
return (function() {
var G__2611 = null;
var G__2611__2612 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__2611__2613 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__2611__2614 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__2611__2615 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__2611__2616 = (function() { 
var G__2618__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__2618 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2618__delegate.call(this, x, y, z, args);
};
G__2618.cljs$lang$maxFixedArity = 3;
G__2618.cljs$lang$applyTo = (function (arglist__2619){
var x = cljs.core.first(arglist__2619);
var y = cljs.core.first(cljs.core.next(arglist__2619));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2619)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2619)));
return G__2618__delegate.call(this, x, y, z, args);
});
return G__2618;
})()
;
G__2611 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__2611__2612.call(this);
case  1 :
return G__2611__2613.call(this,x);
case  2 :
return G__2611__2614.call(this,x,y);
case  3 :
return G__2611__2615.call(this,x,y,z);
default:
return G__2611__2616.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2611.cljs$lang$maxFixedArity = 3;
G__2611.cljs$lang$applyTo = G__2611__2616.cljs$lang$applyTo;
return G__2611;
})()
});
var comp__2600 = (function() { 
var G__2620__delegate = function (f1,f2,f3,fs){
var fs__2593 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__2621__delegate = function (args){
var ret__2594 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__2593),args);
var fs__2595 = cljs.core.next.call(null,fs__2593);

while(true){
if(cljs.core.truth_(fs__2595))
{{
var G__2622 = cljs.core.first.call(null,fs__2595).call(null,ret__2594);
var G__2623 = cljs.core.next.call(null,fs__2595);
ret__2594 = G__2622;
fs__2595 = G__2623;
continue;
}
} else
{return ret__2594;
}
break;
}
};
var G__2621 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2621__delegate.call(this, args);
};
G__2621.cljs$lang$maxFixedArity = 0;
G__2621.cljs$lang$applyTo = (function (arglist__2624){
var args = cljs.core.seq( arglist__2624 );;
return G__2621__delegate.call(this, args);
});
return G__2621;
})()
;
};
var G__2620 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2620__delegate.call(this, f1, f2, f3, fs);
};
G__2620.cljs$lang$maxFixedArity = 3;
G__2620.cljs$lang$applyTo = (function (arglist__2625){
var f1 = cljs.core.first(arglist__2625);
var f2 = cljs.core.first(cljs.core.next(arglist__2625));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2625)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2625)));
return G__2620__delegate.call(this, f1, f2, f3, fs);
});
return G__2620;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__2596.call(this);
case  1 :
return comp__2597.call(this,f1);
case  2 :
return comp__2598.call(this,f1,f2);
case  3 :
return comp__2599.call(this,f1,f2,f3);
default:
return comp__2600.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__2600.cljs$lang$applyTo;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__2626 = (function (f,arg1){
return (function() { 
var G__2631__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__2631 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2631__delegate.call(this, args);
};
G__2631.cljs$lang$maxFixedArity = 0;
G__2631.cljs$lang$applyTo = (function (arglist__2632){
var args = cljs.core.seq( arglist__2632 );;
return G__2631__delegate.call(this, args);
});
return G__2631;
})()
;
});
var partial__2627 = (function (f,arg1,arg2){
return (function() { 
var G__2633__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__2633 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2633__delegate.call(this, args);
};
G__2633.cljs$lang$maxFixedArity = 0;
G__2633.cljs$lang$applyTo = (function (arglist__2634){
var args = cljs.core.seq( arglist__2634 );;
return G__2633__delegate.call(this, args);
});
return G__2633;
})()
;
});
var partial__2628 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__2635__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__2635 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2635__delegate.call(this, args);
};
G__2635.cljs$lang$maxFixedArity = 0;
G__2635.cljs$lang$applyTo = (function (arglist__2636){
var args = cljs.core.seq( arglist__2636 );;
return G__2635__delegate.call(this, args);
});
return G__2635;
})()
;
});
var partial__2629 = (function() { 
var G__2637__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__2638__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__2638 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2638__delegate.call(this, args);
};
G__2638.cljs$lang$maxFixedArity = 0;
G__2638.cljs$lang$applyTo = (function (arglist__2639){
var args = cljs.core.seq( arglist__2639 );;
return G__2638__delegate.call(this, args);
});
return G__2638;
})()
;
};
var G__2637 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2637__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__2637.cljs$lang$maxFixedArity = 4;
G__2637.cljs$lang$applyTo = (function (arglist__2640){
var f = cljs.core.first(arglist__2640);
var arg1 = cljs.core.first(cljs.core.next(arglist__2640));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2640)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2640))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2640))));
return G__2637__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__2637;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__2626.call(this,f,arg1);
case  3 :
return partial__2627.call(this,f,arg1,arg2);
case  4 :
return partial__2628.call(this,f,arg1,arg2,arg3);
default:
return partial__2629.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__2629.cljs$lang$applyTo;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2641 = (function (f,x){
return (function() {
var G__2645 = null;
var G__2645__2646 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__2645__2647 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__2645__2648 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__2645__2649 = (function() { 
var G__2651__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__2651 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2651__delegate.call(this, a, b, c, ds);
};
G__2651.cljs$lang$maxFixedArity = 3;
G__2651.cljs$lang$applyTo = (function (arglist__2652){
var a = cljs.core.first(arglist__2652);
var b = cljs.core.first(cljs.core.next(arglist__2652));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2652)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2652)));
return G__2651__delegate.call(this, a, b, c, ds);
});
return G__2651;
})()
;
G__2645 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__2645__2646.call(this,a);
case  2 :
return G__2645__2647.call(this,a,b);
case  3 :
return G__2645__2648.call(this,a,b,c);
default:
return G__2645__2649.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2645.cljs$lang$maxFixedArity = 3;
G__2645.cljs$lang$applyTo = G__2645__2649.cljs$lang$applyTo;
return G__2645;
})()
});
var fnil__2642 = (function (f,x,y){
return (function() {
var G__2653 = null;
var G__2653__2654 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__2653__2655 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__2653__2656 = (function() { 
var G__2658__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__2658 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2658__delegate.call(this, a, b, c, ds);
};
G__2658.cljs$lang$maxFixedArity = 3;
G__2658.cljs$lang$applyTo = (function (arglist__2659){
var a = cljs.core.first(arglist__2659);
var b = cljs.core.first(cljs.core.next(arglist__2659));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2659)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2659)));
return G__2658__delegate.call(this, a, b, c, ds);
});
return G__2658;
})()
;
G__2653 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__2653__2654.call(this,a,b);
case  3 :
return G__2653__2655.call(this,a,b,c);
default:
return G__2653__2656.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2653.cljs$lang$maxFixedArity = 3;
G__2653.cljs$lang$applyTo = G__2653__2656.cljs$lang$applyTo;
return G__2653;
})()
});
var fnil__2643 = (function (f,x,y,z){
return (function() {
var G__2660 = null;
var G__2660__2661 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__2660__2662 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__2660__2663 = (function() { 
var G__2665__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__2665 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2665__delegate.call(this, a, b, c, ds);
};
G__2665.cljs$lang$maxFixedArity = 3;
G__2665.cljs$lang$applyTo = (function (arglist__2666){
var a = cljs.core.first(arglist__2666);
var b = cljs.core.first(cljs.core.next(arglist__2666));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2666)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2666)));
return G__2665__delegate.call(this, a, b, c, ds);
});
return G__2665;
})()
;
G__2660 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__2660__2661.call(this,a,b);
case  3 :
return G__2660__2662.call(this,a,b,c);
default:
return G__2660__2663.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2660.cljs$lang$maxFixedArity = 3;
G__2660.cljs$lang$applyTo = G__2660__2663.cljs$lang$applyTo;
return G__2660;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__2641.call(this,f,x);
case  3 :
return fnil__2642.call(this,f,x,y);
case  4 :
return fnil__2643.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__2669 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____2667 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____2667))
{var s__2668 = temp__3698__auto____2667;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__2668)),mpi.call(null,cljs.core.inc.call(null,idx),cljs.core.rest.call(null,s__2668)));
} else
{return null;
}
})));
});

return mapi__2669.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____2670 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____2670))
{var s__2671 = temp__3698__auto____2670;

var x__2672 = f.call(null,cljs.core.first.call(null,s__2671));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__2672)))
{return keep.call(null,f,cljs.core.rest.call(null,s__2671));
} else
{return cljs.core.cons.call(null,x__2672,keep.call(null,f,cljs.core.rest.call(null,s__2671)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__2682 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____2679 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____2679))
{var s__2680 = temp__3698__auto____2679;

var x__2681 = f.call(null,idx,cljs.core.first.call(null,s__2680));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__2681)))
{return kpi.call(null,cljs.core.inc.call(null,idx),cljs.core.rest.call(null,s__2680));
} else
{return cljs.core.cons.call(null,x__2681,kpi.call(null,cljs.core.inc.call(null,idx),cljs.core.rest.call(null,s__2680)));
}
} else
{return null;
}
})));
});

return keepi__2682.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__2727 = (function (p){
return (function() {
var ep1 = null;
var ep1__2732 = (function (){
return true;
});
var ep1__2733 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__2734 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2689 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____2689))
{return p.call(null,y);
} else
{return and__3546__auto____2689;
}
})());
});
var ep1__2735 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2690 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____2690))
{var and__3546__auto____2691 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____2691))
{return p.call(null,z);
} else
{return and__3546__auto____2691;
}
} else
{return and__3546__auto____2690;
}
})());
});
var ep1__2736 = (function() { 
var G__2738__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2692 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____2692))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____2692;
}
})());
};
var G__2738 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2738__delegate.call(this, x, y, z, args);
};
G__2738.cljs$lang$maxFixedArity = 3;
G__2738.cljs$lang$applyTo = (function (arglist__2739){
var x = cljs.core.first(arglist__2739);
var y = cljs.core.first(cljs.core.next(arglist__2739));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2739)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2739)));
return G__2738__delegate.call(this, x, y, z, args);
});
return G__2738;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__2732.call(this);
case  1 :
return ep1__2733.call(this,x);
case  2 :
return ep1__2734.call(this,x,y);
case  3 :
return ep1__2735.call(this,x,y,z);
default:
return ep1__2736.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__2736.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__2728 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__2740 = (function (){
return true;
});
var ep2__2741 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2693 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____2693))
{return p2.call(null,x);
} else
{return and__3546__auto____2693;
}
})());
});
var ep2__2742 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2694 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____2694))
{var and__3546__auto____2695 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____2695))
{var and__3546__auto____2696 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____2696))
{return p2.call(null,y);
} else
{return and__3546__auto____2696;
}
} else
{return and__3546__auto____2695;
}
} else
{return and__3546__auto____2694;
}
})());
});
var ep2__2743 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2697 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____2697))
{var and__3546__auto____2698 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____2698))
{var and__3546__auto____2699 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____2699))
{var and__3546__auto____2700 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____2700))
{var and__3546__auto____2701 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____2701))
{return p2.call(null,z);
} else
{return and__3546__auto____2701;
}
} else
{return and__3546__auto____2700;
}
} else
{return and__3546__auto____2699;
}
} else
{return and__3546__auto____2698;
}
} else
{return and__3546__auto____2697;
}
})());
});
var ep2__2744 = (function() { 
var G__2746__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2702 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____2702))
{return cljs.core.every_QMARK_.call(null,(function (p1__2673_SHARP_){
var and__3546__auto____2703 = p1.call(null,p1__2673_SHARP_);

if(cljs.core.truth_(and__3546__auto____2703))
{return p2.call(null,p1__2673_SHARP_);
} else
{return and__3546__auto____2703;
}
}),args);
} else
{return and__3546__auto____2702;
}
})());
};
var G__2746 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2746__delegate.call(this, x, y, z, args);
};
G__2746.cljs$lang$maxFixedArity = 3;
G__2746.cljs$lang$applyTo = (function (arglist__2747){
var x = cljs.core.first(arglist__2747);
var y = cljs.core.first(cljs.core.next(arglist__2747));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2747)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2747)));
return G__2746__delegate.call(this, x, y, z, args);
});
return G__2746;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__2740.call(this);
case  1 :
return ep2__2741.call(this,x);
case  2 :
return ep2__2742.call(this,x,y);
case  3 :
return ep2__2743.call(this,x,y,z);
default:
return ep2__2744.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__2744.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__2729 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__2748 = (function (){
return true;
});
var ep3__2749 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2704 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____2704))
{var and__3546__auto____2705 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____2705))
{return p3.call(null,x);
} else
{return and__3546__auto____2705;
}
} else
{return and__3546__auto____2704;
}
})());
});
var ep3__2750 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2706 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____2706))
{var and__3546__auto____2707 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____2707))
{var and__3546__auto____2708 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____2708))
{var and__3546__auto____2709 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____2709))
{var and__3546__auto____2710 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____2710))
{return p3.call(null,y);
} else
{return and__3546__auto____2710;
}
} else
{return and__3546__auto____2709;
}
} else
{return and__3546__auto____2708;
}
} else
{return and__3546__auto____2707;
}
} else
{return and__3546__auto____2706;
}
})());
});
var ep3__2751 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2711 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____2711))
{var and__3546__auto____2712 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____2712))
{var and__3546__auto____2713 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____2713))
{var and__3546__auto____2714 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____2714))
{var and__3546__auto____2715 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____2715))
{var and__3546__auto____2716 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____2716))
{var and__3546__auto____2717 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____2717))
{var and__3546__auto____2718 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____2718))
{return p3.call(null,z);
} else
{return and__3546__auto____2718;
}
} else
{return and__3546__auto____2717;
}
} else
{return and__3546__auto____2716;
}
} else
{return and__3546__auto____2715;
}
} else
{return and__3546__auto____2714;
}
} else
{return and__3546__auto____2713;
}
} else
{return and__3546__auto____2712;
}
} else
{return and__3546__auto____2711;
}
})());
});
var ep3__2752 = (function() { 
var G__2754__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2719 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____2719))
{return cljs.core.every_QMARK_.call(null,(function (p1__2674_SHARP_){
var and__3546__auto____2720 = p1.call(null,p1__2674_SHARP_);

if(cljs.core.truth_(and__3546__auto____2720))
{var and__3546__auto____2721 = p2.call(null,p1__2674_SHARP_);

if(cljs.core.truth_(and__3546__auto____2721))
{return p3.call(null,p1__2674_SHARP_);
} else
{return and__3546__auto____2721;
}
} else
{return and__3546__auto____2720;
}
}),args);
} else
{return and__3546__auto____2719;
}
})());
};
var G__2754 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2754__delegate.call(this, x, y, z, args);
};
G__2754.cljs$lang$maxFixedArity = 3;
G__2754.cljs$lang$applyTo = (function (arglist__2755){
var x = cljs.core.first(arglist__2755);
var y = cljs.core.first(cljs.core.next(arglist__2755));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2755)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2755)));
return G__2754__delegate.call(this, x, y, z, args);
});
return G__2754;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__2748.call(this);
case  1 :
return ep3__2749.call(this,x);
case  2 :
return ep3__2750.call(this,x,y);
case  3 :
return ep3__2751.call(this,x,y,z);
default:
return ep3__2752.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__2752.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__2730 = (function() { 
var G__2756__delegate = function (p1,p2,p3,ps){
var ps__2722 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__2757 = (function (){
return true;
});
var epn__2758 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__2675_SHARP_){
return p1__2675_SHARP_.call(null,x);
}),ps__2722);
});
var epn__2759 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__2676_SHARP_){
var and__3546__auto____2723 = p1__2676_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____2723))
{return p1__2676_SHARP_.call(null,y);
} else
{return and__3546__auto____2723;
}
}),ps__2722);
});
var epn__2760 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__2677_SHARP_){
var and__3546__auto____2724 = p1__2677_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____2724))
{var and__3546__auto____2725 = p1__2677_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____2725))
{return p1__2677_SHARP_.call(null,z);
} else
{return and__3546__auto____2725;
}
} else
{return and__3546__auto____2724;
}
}),ps__2722);
});
var epn__2761 = (function() { 
var G__2763__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2726 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____2726))
{return cljs.core.every_QMARK_.call(null,(function (p1__2678_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__2678_SHARP_,args);
}),ps__2722);
} else
{return and__3546__auto____2726;
}
})());
};
var G__2763 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2763__delegate.call(this, x, y, z, args);
};
G__2763.cljs$lang$maxFixedArity = 3;
G__2763.cljs$lang$applyTo = (function (arglist__2764){
var x = cljs.core.first(arglist__2764);
var y = cljs.core.first(cljs.core.next(arglist__2764));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2764)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2764)));
return G__2763__delegate.call(this, x, y, z, args);
});
return G__2763;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__2757.call(this);
case  1 :
return epn__2758.call(this,x);
case  2 :
return epn__2759.call(this,x,y);
case  3 :
return epn__2760.call(this,x,y,z);
default:
return epn__2761.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__2761.cljs$lang$applyTo;
return epn;
})()
};
var G__2756 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2756__delegate.call(this, p1, p2, p3, ps);
};
G__2756.cljs$lang$maxFixedArity = 3;
G__2756.cljs$lang$applyTo = (function (arglist__2765){
var p1 = cljs.core.first(arglist__2765);
var p2 = cljs.core.first(cljs.core.next(arglist__2765));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2765)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2765)));
return G__2756__delegate.call(this, p1, p2, p3, ps);
});
return G__2756;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__2727.call(this,p1);
case  2 :
return every_pred__2728.call(this,p1,p2);
case  3 :
return every_pred__2729.call(this,p1,p2,p3);
default:
return every_pred__2730.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__2730.cljs$lang$applyTo;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__2805 = (function (p){
return (function() {
var sp1 = null;
var sp1__2810 = (function (){
return null;
});
var sp1__2811 = (function (x){
return p.call(null,x);
});
var sp1__2812 = (function (x,y){
var or__3548__auto____2767 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____2767))
{return or__3548__auto____2767;
} else
{return p.call(null,y);
}
});
var sp1__2813 = (function (x,y,z){
var or__3548__auto____2768 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____2768))
{return or__3548__auto____2768;
} else
{var or__3548__auto____2769 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____2769))
{return or__3548__auto____2769;
} else
{return p.call(null,z);
}
}
});
var sp1__2814 = (function() { 
var G__2816__delegate = function (x,y,z,args){
var or__3548__auto____2770 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____2770))
{return or__3548__auto____2770;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__2816 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2816__delegate.call(this, x, y, z, args);
};
G__2816.cljs$lang$maxFixedArity = 3;
G__2816.cljs$lang$applyTo = (function (arglist__2817){
var x = cljs.core.first(arglist__2817);
var y = cljs.core.first(cljs.core.next(arglist__2817));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2817)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2817)));
return G__2816__delegate.call(this, x, y, z, args);
});
return G__2816;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__2810.call(this);
case  1 :
return sp1__2811.call(this,x);
case  2 :
return sp1__2812.call(this,x,y);
case  3 :
return sp1__2813.call(this,x,y,z);
default:
return sp1__2814.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__2814.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__2806 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__2818 = (function (){
return null;
});
var sp2__2819 = (function (x){
var or__3548__auto____2771 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____2771))
{return or__3548__auto____2771;
} else
{return p2.call(null,x);
}
});
var sp2__2820 = (function (x,y){
var or__3548__auto____2772 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____2772))
{return or__3548__auto____2772;
} else
{var or__3548__auto____2773 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____2773))
{return or__3548__auto____2773;
} else
{var or__3548__auto____2774 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____2774))
{return or__3548__auto____2774;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__2821 = (function (x,y,z){
var or__3548__auto____2775 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____2775))
{return or__3548__auto____2775;
} else
{var or__3548__auto____2776 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____2776))
{return or__3548__auto____2776;
} else
{var or__3548__auto____2777 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____2777))
{return or__3548__auto____2777;
} else
{var or__3548__auto____2778 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____2778))
{return or__3548__auto____2778;
} else
{var or__3548__auto____2779 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____2779))
{return or__3548__auto____2779;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__2822 = (function() { 
var G__2824__delegate = function (x,y,z,args){
var or__3548__auto____2780 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____2780))
{return or__3548__auto____2780;
} else
{return cljs.core.some.call(null,(function (p1__2683_SHARP_){
var or__3548__auto____2781 = p1.call(null,p1__2683_SHARP_);

if(cljs.core.truth_(or__3548__auto____2781))
{return or__3548__auto____2781;
} else
{return p2.call(null,p1__2683_SHARP_);
}
}),args);
}
};
var G__2824 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2824__delegate.call(this, x, y, z, args);
};
G__2824.cljs$lang$maxFixedArity = 3;
G__2824.cljs$lang$applyTo = (function (arglist__2825){
var x = cljs.core.first(arglist__2825);
var y = cljs.core.first(cljs.core.next(arglist__2825));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2825)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2825)));
return G__2824__delegate.call(this, x, y, z, args);
});
return G__2824;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__2818.call(this);
case  1 :
return sp2__2819.call(this,x);
case  2 :
return sp2__2820.call(this,x,y);
case  3 :
return sp2__2821.call(this,x,y,z);
default:
return sp2__2822.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__2822.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__2807 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__2826 = (function (){
return null;
});
var sp3__2827 = (function (x){
var or__3548__auto____2782 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____2782))
{return or__3548__auto____2782;
} else
{var or__3548__auto____2783 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____2783))
{return or__3548__auto____2783;
} else
{return p3.call(null,x);
}
}
});
var sp3__2828 = (function (x,y){
var or__3548__auto____2784 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____2784))
{return or__3548__auto____2784;
} else
{var or__3548__auto____2785 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____2785))
{return or__3548__auto____2785;
} else
{var or__3548__auto____2786 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____2786))
{return or__3548__auto____2786;
} else
{var or__3548__auto____2787 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____2787))
{return or__3548__auto____2787;
} else
{var or__3548__auto____2788 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____2788))
{return or__3548__auto____2788;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__2829 = (function (x,y,z){
var or__3548__auto____2789 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____2789))
{return or__3548__auto____2789;
} else
{var or__3548__auto____2790 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____2790))
{return or__3548__auto____2790;
} else
{var or__3548__auto____2791 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____2791))
{return or__3548__auto____2791;
} else
{var or__3548__auto____2792 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____2792))
{return or__3548__auto____2792;
} else
{var or__3548__auto____2793 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____2793))
{return or__3548__auto____2793;
} else
{var or__3548__auto____2794 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____2794))
{return or__3548__auto____2794;
} else
{var or__3548__auto____2795 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____2795))
{return or__3548__auto____2795;
} else
{var or__3548__auto____2796 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____2796))
{return or__3548__auto____2796;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__2830 = (function() { 
var G__2832__delegate = function (x,y,z,args){
var or__3548__auto____2797 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____2797))
{return or__3548__auto____2797;
} else
{return cljs.core.some.call(null,(function (p1__2684_SHARP_){
var or__3548__auto____2798 = p1.call(null,p1__2684_SHARP_);

if(cljs.core.truth_(or__3548__auto____2798))
{return or__3548__auto____2798;
} else
{var or__3548__auto____2799 = p2.call(null,p1__2684_SHARP_);

if(cljs.core.truth_(or__3548__auto____2799))
{return or__3548__auto____2799;
} else
{return p3.call(null,p1__2684_SHARP_);
}
}
}),args);
}
};
var G__2832 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2832__delegate.call(this, x, y, z, args);
};
G__2832.cljs$lang$maxFixedArity = 3;
G__2832.cljs$lang$applyTo = (function (arglist__2833){
var x = cljs.core.first(arglist__2833);
var y = cljs.core.first(cljs.core.next(arglist__2833));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2833)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2833)));
return G__2832__delegate.call(this, x, y, z, args);
});
return G__2832;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__2826.call(this);
case  1 :
return sp3__2827.call(this,x);
case  2 :
return sp3__2828.call(this,x,y);
case  3 :
return sp3__2829.call(this,x,y,z);
default:
return sp3__2830.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__2830.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__2808 = (function() { 
var G__2834__delegate = function (p1,p2,p3,ps){
var ps__2800 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__2835 = (function (){
return null;
});
var spn__2836 = (function (x){
return cljs.core.some.call(null,(function (p1__2685_SHARP_){
return p1__2685_SHARP_.call(null,x);
}),ps__2800);
});
var spn__2837 = (function (x,y){
return cljs.core.some.call(null,(function (p1__2686_SHARP_){
var or__3548__auto____2801 = p1__2686_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____2801))
{return or__3548__auto____2801;
} else
{return p1__2686_SHARP_.call(null,y);
}
}),ps__2800);
});
var spn__2838 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__2687_SHARP_){
var or__3548__auto____2802 = p1__2687_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____2802))
{return or__3548__auto____2802;
} else
{var or__3548__auto____2803 = p1__2687_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____2803))
{return or__3548__auto____2803;
} else
{return p1__2687_SHARP_.call(null,z);
}
}
}),ps__2800);
});
var spn__2839 = (function() { 
var G__2841__delegate = function (x,y,z,args){
var or__3548__auto____2804 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____2804))
{return or__3548__auto____2804;
} else
{return cljs.core.some.call(null,(function (p1__2688_SHARP_){
return cljs.core.some.call(null,p1__2688_SHARP_,args);
}),ps__2800);
}
};
var G__2841 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2841__delegate.call(this, x, y, z, args);
};
G__2841.cljs$lang$maxFixedArity = 3;
G__2841.cljs$lang$applyTo = (function (arglist__2842){
var x = cljs.core.first(arglist__2842);
var y = cljs.core.first(cljs.core.next(arglist__2842));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2842)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2842)));
return G__2841__delegate.call(this, x, y, z, args);
});
return G__2841;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__2835.call(this);
case  1 :
return spn__2836.call(this,x);
case  2 :
return spn__2837.call(this,x,y);
case  3 :
return spn__2838.call(this,x,y,z);
default:
return spn__2839.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__2839.cljs$lang$applyTo;
return spn;
})()
};
var G__2834 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2834__delegate.call(this, p1, p2, p3, ps);
};
G__2834.cljs$lang$maxFixedArity = 3;
G__2834.cljs$lang$applyTo = (function (arglist__2843){
var p1 = cljs.core.first(arglist__2843);
var p2 = cljs.core.first(cljs.core.next(arglist__2843));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2843)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2843)));
return G__2834__delegate.call(this, p1, p2, p3, ps);
});
return G__2834;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__2805.call(this,p1);
case  2 :
return some_fn__2806.call(this,p1,p2);
case  3 :
return some_fn__2807.call(this,p1,p2,p3);
default:
return some_fn__2808.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__2808.cljs$lang$applyTo;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__2856 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____2844 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____2844))
{var s__2845 = temp__3698__auto____2844;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__2845)),map.call(null,f,cljs.core.rest.call(null,s__2845)));
} else
{return null;
}
})));
});
var map__2857 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__2846 = cljs.core.seq.call(null,c1);
var s2__2847 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____2848 = s1__2846;

if(cljs.core.truth_(and__3546__auto____2848))
{return s2__2847;
} else
{return and__3546__auto____2848;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__2846),cljs.core.first.call(null,s2__2847)),map.call(null,f,cljs.core.rest.call(null,s1__2846),cljs.core.rest.call(null,s2__2847)));
} else
{return null;
}
})));
});
var map__2858 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__2849 = cljs.core.seq.call(null,c1);
var s2__2850 = cljs.core.seq.call(null,c2);
var s3__2851 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____2852 = s1__2849;

if(cljs.core.truth_(and__3546__auto____2852))
{var and__3546__auto____2853 = s2__2850;

if(cljs.core.truth_(and__3546__auto____2853))
{return s3__2851;
} else
{return and__3546__auto____2853;
}
} else
{return and__3546__auto____2852;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__2849),cljs.core.first.call(null,s2__2850),cljs.core.first.call(null,s3__2851)),map.call(null,f,cljs.core.rest.call(null,s1__2849),cljs.core.rest.call(null,s2__2850),cljs.core.rest.call(null,s3__2851)));
} else
{return null;
}
})));
});
var map__2859 = (function() { 
var G__2861__delegate = function (f,c1,c2,c3,colls){
var step__2855 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__2854 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__2854)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__2854),step.call(null,map.call(null,cljs.core.rest,ss__2854)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__2766_SHARP_){
return cljs.core.apply.call(null,f,p1__2766_SHARP_);
}),step__2855.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__2861 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2861__delegate.call(this, f, c1, c2, c3, colls);
};
G__2861.cljs$lang$maxFixedArity = 4;
G__2861.cljs$lang$applyTo = (function (arglist__2862){
var f = cljs.core.first(arglist__2862);
var c1 = cljs.core.first(cljs.core.next(arglist__2862));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2862)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2862))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2862))));
return G__2861__delegate.call(this, f, c1, c2, c3, colls);
});
return G__2861;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__2856.call(this,f,c1);
case  3 :
return map__2857.call(this,f,c1,c2);
case  4 :
return map__2858.call(this,f,c1,c2,c3);
default:
return map__2859.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__2859.cljs$lang$applyTo;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,n)))
{var temp__3698__auto____2863 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____2863))
{var s__2864 = temp__3698__auto____2863;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__2864),take.call(null,cljs.core.dec.call(null,n),cljs.core.rest.call(null,s__2864)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__2867 = (function (n,coll){
while(true){
var s__2865 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____2866 = cljs.core.pos_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____2866))
{return s__2865;
} else
{return and__3546__auto____2866;
}
})()))
{{
var G__2868 = cljs.core.dec.call(null,n);
var G__2869 = cljs.core.rest.call(null,s__2865);
n = G__2868;
coll = G__2869;
continue;
}
} else
{return s__2865;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__2867.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__2870 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__2871 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__2870.call(this,n);
case  2 :
return drop_last__2871.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__2873 = cljs.core.seq.call(null,coll);
var lead__2874 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__2874))
{{
var G__2875 = cljs.core.next.call(null,s__2873);
var G__2876 = cljs.core.next.call(null,lead__2874);
s__2873 = G__2875;
lead__2874 = G__2876;
continue;
}
} else
{return s__2873;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__2879 = (function (pred,coll){
while(true){
var s__2877 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____2878 = s__2877;

if(cljs.core.truth_(and__3546__auto____2878))
{return pred.call(null,cljs.core.first.call(null,s__2877));
} else
{return and__3546__auto____2878;
}
})()))
{{
var G__2880 = pred;
var G__2881 = cljs.core.rest.call(null,s__2877);
pred = G__2880;
coll = G__2881;
continue;
}
} else
{return s__2877;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__2879.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____2882 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____2882))
{var s__2883 = temp__3698__auto____2882;

return cljs.core.concat.call(null,s__2883,cycle.call(null,s__2883));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.Vector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__2884 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__2885 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__2884.call(this,n);
case  2 :
return repeat__2885.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__2887 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__2888 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__2887.call(this,n);
case  2 :
return repeatedly__2888.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2894 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__2890 = cljs.core.seq.call(null,c1);
var s2__2891 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____2892 = s1__2890;

if(cljs.core.truth_(and__3546__auto____2892))
{return s2__2891;
} else
{return and__3546__auto____2892;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__2890),cljs.core.cons.call(null,cljs.core.first.call(null,s2__2891),interleave.call(null,cljs.core.rest.call(null,s1__2890),cljs.core.rest.call(null,s2__2891))));
} else
{return null;
}
})));
});
var interleave__2895 = (function() { 
var G__2897__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__2893 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__2893)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__2893),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__2893)));
} else
{return null;
}
})));
};
var G__2897 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2897__delegate.call(this, c1, c2, colls);
};
G__2897.cljs$lang$maxFixedArity = 2;
G__2897.cljs$lang$applyTo = (function (arglist__2898){
var c1 = cljs.core.first(arglist__2898);
var c2 = cljs.core.first(cljs.core.next(arglist__2898));
var colls = cljs.core.rest(cljs.core.next(arglist__2898));
return G__2897__delegate.call(this, c1, c2, colls);
});
return G__2897;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__2894.call(this,c1,c2);
default:
return interleave__2895.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__2895.cljs$lang$applyTo;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__2901 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____2899 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____2899))
{var coll__2900 = temp__3695__auto____2899;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__2900),cat.call(null,cljs.core.rest.call(null,coll__2900),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__2901.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2902 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__2903 = (function() { 
var G__2905__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__2905 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2905__delegate.call(this, f, coll, colls);
};
G__2905.cljs$lang$maxFixedArity = 2;
G__2905.cljs$lang$applyTo = (function (arglist__2906){
var f = cljs.core.first(arglist__2906);
var coll = cljs.core.first(cljs.core.next(arglist__2906));
var colls = cljs.core.rest(cljs.core.next(arglist__2906));
return G__2905__delegate.call(this, f, coll, colls);
});
return G__2905;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__2902.call(this,f,coll);
default:
return mapcat__2903.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__2903.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____2907 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____2907))
{var s__2908 = temp__3698__auto____2907;

var f__2909 = cljs.core.first.call(null,s__2908);
var r__2910 = cljs.core.rest.call(null,s__2908);

if(cljs.core.truth_(pred.call(null,f__2909)))
{return cljs.core.cons.call(null,f__2909,filter.call(null,pred,r__2910));
} else
{return filter.call(null,pred,r__2910);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__2912 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__2912.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__2911_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__2911_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2919 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__2920 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____2913 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____2913))
{var s__2914 = temp__3698__auto____2913;

var p__2915 = cljs.core.take.call(null,n,s__2914);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__2915))))
{return cljs.core.cons.call(null,p__2915,partition.call(null,n,step,cljs.core.drop.call(null,step,s__2914)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__2921 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____2916 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____2916))
{var s__2917 = temp__3698__auto____2916;

var p__2918 = cljs.core.take.call(null,n,s__2917);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__2918))))
{return cljs.core.cons.call(null,p__2918,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__2917)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__2918,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__2919.call(this,n,step);
case  3 :
return partition__2920.call(this,n,step,pad);
case  4 :
return partition__2921.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2927 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__2928 = (function (m,ks,not_found){
var sentinel__2923 = cljs.core.lookup_sentinel;
var m__2924 = m;
var ks__2925 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__2925))
{var m__2926 = cljs.core.get.call(null,m__2924,cljs.core.first.call(null,ks__2925),sentinel__2923);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,sentinel__2923,m__2926)))
{return not_found;
} else
{{
var G__2930 = sentinel__2923;
var G__2931 = m__2926;
var G__2932 = cljs.core.next.call(null,ks__2925);
sentinel__2923 = G__2930;
m__2924 = G__2931;
ks__2925 = G__2932;
continue;
}
}
} else
{return m__2924;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__2927.call(this,m,ks);
case  3 :
return get_in__2928.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__2933,v){
var vec__2934__2935 = p__2933;
var k__2936 = cljs.core.nth.call(null,vec__2934__2935,0,null);
var ks__2937 = cljs.core.nthnext.call(null,vec__2934__2935,1);

if(cljs.core.truth_(ks__2937))
{return cljs.core.assoc.call(null,m,k__2936,assoc_in.call(null,cljs.core.get.call(null,m,k__2936),ks__2937,v));
} else
{return cljs.core.assoc.call(null,m,k__2936,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__2938,f,args){
var vec__2939__2940 = p__2938;
var k__2941 = cljs.core.nth.call(null,vec__2939__2940,0,null);
var ks__2942 = cljs.core.nthnext.call(null,vec__2939__2940,1);

if(cljs.core.truth_(ks__2942))
{return cljs.core.assoc.call(null,m,k__2941,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__2941),ks__2942,f,args));
} else
{return cljs.core.assoc.call(null,m,k__2941,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__2941),args));
}
};
var update_in = function (m,p__2938,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__2938, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__2943){
var m = cljs.core.first(arglist__2943);
var p__2938 = cljs.core.first(cljs.core.next(arglist__2943));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2943)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2943)));
return update_in__delegate.call(this, m, p__2938, f, args);
});
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2944 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2945 = this;
var new_array__2946 = cljs.core.aclone.call(null,this__2945.array);

new_array__2946.push(o);
return (new cljs.core.Vector(this__2945.meta,new_array__2946));
});
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2947 = this;
if(cljs.core.truth_(cljs.core._GT_.call(null,this__2947.array.length,0)))
{var vector_seq__2948 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_(cljs.core._LT_.call(null,i,this__2947.array.length)))
{return cljs.core.cons.call(null,(this__2947.array[i]),vector_seq.call(null,cljs.core.inc.call(null,i)));
} else
{return null;
}
})));
});

return vector_seq__2948.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__2949 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2950 = this;
var count__2951 = this__2950.array.length;

if(cljs.core.truth_(cljs.core._GT_.call(null,count__2951,0)))
{return (this__2950.array[cljs.core.dec.call(null,count__2951)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2952 = this;
if(cljs.core.truth_(cljs.core._GT_.call(null,this__2952.array.length,0)))
{var new_array__2953 = cljs.core.aclone.call(null,this__2952.array);

new_array__2953.pop();
return (new cljs.core.Vector(this__2952.meta,new_array__2953));
} else
{throw "Can't pop empty vector";
}
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2954 = this;
return (new cljs.core.Vector(meta,this__2954.array));
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2955 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__2955.meta);
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__2969 = null;
var G__2969__2970 = (function (coll,n){
var this__2956 = this;
if(cljs.core.truth_((function (){var and__3546__auto____2957 = cljs.core._LT__EQ_.call(null,0,n);

if(cljs.core.truth_(and__3546__auto____2957))
{return cljs.core._LT_.call(null,n,this__2956.array.length);
} else
{return and__3546__auto____2957;
}
})()))
{return (this__2956.array[n]);
} else
{return null;
}
});
var G__2969__2971 = (function (coll,n,not_found){
var this__2958 = this;
if(cljs.core.truth_((function (){var and__3546__auto____2959 = cljs.core._LT__EQ_.call(null,0,n);

if(cljs.core.truth_(and__3546__auto____2959))
{return cljs.core._LT_.call(null,n,this__2958.array.length);
} else
{return and__3546__auto____2959;
}
})()))
{return (this__2958.array[n]);
} else
{return not_found;
}
});
G__2969 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2969__2970.call(this,coll,n);
case  3 :
return G__2969__2971.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2969;
})()
;
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2960 = this;
return this__2960.meta;
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__2973 = null;
var G__2973__2974 = (function (v,f){
var this__2961 = this;
return cljs.core.ci_reduce.call(null,this__2961.array,f);
});
var G__2973__2975 = (function (v,f,start){
var this__2962 = this;
return cljs.core.ci_reduce.call(null,this__2962.array,f,start);
});
G__2973 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__2973__2974.call(this,v,f);
case  3 :
return G__2973__2975.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2973;
})()
;
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2963 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2964 = this;
return this__2964.array.length;
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__2965 = this;
var new_array__2966 = cljs.core.aclone.call(null,this__2965.array);

(new_array__2966[k] = v);
return (new cljs.core.Vector(this__2965.meta,new_array__2966));
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__2977 = null;
var G__2977__2978 = (function (coll,k){
var this__2967 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__2977__2979 = (function (coll,k,not_found){
var this__2968 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__2977 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__2977__2978.call(this,coll,k);
case  3 :
return G__2977__2979.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2977;
})()
;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.Vector.prototype.call = (function() {
var G__2981 = null;
var G__2981__2982 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__2981__2983 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__2981 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__2981__2982.call(this,_,k);
case  3 :
return G__2981__2983.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2981;
})()
;
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.Vector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__2985){
var args = cljs.core.seq( arglist__2985 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__2986 = this;
return false;
});
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__2987 = array.length;

var i__2988 = 0;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__2988,len__2987)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__2988]))))
{return i__2988;
} else
{{
var G__2989 = cljs.core._PLUS_.call(null,i__2988,incr);
i__2988 = G__2989;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___2991 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___2992 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____2990 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____2990))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____2990;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___2991.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___2992.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2995 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__2996 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2997 = this;
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,this__2997.keys.length)))
{return cljs.core.map.call(null,(function (p1__2994_SHARP_){
return cljs.core.vector.call(null,p1__2994_SHARP_,(this__2997.strobj[p1__2994_SHARP_]));
}),this__2997.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2998 = this;
return (new cljs.core.ObjMap(meta,this__2998.keys,this__2998.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__2999 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3000 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____3000))
{return this__2999.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____3000;
}
})()))
{var new_keys__3001 = cljs.core.aclone.call(null,this__2999.keys);
var new_strobj__3002 = goog.object.clone.call(null,this__2999.strobj);

new_keys__3001.splice(cljs.core.scan_array.call(null,1,k,new_keys__3001),1);
cljs.core.js_delete.call(null,new_strobj__3002,k);
return (new cljs.core.ObjMap(this__2999.meta,new_keys__3001,new_strobj__3002));
} else
{return coll;
}
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3003 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__3003.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3004 = this;
return this__3004.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3005 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3006 = this;
return this__3006.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3007 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__3008 = goog.object.clone.call(null,this__3007.strobj);
var overwrite_QMARK___3009 = new_strobj__3008.hasOwnProperty(k);

(new_strobj__3008[k] = v);
if(cljs.core.truth_(overwrite_QMARK___3009))
{return (new cljs.core.ObjMap(this__3007.meta,this__3007.keys,new_strobj__3008));
} else
{var new_keys__3010 = cljs.core.aclone.call(null,this__3007.keys);

new_keys__3010.push(k);
return (new cljs.core.ObjMap(this__3007.meta,new_keys__3010,new_strobj__3008));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__3007.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3011 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3011.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3014 = null;
var G__3014__3015 = (function (coll,k){
var this__3012 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3014__3016 = (function (coll,k,not_found){
var this__3013 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3013.strobj,(this__3013.strobj[k]),not_found);
});
G__3014 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3014__3015.call(this,coll,k);
case  3 :
return G__3014__3016.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3014;
})()
;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});
cljs.core.ObjMap.prototype.call = (function() {
var G__3019 = null;
var G__3019__3020 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3019__3021 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3019 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3019__3020.call(this,_,k);
case  3 :
return G__3019__3021.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3019;
})()
;

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3023 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3024 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3025 = this;
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,this__3025.count)))
{var hashes__3026 = cljs.core.js_keys.call(null,this__3025.hashobj);

return cljs.core.mapcat.call(null,(function (p1__3018_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__3025.hashobj[p1__3018_SHARP_])));
}),hashes__3026);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3027 = this;
return (new cljs.core.HashMap(meta,this__3027.count,this__3027.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3028 = this;
var h__3029 = cljs.core.hash.call(null,k);
var bucket__3030 = (this__3028.hashobj[h__3029]);
var i__3031 = (cljs.core.truth_(bucket__3030)?cljs.core.scan_array.call(null,2,k,bucket__3030):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__3031)))
{return coll;
} else
{var new_hashobj__3032 = goog.object.clone.call(null,this__3028.hashobj);

if(cljs.core.truth_(cljs.core._GT_.call(null,3,bucket__3030.length)))
{cljs.core.js_delete.call(null,new_hashobj__3032,h__3029);
} else
{var new_bucket__3033 = cljs.core.aclone.call(null,bucket__3030);

new_bucket__3033.splice(i__3031,2);
(new_hashobj__3032[h__3029] = new_bucket__3033);
}
return (new cljs.core.HashMap(this__3028.meta,cljs.core.dec.call(null,this__3028.count),new_hashobj__3032));
}
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3034 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__3034.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3035 = this;
return this__3035.meta;
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3036 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3037 = this;
return this__3037.count;
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3038 = this;
var h__3039 = cljs.core.hash.call(null,k);
var bucket__3040 = (this__3038.hashobj[h__3039]);

if(cljs.core.truth_(bucket__3040))
{var new_bucket__3041 = cljs.core.aclone.call(null,bucket__3040);
var new_hashobj__3042 = goog.object.clone.call(null,this__3038.hashobj);

(new_hashobj__3042[h__3039] = new_bucket__3041);
var temp__3695__auto____3043 = cljs.core.scan_array.call(null,2,k,new_bucket__3041);

if(cljs.core.truth_(temp__3695__auto____3043))
{var i__3044 = temp__3695__auto____3043;

(new_bucket__3041[cljs.core.inc.call(null,i__3044)] = v);
return (new cljs.core.HashMap(this__3038.meta,this__3038.count,new_hashobj__3042));
} else
{new_bucket__3041.push(k,v);
return (new cljs.core.HashMap(this__3038.meta,cljs.core.inc.call(null,this__3038.count),new_hashobj__3042));
}
} else
{var new_hashobj__3045 = goog.object.clone.call(null,this__3038.hashobj);

(new_hashobj__3045[h__3039] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__3038.meta,cljs.core.inc.call(null,this__3038.count),new_hashobj__3045));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3046 = this;
var bucket__3047 = (this__3046.hashobj[cljs.core.hash.call(null,k)]);
var i__3048 = (cljs.core.truth_(bucket__3047)?cljs.core.scan_array.call(null,2,k,bucket__3047):null);

if(cljs.core.truth_(i__3048))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3053 = null;
var G__3053__3054 = (function (coll,k){
var this__3049 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3053__3055 = (function (coll,k,not_found){
var this__3050 = this;
var bucket__3051 = (this__3050.hashobj[cljs.core.hash.call(null,k)]);
var i__3052 = (cljs.core.truth_(bucket__3051)?cljs.core.scan_array.call(null,2,k,bucket__3051):null);

if(cljs.core.truth_(i__3052))
{return (bucket__3051[cljs.core.inc.call(null,i__3052)]);
} else
{return not_found;
}
});
G__3053 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3053__3054.call(this,coll,k);
case  3 :
return G__3053__3055.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3053;
})()
;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__3057 = ks.length;

var i__3058 = 0;
var out__3059 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__3058,len__3057)))
{{
var G__3060 = cljs.core.inc.call(null,i__3058);
var G__3061 = cljs.core.assoc.call(null,out__3059,(ks[i__3058]),(vs[i__3058]));
i__3058 = G__3060;
out__3059 = G__3061;
continue;
}
} else
{return out__3059;
}
break;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__3062 = null;
var G__3062__3063 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3062__3064 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3062 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3062__3063.call(this,_,k);
case  3 :
return G__3062__3064.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3062;
})()
;
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__3066 = cljs.core.seq.call(null,keyvals);
var out__3067 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__3066))
{{
var G__3068 = cljs.core.nnext.call(null,in$__3066);
var G__3069 = cljs.core.assoc.call(null,out__3067,cljs.core.first.call(null,in$__3066),cljs.core.second.call(null,in$__3066));
in$__3066 = G__3068;
out__3067 = G__3069;
continue;
}
} else
{return out__3067;
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__3070){
var keyvals = cljs.core.seq( arglist__3070 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__3071_SHARP_,p2__3072_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____3073 = p1__3071_SHARP_;

if(cljs.core.truth_(or__3548__auto____3073))
{return or__3548__auto____3073;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__3072_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__3074){
var maps = cljs.core.seq( arglist__3074 );;
return merge__delegate.call(this, maps);
});
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__3077 = (function (m,e){
var k__3075 = cljs.core.first.call(null,e);
var v__3076 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__3075)))
{return cljs.core.assoc.call(null,m,k__3075,f.call(null,cljs.core.get.call(null,m,k__3075),v__3076));
} else
{return cljs.core.assoc.call(null,m,k__3075,v__3076);
}
});
var merge2__3079 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__3077,(function (){var or__3548__auto____3078 = m1;

if(cljs.core.truth_(or__3548__auto____3078))
{return or__3548__auto____3078;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__3079,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__3080){
var f = cljs.core.first(arglist__3080);
var maps = cljs.core.rest(arglist__3080);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__3082 = cljs.core.ObjMap.fromObject([],{});
var keys__3083 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__3083))
{var key__3084 = cljs.core.first.call(null,keys__3083);
var entry__3085 = cljs.core.get.call(null,map,key__3084);

{
var G__3086 = (cljs.core.truth_(entry__3085)?cljs.core.assoc.call(null,ret__3082,key__3084,entry__3085):ret__3082);
var G__3087 = cljs.core.next.call(null,keys__3083);
ret__3082 = G__3086;
keys__3083 = G__3087;
continue;
}
} else
{return ret__3082;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__3088 = this;
return (new cljs.core.Set(this__3088.meta,cljs.core.dissoc.call(null,this__3088.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3089 = this;
var and__3546__auto____3090 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____3090))
{var and__3546__auto____3091 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____3091))
{return cljs.core.every_QMARK_.call(null,(function (p1__3081_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__3081_SHARP_);
}),other);
} else
{return and__3546__auto____3091;
}
} else
{return and__3546__auto____3090;
}
});
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3092 = this;
return (new cljs.core.Set(this__3092.meta,cljs.core.assoc.call(null,this__3092.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3093 = this;
return cljs.core.keys.call(null,this__3093.hash_map);
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3094 = this;
return (new cljs.core.Set(meta,this__3094.hash_map));
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3095 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__3095.meta);
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3096 = this;
return this__3096.meta;
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3097 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3098 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3101 = null;
var G__3101__3102 = (function (coll,v){
var this__3099 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__3101__3103 = (function (coll,v,not_found){
var this__3100 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__3100.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__3101 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__3101__3102.call(this,coll,v);
case  3 :
return G__3101__3103.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3101;
})()
;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
cljs.core.Set.prototype.call = (function() {
var G__3105 = null;
var G__3105__3106 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3105__3107 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3105 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3105__3106.call(this,_,k);
case  3 :
return G__3105__3107.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3105;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__3110 = cljs.core.seq.call(null,coll);
var out__3111 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__3110))))
{{
var G__3112 = cljs.core.rest.call(null,in$__3110);
var G__3113 = cljs.core.conj.call(null,out__3111,cljs.core.first.call(null,in$__3110));
in$__3110 = G__3112;
out__3111 = G__3113;
continue;
}
} else
{return out__3111;
}
break;
}
});
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coll)))
{var n__3114 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____3115 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____3115))
{var e__3116 = temp__3695__auto____3115;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__3116));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__3114,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__3109_SHARP_){
var temp__3695__auto____3117 = cljs.core.find.call(null,smap,p1__3109_SHARP_);

if(cljs.core.truth_(temp__3695__auto____3117))
{var e__3118 = temp__3695__auto____3117;

return cljs.core.second.call(null,e__3118);
} else
{return p1__3109_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__3126 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__3119,seen){
while(true){
var vec__3120__3121 = p__3119;
var f__3122 = cljs.core.nth.call(null,vec__3120__3121,0,null);
var xs__3123 = vec__3120__3121;

var temp__3698__auto____3124 = cljs.core.seq.call(null,xs__3123);

if(cljs.core.truth_(temp__3698__auto____3124))
{var s__3125 = temp__3698__auto____3124;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__3122)))
{{
var G__3127 = cljs.core.rest.call(null,s__3125);
var G__3128 = seen;
p__3119 = G__3127;
seen = G__3128;
continue;
}
} else
{return cljs.core.cons.call(null,f__3122,step.call(null,cljs.core.rest.call(null,s__3125),cljs.core.conj.call(null,seen,f__3122)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__3126.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__3129 = cljs.core.Vector.fromArray([]);
var s__3130 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__3130)))
{{
var G__3131 = cljs.core.conj.call(null,ret__3129,cljs.core.first.call(null,s__3130));
var G__3132 = cljs.core.next.call(null,s__3130);
ret__3129 = G__3131;
s__3130 = G__3132;
continue;
}
} else
{return cljs.core.seq.call(null,ret__3129);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____3133 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3133))
{return or__3548__auto____3133;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3134 = x.lastIndexOf("/");

if(cljs.core.truth_(cljs.core._LT_.call(null,i__3134,0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,cljs.core.inc.call(null,i__3134));
}
} else
{if(cljs.core.truth_("﷐'else"))
{return null;
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3548__auto____3135 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3135))
{return or__3548__auto____3135;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3136 = x.lastIndexOf("/");

if(cljs.core.truth_(cljs.core._GT_.call(null,i__3136,-1)))
{return cljs.core.subs.call(null,x,2,i__3136);
} else
{return null;
}
} else
{return null;
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__3139 = cljs.core.ObjMap.fromObject([],{});
var ks__3140 = cljs.core.seq.call(null,keys);
var vs__3141 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3142 = ks__3140;

if(cljs.core.truth_(and__3546__auto____3142))
{return vs__3141;
} else
{return and__3546__auto____3142;
}
})()))
{{
var G__3143 = cljs.core.assoc.call(null,map__3139,cljs.core.first.call(null,ks__3140),cljs.core.first.call(null,vs__3141));
var G__3144 = cljs.core.next.call(null,ks__3140);
var G__3145 = cljs.core.next.call(null,vs__3141);
map__3139 = G__3143;
ks__3140 = G__3144;
vs__3141 = G__3145;
continue;
}
} else
{return map__3139;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__3148 = (function (k,x){
return x;
});
var max_key__3149 = (function (k,x,y){
if(cljs.core.truth_(cljs.core._GT_.call(null,k.call(null,x),k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__3150 = (function() { 
var G__3152__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3137_SHARP_,p2__3138_SHARP_){
return max_key.call(null,k,p1__3137_SHARP_,p2__3138_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__3152 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3152__delegate.call(this, k, x, y, more);
};
G__3152.cljs$lang$maxFixedArity = 3;
G__3152.cljs$lang$applyTo = (function (arglist__3153){
var k = cljs.core.first(arglist__3153);
var x = cljs.core.first(cljs.core.next(arglist__3153));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3153)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3153)));
return G__3152__delegate.call(this, k, x, y, more);
});
return G__3152;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__3148.call(this,k,x);
case  3 :
return max_key__3149.call(this,k,x,y);
default:
return max_key__3150.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__3150.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__3154 = (function (k,x){
return x;
});
var min_key__3155 = (function (k,x,y){
if(cljs.core.truth_(cljs.core._LT_.call(null,k.call(null,x),k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__3156 = (function() { 
var G__3158__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3146_SHARP_,p2__3147_SHARP_){
return min_key.call(null,k,p1__3146_SHARP_,p2__3147_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__3158 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3158__delegate.call(this, k, x, y, more);
};
G__3158.cljs$lang$maxFixedArity = 3;
G__3158.cljs$lang$applyTo = (function (arglist__3159){
var k = cljs.core.first(arglist__3159);
var x = cljs.core.first(cljs.core.next(arglist__3159));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3159)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3159)));
return G__3158__delegate.call(this, k, x, y, more);
});
return G__3158;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__3154.call(this,k,x);
case  3 :
return min_key__3155.call(this,k,x,y);
default:
return min_key__3156.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__3156.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__3162 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3163 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3160 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3160))
{var s__3161 = temp__3698__auto____3160;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__3161),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__3161)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__3162.call(this,n,step);
case  3 :
return partition_all__3163.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3165 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3165))
{var s__3166 = temp__3698__auto____3165;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__3166))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3166),take_while.call(null,pred,cljs.core.rest.call(null,s__3166)));
} else
{return null;
}
} else
{return null;
}
})));
});

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
})
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__3167 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__3168 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__3169 = this;
return this__3169.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__3170 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__3170.meta,cljs.core._PLUS_.call(null,this__3170.start,this__3170.step),this__3170.end,this__3170.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__3171 = this;
var comp__3172 = (cljs.core.truth_(cljs.core.pos_QMARK_.call(null,this__3171.step))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__3172.call(null,this__3171.start,this__3171.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__3173 = this;
return (new cljs.core.Range(meta,this__3173.start,this__3173.end,this__3173.step));
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__3174 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3174.meta);
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3184 = null;
var G__3184__3185 = (function (rng,n){
var this__3175 = this;
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,rng))))
{return cljs.core._PLUS_.call(null,this__3175.start,cljs.core._STAR_.call(null,n,this__3175.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____3176 = cljs.core._GT_.call(null,this__3175.start,this__3175.end);

if(cljs.core.truth_(and__3546__auto____3176))
{return cljs.core._EQ_.call(null,this__3175.step,0);
} else
{return and__3546__auto____3176;
}
})()))
{return this__3175.start;
} else
{throw "Index out of bounds";
}
}
});
var G__3184__3186 = (function (rng,n,not_found){
var this__3177 = this;
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,rng))))
{return cljs.core._PLUS_.call(null,this__3177.start,cljs.core._STAR_.call(null,n,this__3177.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____3178 = cljs.core._GT_.call(null,this__3177.start,this__3177.end);

if(cljs.core.truth_(and__3546__auto____3178))
{return cljs.core._EQ_.call(null,this__3177.step,0);
} else
{return and__3546__auto____3178;
}
})()))
{return this__3177.start;
} else
{return not_found;
}
}
});
G__3184 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__3184__3185.call(this,rng,n);
case  3 :
return G__3184__3186.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3184;
})()
;
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__3179 = this;
return this__3179.meta;
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3188 = null;
var G__3188__3189 = (function (rng,f){
var this__3180 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__3188__3190 = (function (rng,f,s){
var this__3181 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__3188 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__3188__3189.call(this,rng,f);
case  3 :
return G__3188__3190.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3188;
})()
;
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__3182 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__3183 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,cljs.core._SLASH_.call(null,cljs.core._.call(null,this__3183.end,this__3183.start),this__3183.step));
}
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__3192 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__3193 = (function (end){
return range.call(null,0,end,1);
});
var range__3194 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3195 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__3192.call(this);
case  1 :
return range__3193.call(this,start);
case  2 :
return range__3194.call(this,start,end);
case  3 :
return range__3195.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3197 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3197))
{var s__3198 = temp__3698__auto____3197;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3198),take_nth.call(null,n,cljs.core.drop.call(null,n,s__3198)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.Vector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3200 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3200))
{var s__3201 = temp__3698__auto____3200;

var fst__3202 = cljs.core.first.call(null,s__3201);
var fv__3203 = f.call(null,fst__3202);
var run__3204 = cljs.core.cons.call(null,fst__3202,cljs.core.take_while.call(null,(function (p1__3199_SHARP_){
return cljs.core._EQ_.call(null,fv__3203,f.call(null,p1__3199_SHARP_));
}),cljs.core.next.call(null,s__3201)));

return cljs.core.cons.call(null,run__3204,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__3204),s__3201))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,cljs.core.inc.call(null,cljs.core.get.call(null,counts,x,0)));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__3219 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____3215 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3215))
{var s__3216 = temp__3695__auto____3215;

return reductions.call(null,f,cljs.core.first.call(null,s__3216),cljs.core.rest.call(null,s__3216));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__3220 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3217 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3217))
{var s__3218 = temp__3698__auto____3217;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__3218)),cljs.core.rest.call(null,s__3218));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__3219.call(this,f,init);
case  3 :
return reductions__3220.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__3223 = (function (f){
return (function() {
var G__3228 = null;
var G__3228__3229 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__3228__3230 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__3228__3231 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__3228__3232 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__3228__3233 = (function() { 
var G__3235__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__3235 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3235__delegate.call(this, x, y, z, args);
};
G__3235.cljs$lang$maxFixedArity = 3;
G__3235.cljs$lang$applyTo = (function (arglist__3236){
var x = cljs.core.first(arglist__3236);
var y = cljs.core.first(cljs.core.next(arglist__3236));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3236)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3236)));
return G__3235__delegate.call(this, x, y, z, args);
});
return G__3235;
})()
;
G__3228 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3228__3229.call(this);
case  1 :
return G__3228__3230.call(this,x);
case  2 :
return G__3228__3231.call(this,x,y);
case  3 :
return G__3228__3232.call(this,x,y,z);
default:
return G__3228__3233.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3228.cljs$lang$maxFixedArity = 3;
G__3228.cljs$lang$applyTo = G__3228__3233.cljs$lang$applyTo;
return G__3228;
})()
});
var juxt__3224 = (function (f,g){
return (function() {
var G__3237 = null;
var G__3237__3238 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__3237__3239 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__3237__3240 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__3237__3241 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__3237__3242 = (function() { 
var G__3244__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3244 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3244__delegate.call(this, x, y, z, args);
};
G__3244.cljs$lang$maxFixedArity = 3;
G__3244.cljs$lang$applyTo = (function (arglist__3245){
var x = cljs.core.first(arglist__3245);
var y = cljs.core.first(cljs.core.next(arglist__3245));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3245)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3245)));
return G__3244__delegate.call(this, x, y, z, args);
});
return G__3244;
})()
;
G__3237 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3237__3238.call(this);
case  1 :
return G__3237__3239.call(this,x);
case  2 :
return G__3237__3240.call(this,x,y);
case  3 :
return G__3237__3241.call(this,x,y,z);
default:
return G__3237__3242.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3237.cljs$lang$maxFixedArity = 3;
G__3237.cljs$lang$applyTo = G__3237__3242.cljs$lang$applyTo;
return G__3237;
})()
});
var juxt__3225 = (function (f,g,h){
return (function() {
var G__3246 = null;
var G__3246__3247 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__3246__3248 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__3246__3249 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__3246__3250 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__3246__3251 = (function() { 
var G__3253__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__3253 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3253__delegate.call(this, x, y, z, args);
};
G__3253.cljs$lang$maxFixedArity = 3;
G__3253.cljs$lang$applyTo = (function (arglist__3254){
var x = cljs.core.first(arglist__3254);
var y = cljs.core.first(cljs.core.next(arglist__3254));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3254)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3254)));
return G__3253__delegate.call(this, x, y, z, args);
});
return G__3253;
})()
;
G__3246 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3246__3247.call(this);
case  1 :
return G__3246__3248.call(this,x);
case  2 :
return G__3246__3249.call(this,x,y);
case  3 :
return G__3246__3250.call(this,x,y,z);
default:
return G__3246__3251.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3246.cljs$lang$maxFixedArity = 3;
G__3246.cljs$lang$applyTo = G__3246__3251.cljs$lang$applyTo;
return G__3246;
})()
});
var juxt__3226 = (function() { 
var G__3255__delegate = function (f,g,h,fs){
var fs__3222 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__3256 = null;
var G__3256__3257 = (function (){
return cljs.core.reduce.call(null,(function (p1__3205_SHARP_,p2__3206_SHARP_){
return cljs.core.conj.call(null,p1__3205_SHARP_,p2__3206_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__3222);
});
var G__3256__3258 = (function (x){
return cljs.core.reduce.call(null,(function (p1__3207_SHARP_,p2__3208_SHARP_){
return cljs.core.conj.call(null,p1__3207_SHARP_,p2__3208_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__3222);
});
var G__3256__3259 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__3209_SHARP_,p2__3210_SHARP_){
return cljs.core.conj.call(null,p1__3209_SHARP_,p2__3210_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__3222);
});
var G__3256__3260 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__3211_SHARP_,p2__3212_SHARP_){
return cljs.core.conj.call(null,p1__3211_SHARP_,p2__3212_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__3222);
});
var G__3256__3261 = (function() { 
var G__3263__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__3213_SHARP_,p2__3214_SHARP_){
return cljs.core.conj.call(null,p1__3213_SHARP_,cljs.core.apply.call(null,p2__3214_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__3222);
};
var G__3263 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3263__delegate.call(this, x, y, z, args);
};
G__3263.cljs$lang$maxFixedArity = 3;
G__3263.cljs$lang$applyTo = (function (arglist__3264){
var x = cljs.core.first(arglist__3264);
var y = cljs.core.first(cljs.core.next(arglist__3264));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3264)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3264)));
return G__3263__delegate.call(this, x, y, z, args);
});
return G__3263;
})()
;
G__3256 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3256__3257.call(this);
case  1 :
return G__3256__3258.call(this,x);
case  2 :
return G__3256__3259.call(this,x,y);
case  3 :
return G__3256__3260.call(this,x,y,z);
default:
return G__3256__3261.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3256.cljs$lang$maxFixedArity = 3;
G__3256.cljs$lang$applyTo = G__3256__3261.cljs$lang$applyTo;
return G__3256;
})()
};
var G__3255 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3255__delegate.call(this, f, g, h, fs);
};
G__3255.cljs$lang$maxFixedArity = 3;
G__3255.cljs$lang$applyTo = (function (arglist__3265){
var f = cljs.core.first(arglist__3265);
var g = cljs.core.first(cljs.core.next(arglist__3265));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3265)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3265)));
return G__3255__delegate.call(this, f, g, h, fs);
});
return G__3255;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__3223.call(this,f);
case  2 :
return juxt__3224.call(this,f,g);
case  3 :
return juxt__3225.call(this,f,g,h);
default:
return juxt__3226.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__3226.cljs$lang$applyTo;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__3267 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__3270 = cljs.core.next.call(null,coll);
coll = G__3270;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__3268 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3266 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____3266))
{return cljs.core.pos_QMARK_.call(null,n);
} else
{return and__3546__auto____3266;
}
})()))
{{
var G__3271 = cljs.core.dec.call(null,n);
var G__3272 = cljs.core.next.call(null,coll);
n = G__3271;
coll = G__3272;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case  1 :
return dorun__3267.call(this,n);
case  2 :
return dorun__3268.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__3273 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__3274 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__3273.call(this,n);
case  2 :
return doall__3274.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__3276 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__3276),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3276),1)))
{return cljs.core.first.call(null,matches__3276);
} else
{return cljs.core.vec.call(null,matches__3276);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__3277 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__3277)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3277),1)))
{return cljs.core.first.call(null,matches__3277);
} else
{return cljs.core.vec.call(null,matches__3277);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__3278 = cljs.core.re_find.call(null,re,s);
var match_idx__3279 = s.search(re);
var match_str__3280 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__3278))?cljs.core.first.call(null,match_data__3278):match_data__3278);
var post_match__3281 = cljs.core.subs.call(null,s,cljs.core._PLUS_.call(null,match_idx__3279,cljs.core.count.call(null,match_str__3280)));

if(cljs.core.truth_(match_data__3278))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__3278,re_seq.call(null,re,post_match__3281));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
return (new RegExp(s));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__3282_SHARP_){
return print_one.call(null,p1__3282_SHARP_,opts);
}),coll))),cljs.core.Vector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
print.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____3283 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____3283))
{var and__3546__auto____3286 = (function (){var x__163__auto____3284 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____3285 = x__163__auto____3284;

if(cljs.core.truth_(and__3546__auto____3285))
{return x__163__auto____3284.cljs$core$IMeta$;
} else
{return and__3546__auto____3285;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__163__auto____3284);
}
})();

if(cljs.core.truth_(and__3546__auto____3286))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____3286;
}
} else
{return and__3546__auto____3283;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__163__auto____3287 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____3288 = x__163__auto____3287;

if(cljs.core.truth_(and__3546__auto____3288))
{return x__163__auto____3287.cljs$core$IPrintable$;
} else
{return and__3546__auto____3288;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__163__auto____3287);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
var first_obj__3289 = cljs.core.first.call(null,objs);
var sb__3290 = (new goog.string.StringBuffer());

var G__3291__3292 = cljs.core.seq.call(null,objs);

while(true){
if(cljs.core.truth_(G__3291__3292))
{var obj__3293 = cljs.core.first.call(null,G__3291__3292);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3293,first_obj__3289)))
{} else
{sb__3290.append(" ");
}
var G__3294__3295 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3293,opts));

while(true){
if(cljs.core.truth_(G__3294__3295))
{var string__3296 = cljs.core.first.call(null,G__3294__3295);

sb__3290.append(string__3296);
{
var G__3297 = cljs.core.next.call(null,G__3294__3295);
G__3294__3295 = G__3297;
continue;
}
} else
{}
break;
}
{
var G__3298 = cljs.core.next.call(null,G__3291__3292);
G__3291__3292 = G__3298;
continue;
}
} else
{}
break;
}
return cljs.core.str.call(null,sb__3290);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__3299 = cljs.core.first.call(null,objs);

var G__3300__3301 = cljs.core.seq.call(null,objs);

while(true){
if(cljs.core.truth_(G__3300__3301))
{var obj__3302 = cljs.core.first.call(null,G__3300__3301);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3302,first_obj__3299)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__3303__3304 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3302,opts));

while(true){
if(cljs.core.truth_(G__3303__3304))
{var string__3305 = cljs.core.first.call(null,G__3303__3304);

cljs.core.string_print.call(null,string__3305);
{
var G__3306 = cljs.core.next.call(null,G__3303__3304);
G__3303__3304 = G__3306;
continue;
}
} else
{}
break;
}
{
var G__3307 = cljs.core.next.call(null,G__3300__3301);
G__3300__3301 = G__3307;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"﷐'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["﷐'flush-on-newline","﷐'readably","﷐'meta","﷐'dup"],{"﷐'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"﷐'readably":cljs.core._STAR_print_readably_STAR_,"﷐'meta":cljs.core._STAR_print_meta_STAR_,"﷐'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__3308){
var objs = cljs.core.seq( arglist__3308 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__3309){
var objs = cljs.core.seq( arglist__3309 );;
return pr__delegate.call(this, objs);
});
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__3310){
var objs = cljs.core.seq( arglist__3310 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__3311){
var objs = cljs.core.seq( arglist__3311 );;
return println__delegate.call(this, objs);
});
return println;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__3312){
var objs = cljs.core.seq( arglist__3312 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3313 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3313,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____3314 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____3314))
{var nspc__3315 = temp__3698__auto____3314;

return cljs.core.str.call(null,nspc__3315,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____3316 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____3316))
{var nspc__3317 = temp__3698__auto____3316;

return cljs.core.str.call(null,nspc__3317,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("﷐'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3318 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3318,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator){
this.state = state;
this.meta = meta;
this.validator = validator;
})
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__3319 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__3319.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__3320 = this;
return this__3320.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3321 = this;
return this__3321.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3322 = this;
return cljs.core.identical_QMARK_.call(null,o,other);
});
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an exception.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__3329 = (function (x){
return (new cljs.core.Atom(x,null,null));
});
var atom__3330 = (function() { 
var G__3332__delegate = function (x,p__3323){
var map__3324__3325 = p__3323;
var map__3324__3326 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3324__3325))?cljs.core.apply.call(null,cljs.core.hash_map,map__3324__3325):map__3324__3325);
var validator__3327 = cljs.core.get.call(null,map__3324__3326,"﷐'validator");
var meta__3328 = cljs.core.get.call(null,map__3324__3326,"﷐'meta");

return (new cljs.core.Atom(x,meta__3328,validator__3327));
};
var G__3332 = function (x,var_args){
var p__3323 = null;
if (goog.isDef(var_args)) {
  p__3323 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3332__delegate.call(this, x, p__3323);
};
G__3332.cljs$lang$maxFixedArity = 1;
G__3332.cljs$lang$applyTo = (function (arglist__3333){
var x = cljs.core.first(arglist__3333);
var p__3323 = cljs.core.rest(arglist__3333);
return G__3332__delegate.call(this, x, p__3323);
});
return G__3332;
})()
;
atom = function(x,var_args){
var p__3323 = var_args;
switch(arguments.length){
case  1 :
return atom__3329.call(this,x);
default:
return atom__3330.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__3330.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,newval){
var temp__3698__auto____3334 = a.validator;

if(cljs.core.truth_(temp__3698__auto____3334))
{var v__3335 = temp__3698__auto____3334;

if(cljs.core.truth_(v__3335.call(null,newval)))
{} else
{throw "Validator rejected reference state";
}
} else
{}
return a.state = newval;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___3336 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3337 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___3338 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___3339 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___3340 = (function() { 
var G__3342__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__3342 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3342__delegate.call(this, a, f, x, y, z, more);
};
G__3342.cljs$lang$maxFixedArity = 5;
G__3342.cljs$lang$applyTo = (function (arglist__3343){
var a = cljs.core.first(arglist__3343);
var f = cljs.core.first(cljs.core.next(arglist__3343));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3343)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3343))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3343)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3343)))));
return G__3342__delegate.call(this, a, f, x, y, z, more);
});
return G__3342;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___3336.call(this,a,f);
case  3 :
return swap_BANG___3337.call(this,a,f,x);
case  4 :
return swap_BANG___3338.call(this,a,f,x,y);
case  5 :
return swap_BANG___3339.call(this,a,f,x,y,z);
default:
return swap_BANG___3340.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___3340.cljs$lang$applyTo;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for a var/ref/agent/atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an exception. If the current state (root
* value if var) is not acceptable to the new validator, an exception
* will be thrown and the validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__3344){
var iref = cljs.core.first(arglist__3344);
var f = cljs.core.first(cljs.core.next(arglist__3344));
var args = cljs.core.rest(cljs.core.next(arglist__3344));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for a namespace/var/ref/agent/atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__3345 = (function (){
return gensym.call(null,"G__");
});
var gensym__3346 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__3345.call(this);
case  1 :
return gensym__3346.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (f,state){
this.f = f;
this.state = state;
})
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__3348 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__3348.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3349 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__3349.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__3349.state,this__3349.f);
}
return cljs.core.deref.call(null,this__3349.state);
});
/**
* Takes a body of expressions and yields a Delay object that will
* invoke the body only the first time it is forced (with force or deref/@), and
* will cache the result and return it on all subsequent force
* calls.
* @param {...*} var_args
*/
cljs.core.delay = (function() { 
var delay__delegate = function (body){
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,cljs.core.identity,body);
}),cljs.core.atom.call(null,null)));
};
var delay = function (var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return delay__delegate.call(this, body);
};
delay.cljs$lang$maxFixedArity = 0;
delay.cljs$lang$applyTo = (function (arglist__3350){
var body = cljs.core.seq( arglist__3350 );;
return delay__delegate.call(this, body);
});
return delay;
})()
;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__3351__3352 = options;
var map__3351__3353 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3351__3352))?cljs.core.apply.call(null,cljs.core.hash_map,map__3351__3352):map__3351__3352);
var keywordize_keys__3354 = cljs.core.get.call(null,map__3351__3353,"﷐'keywordize-keys");
var keyfn__3355 = (cljs.core.truth_(keywordize_keys__3354)?cljs.core.keyword:cljs.core.str);
var f__3361 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__217__auto____3360 = (function iter__3356(s__3357){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3357__3358 = s__3357;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3357__3358)))
{var k__3359 = cljs.core.first.call(null,s__3357__3358);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__3355.call(null,k__3359),thisfn.call(null,(x[k__3359]))]),iter__3356.call(null,cljs.core.rest.call(null,s__3357__3358)));
} else
{return null;
}
break;
}
})));
});

return iter__217__auto____3360.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if(cljs.core.truth_("﷐'else"))
{return x;
} else
{return null;
}
}
}
}
}
});

return f__3361.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__3362){
var x = cljs.core.first(arglist__3362);
var options = cljs.core.rest(arglist__3362);
return js__GT_clj__delegate.call(this, x, options);
});
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__3363 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__3367__delegate = function (args){
var temp__3695__auto____3364 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__3363),args);

if(cljs.core.truth_(temp__3695__auto____3364))
{var v__3365 = temp__3695__auto____3364;

return v__3365;
} else
{var ret__3366 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__3363,cljs.core.assoc,args,ret__3366);
return ret__3366;
}
};
var G__3367 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3367__delegate.call(this, args);
};
G__3367.cljs$lang$maxFixedArity = 0;
G__3367.cljs$lang$applyTo = (function (arglist__3368){
var args = cljs.core.seq( arglist__3368 );;
return G__3367__delegate.call(this, args);
});
return G__3367;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__3370 = (function (f){
while(true){
var ret__3369 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__3369)))
{{
var G__3373 = ret__3369;
f = G__3373;
continue;
}
} else
{return ret__3369;
}
break;
}
});
var trampoline__3371 = (function() { 
var G__3374__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__3374 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3374__delegate.call(this, f, args);
};
G__3374.cljs$lang$maxFixedArity = 1;
G__3374.cljs$lang$applyTo = (function (arglist__3375){
var f = cljs.core.first(arglist__3375);
var args = cljs.core.rest(arglist__3375);
return G__3374__delegate.call(this, f, args);
});
return G__3374;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__3370.call(this,f);
default:
return trampoline__3371.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__3371.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__3376 = (function (){
return rand.call(null,1);
});
var rand__3377 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__3376.call(this);
case  1 :
return rand__3377.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__3379 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__3379,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__3379,cljs.core.Vector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'descendants","﷐'ancestors"],{"﷐'parents":cljs.core.ObjMap.fromObject([],{}),"﷐'descendants":cljs.core.ObjMap.fromObject([],{}),"﷐'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___3388 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3389 = (function (h,child,parent){
var or__3548__auto____3380 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____3380))
{return or__3548__auto____3380;
} else
{var or__3548__auto____3381 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____3381))
{return or__3548__auto____3381;
} else
{var and__3546__auto____3382 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____3382))
{var and__3546__auto____3383 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____3383))
{var and__3546__auto____3384 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____3384))
{var ret__3385 = true;
var i__3386 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____3387 = cljs.core.not.call(null,ret__3385);

if(cljs.core.truth_(or__3548__auto____3387))
{return or__3548__auto____3387;
} else
{return cljs.core._EQ_.call(null,i__3386,cljs.core.count.call(null,parent));
}
})()))
{return ret__3385;
} else
{{
var G__3391 = isa_QMARK_.call(null,h,child.call(null,i__3386),parent.call(null,i__3386));
var G__3392 = cljs.core.inc.call(null,i__3386);
ret__3385 = G__3391;
i__3386 = G__3392;
continue;
}
}
break;
}
} else
{return and__3546__auto____3384;
}
} else
{return and__3546__auto____3383;
}
} else
{return and__3546__auto____3382;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___3388.call(this,h,child);
case  3 :
return isa_QMARK___3389.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__3393 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__3394 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__3393.call(this,h);
case  2 :
return parents__3394.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__3396 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__3397 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__3396.call(this,h);
case  2 :
return ancestors__3397.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on Java type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__3399 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__3400 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__3399.call(this,h);
case  2 :
return descendants__3400.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__3410 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'namespace","﷑'parent")));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3411 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not=","﷑'tag","﷑'parent")));
}
var tp__3405 = "﷐'parents".call(null,h);
var td__3406 = "﷐'descendants".call(null,h);
var ta__3407 = "﷐'ancestors".call(null,h);
var tf__3408 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____3409 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__3405.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3407.call(null,tag),parent)))
{throw cljs.core.str.call(null,tag,"already has",parent,"as ancestor");
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3407.call(null,parent),tag)))
{throw cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor");
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__3405,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__3408.call(null,"﷐'ancestors".call(null,h),tag,td__3406,parent,ta__3407),"﷐'descendants":tf__3408.call(null,"﷐'descendants".call(null,h),parent,ta__3407,tag,td__3406)});
})());

if(cljs.core.truth_(or__3548__auto____3409))
{return or__3548__auto____3409;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__3410.call(this,h,tag);
case  3 :
return derive__3411.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__3417 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3418 = (function (h,tag,parent){
var parentMap__3413 = "﷐'parents".call(null,h);
var childsParents__3414 = (cljs.core.truth_(parentMap__3413.call(null,tag))?cljs.core.disj.call(null,parentMap__3413.call(null,tag),parent):cljs.core.set([]));
var newParents__3415 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__3414))?cljs.core.assoc.call(null,parentMap__3413,tag,childsParents__3414):cljs.core.dissoc.call(null,parentMap__3413,tag));
var deriv_seq__3416 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__3402_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__3402_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__3402_SHARP_),cljs.core.second.call(null,p1__3402_SHARP_)));
}),cljs.core.seq.call(null,newParents__3415)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__3413.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__3403_SHARP_,p2__3404_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__3403_SHARP_,p2__3404_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__3416));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__3417.call(this,h,tag);
case  3 :
return underive__3418.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__3420 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____3422 = (cljs.core.truth_((function (){var and__3546__auto____3421 = xprefs__3420;

if(cljs.core.truth_(and__3546__auto____3421))
{return xprefs__3420.call(null,y);
} else
{return and__3546__auto____3421;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____3422))
{return or__3548__auto____3422;
} else
{var or__3548__auto____3424 = (function (){var ps__3423 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,cljs.core.count.call(null,ps__3423))))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__3423),prefer_table)))
{} else
{}
{
var G__3427 = cljs.core.rest.call(null,ps__3423);
ps__3423 = G__3427;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____3424))
{return or__3548__auto____3424;
} else
{var or__3548__auto____3426 = (function (){var ps__3425 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,cljs.core.count.call(null,ps__3425))))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__3425),y,prefer_table)))
{} else
{}
{
var G__3428 = cljs.core.rest.call(null,ps__3425);
ps__3425 = G__3428;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____3426))
{return or__3548__auto____3426;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____3429 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____3429))
{return or__3548__auto____3429;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__3438 = cljs.core.reduce.call(null,(function (be,p__3430){
var vec__3431__3432 = p__3430;
var k__3433 = cljs.core.nth.call(null,vec__3431__3432,0,null);
var ___3434 = cljs.core.nth.call(null,vec__3431__3432,1,null);
var e__3435 = vec__3431__3432;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__3433)))
{var be2__3437 = (cljs.core.truth_((function (){var or__3548__auto____3436 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____3436))
{return or__3548__auto____3436;
} else
{return cljs.core.dominates.call(null,k__3433,cljs.core.first.call(null,be),prefer_table);
}
})())?e__3435:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__3437),k__3433,prefer_table)))
{} else
{throw cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__3433," and ",cljs.core.first.call(null,be2__3437),", and neither is preferred");
}
return be2__3437;
} else
{return null;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__3438))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__3438));
return cljs.core.second.call(null,best_entry__3438);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if(cljs.core.truth_((function (){var and__3546__auto____3439 = mf;

if(cljs.core.truth_(and__3546__auto____3439))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____3439;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____3440 = (_reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3440))
{return or__3548__auto____3440;
} else
{var or__3548__auto____3441 = (_reset["_"]);

if(cljs.core.truth_(or__3548__auto____3441))
{return or__3548__auto____3441;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____3442 = mf;

if(cljs.core.truth_(and__3546__auto____3442))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____3442;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____3443 = (_add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3443))
{return or__3548__auto____3443;
} else
{var or__3548__auto____3444 = (_add_method["_"]);

if(cljs.core.truth_(or__3548__auto____3444))
{return or__3548__auto____3444;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____3445 = mf;

if(cljs.core.truth_(and__3546__auto____3445))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____3445;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____3446 = (_remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3446))
{return or__3548__auto____3446;
} else
{var or__3548__auto____3447 = (_remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____3447))
{return or__3548__auto____3447;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____3448 = mf;

if(cljs.core.truth_(and__3546__auto____3448))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____3448;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____3449 = (_prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3449))
{return or__3548__auto____3449;
} else
{var or__3548__auto____3450 = (_prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____3450))
{return or__3548__auto____3450;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____3451 = mf;

if(cljs.core.truth_(and__3546__auto____3451))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____3451;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____3452 = (_get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3452))
{return or__3548__auto____3452;
} else
{var or__3548__auto____3453 = (_get_method["_"]);

if(cljs.core.truth_(or__3548__auto____3453))
{return or__3548__auto____3453;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____3454 = mf;

if(cljs.core.truth_(and__3546__auto____3454))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____3454;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____3455 = (_methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3455))
{return or__3548__auto____3455;
} else
{var or__3548__auto____3456 = (_methods["_"]);

if(cljs.core.truth_(or__3548__auto____3456))
{return or__3548__auto____3456;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____3457 = mf;

if(cljs.core.truth_(and__3546__auto____3457))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____3457;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____3458 = (_prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3458))
{return or__3548__auto____3458;
} else
{var or__3548__auto____3459 = (_prefers["_"]);

if(cljs.core.truth_(or__3548__auto____3459))
{return or__3548__auto____3459;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._invoke = (function _invoke(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____3460 = mf;

if(cljs.core.truth_(and__3546__auto____3460))
{return mf.cljs$core$IMultiFn$_invoke;
} else
{return and__3546__auto____3460;
}
})()))
{return mf.cljs$core$IMultiFn$_invoke(mf,args);
} else
{return (function (){var or__3548__auto____3461 = (_invoke[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3461))
{return or__3548__auto____3461;
} else
{var or__3548__auto____3462 = (_invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3462))
{return or__3548__auto____3462;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-invoke",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_invoke = (function do_invoke(mf,dispatch_fn,args){
var dispatch_val__3463 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__3464 = cljs.core._get_method.call(null,mf,dispatch_val__3463);

if(cljs.core.truth_(target_fn__3464))
{} else
{throw cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__3463);
}
return cljs.core.apply.call(null,target_fn__3464,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
})
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__3465 = this;
cljs.core.swap_BANG_.call(null,this__3465.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3465.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3465.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3465.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__3466 = this;
cljs.core.swap_BANG_.call(null,this__3466.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__3466.method_cache,this__3466.method_table,this__3466.cached_hierarchy,this__3466.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__3467 = this;
cljs.core.swap_BANG_.call(null,this__3467.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__3467.method_cache,this__3467.method_table,this__3467.cached_hierarchy,this__3467.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__3468 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__3468.cached_hierarchy),cljs.core.deref.call(null,this__3468.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__3468.method_cache,this__3468.method_table,this__3468.cached_hierarchy,this__3468.hierarchy);
}
var temp__3695__auto____3469 = cljs.core.deref.call(null,this__3468.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____3469))
{var target_fn__3470 = temp__3695__auto____3469;

return target_fn__3470;
} else
{var temp__3695__auto____3471 = cljs.core.find_and_cache_best_method.call(null,this__3468.name,dispatch_val,this__3468.hierarchy,this__3468.method_table,this__3468.prefer_table,this__3468.method_cache,this__3468.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____3471))
{var target_fn__3472 = temp__3695__auto____3471;

return target_fn__3472;
} else
{return cljs.core.deref.call(null,this__3468.method_table).call(null,this__3468.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__3473 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__3473.prefer_table)))
{throw cljs.core.str.call(null,"Preference conflict in multimethod '",this__3473.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x);
} else
{}
cljs.core.swap_BANG_.call(null,this__3473.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__3473.method_cache,this__3473.method_table,this__3473.cached_hierarchy,this__3473.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__3474 = this;
return cljs.core.deref.call(null,this__3474.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__3475 = this;
return cljs.core.deref.call(null,this__3475.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_invoke = (function (mf,args){
var this__3476 = this;
return cljs.core.do_invoke.call(null,mf,this__3476.dispatch_fn,args);
});
cljs.core.MultiFn.prototype.call = (function() { 
var G__3477__delegate = function (_,args){
return cljs.core._invoke.call(null,this,args);
};
var G__3477 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3477__delegate.call(this, _, args);
};
G__3477.cljs$lang$maxFixedArity = 1;
G__3477.cljs$lang$applyTo = (function (arglist__3478){
var _ = cljs.core.first(arglist__3478);
var args = cljs.core.rest(arglist__3478);
return G__3477__delegate.call(this, _, args);
});
return G__3477;
})()
;
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});

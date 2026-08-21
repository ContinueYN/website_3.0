import{al as Ht,aC as ll,N as Gt,d as Un,h as St,a as Fe,j as ts,i as ht,a0 as j,aB as ii,f as rt,w as tt,a4 as Zr,c as ns,W as Qr,d0 as kt,b as st,aH as tn,H as an,D as Ct,B as Et,k as Nn,a6 as At,d1 as cl,cu as Tt,cv as Jr,d2 as ul,ab as bt,ac as Hr,G as it,ag as dl,V as dt,ai as yn,aj as fl,av as Zi,g as Yt,ao as Ln,ap as Dn,am as ri,an as gn,J as Ii,cw as hl,a8 as pl,X as oi,L as Mt,a9 as Ui,Z as wn,bg as eo,aU as ml,aV as _l,ar as Wn,d3 as gl,d4 as vl,d5 as Ml,d6 as xl,aW as Sl,aX as El,aY as Tl,aZ as Rl,a_ as Al,a$ as bl,b0 as wl,b1 as Pl,b2 as Cl,b3 as Ll,as as yl,aF as is,aG as Ni,aI as Ti,aJ as Qn,aK as rs,U as qt,aL as Il,aM as Ul,K as Gr,aN as Nl,O as kr,aO as Dl,aP as Ol,aQ as Fl,aA as Bl,I as Oe,d7 as Vl,d8 as Hl,d9 as Wt,ct as at,P as Ri,Q as Gl,a2 as Kt,l as Jn,aS as nn,$ as kl,bw as os,bv as as,bu as ss,bq as Di,bk as ls,bl as cs,da as us,ak as ds,bm as Wl,bn as zl,bo as Xl,bp as Yl,aE as fs,br as ql,bs as Kl,bt as jl,bx as Qi,by as Ji,bz as er,bA as tr,bB as to,bC as no,bD as io,bE as ro,bF as oo,bG as ao,bH as so,bI as lo,bJ as co,bK as uo,bL as fo,bM as ho,bN as po,bO as mo,bP as _o,bQ as go,bR as vo,bS as Mo,bT as xo,bU as So,bV as Eo,bW as To,bX as Ro,bY as Ao,bZ as bo,b_ as wo,db as Po,dc as Co,b$ as Lo,c0 as yo,c1 as Io,c2 as Uo,bc as $l,bd as Zl,be as Ql,bf as Jl,bh as ec,bi as tc,bj as nc,b4 as ic,b5 as No,b6 as rc,bb as Ai,aq as oc,b8 as Do,b9 as Oo,ba as Fo,cV as hs,dd as ps,de as xt,ay as Hi,cm as ms,cq as ac,df as _s,cU as Wr,dg as wr,a1 as si,C as gs,cX as sc,dh as vs,E as Ms,z as xs,y as Ss,x as Es,v as Ts,u as Rs,aT as Bo,aR as As,aw as nr,ax as ir,cx as lc,cy as cc,di as Vo,dj as uc,ch as ai,ci as On,M as rn,dk as dc,dl as fc,ad as hc,ae as pc,af as mc,T as Pr,cR as _c,cQ as gc,cP as vc,dm as Mc,dn as Cr,dp as bs,dq as xc,dr as ni,ds as ws,c5 as zt,r as Sc,o as Ec,p as bi,dt as Tc,au as Xe,a5 as Rc,cj as Fn,cY as Ac,du as bc,cW as zr,cc as wc,aa as wi,ca as li,c4 as Xr,dv as Pc,dw as Ps,dx as Gi,dy as Cs,dz as Cc,dA as Lc,dB as jt,cf as ct,dC as ki,dD as yc,dE as Ic,dF as Uc,dG as Ls,cr as Yr,dH as Ho,dI as Go,dJ as ko,dK as Nc,dL as Dc,cl as Oc,dM as Fc,a3 as Bc,dN as Wo,dO as Vc,e as Hc,A as Gc,dP as kc,dQ as Wc,az as zc}from"./three.core-C5qsqGEd.js";import{_ as Xc,p as Yc}from"./index-Dw7B7Qjr.js";import{r as rr,o as qc,e as Kc,f as pi,v as mi,j as or,g as _i,y as jc}from"./vendor-CofKqqax.js";import"./lucide-DtK9GmnU.js";import"./aos-B5LL9sPA.js";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ys(){let e=null,t=!1,n=null,i=null;function r(o,a){n(o,a),i=e.requestAnimationFrame(r)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(r),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){n=o},setContext:function(o){e=o}}}function $c(e){const t=new WeakMap;function n(s,l){const c=s.array,h=s.usage,d=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,h),s.onUploadCallback();let _;if(c instanceof Float32Array)_=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)_=e.HALF_FLOAT;else if(c instanceof Uint16Array)s.isFloat16BufferAttribute?_=e.HALF_FLOAT:_=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)_=e.SHORT;else if(c instanceof Uint32Array)_=e.UNSIGNED_INT;else if(c instanceof Int32Array)_=e.INT;else if(c instanceof Int8Array)_=e.BYTE;else if(c instanceof Uint8Array)_=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)_=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:_,bytesPerElement:c.BYTES_PER_ELEMENT,version:s.version,size:d}}function i(s,l,c){const h=l.array,d=l.updateRanges;if(e.bindBuffer(c,s),d.length===0)e.bufferSubData(c,0,h);else{d.sort((_,M)=>_.start-M.start);let u=0;for(let _=1;_<d.length;_++){const M=d[u],x=d[_];x.start<=M.start+M.count+1?M.count=Math.max(M.count,x.start+x.count-M.start):(++u,d[u]=x)}d.length=u+1;for(let _=0,M=d.length;_<M;_++){const x=d[_];e.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(s){return s.isInterleavedBufferAttribute&&(s=s.data),t.get(s)}function o(s){s.isInterleavedBufferAttribute&&(s=s.data);const l=t.get(s);l&&(e.deleteBuffer(l.buffer),t.delete(s))}function a(s,l){if(s.isInterleavedBufferAttribute&&(s=s.data),s.isGLBufferAttribute){const h=t.get(s);(!h||h.version<s.version)&&t.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}const c=t.get(s);if(c===void 0)t.set(s,n(s,l));else if(c.version<s.version){if(c.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,s,l),c.version=s.version}}return{get:r,remove:o,update:a}}var Zc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qc=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Jc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ru=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ou=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,au=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,su=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,uu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,du=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_u=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,vu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Mu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,xu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Su=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Eu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Tu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ru=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Au=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Lu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,yu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Iu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Uu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Nu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Du=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ou=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Vu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ku=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Wu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ku=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ju=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$u=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qu=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ju=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ed=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,td=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,id=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,od=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ad=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ld=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ud=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,md=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_d=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Md=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ed=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Td=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ad=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,bd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ld=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Id=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ud=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Nd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Dd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Od=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Bd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Hd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Yd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $d=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ef=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,of=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,af=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,df=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ff=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_f=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Mf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ef=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Af=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:Zc,alphahash_pars_fragment:Qc,alphamap_fragment:Jc,alphamap_pars_fragment:eu,alphatest_fragment:tu,alphatest_pars_fragment:nu,aomap_fragment:iu,aomap_pars_fragment:ru,batching_pars_vertex:ou,batching_vertex:au,begin_vertex:su,beginnormal_vertex:lu,bsdfs:cu,iridescence_fragment:uu,bumpmap_pars_fragment:du,clipping_planes_fragment:fu,clipping_planes_pars_fragment:hu,clipping_planes_pars_vertex:pu,clipping_planes_vertex:mu,color_fragment:_u,color_pars_fragment:gu,color_pars_vertex:vu,color_vertex:Mu,common:xu,cube_uv_reflection_fragment:Su,defaultnormal_vertex:Eu,displacementmap_pars_vertex:Tu,displacementmap_vertex:Ru,emissivemap_fragment:Au,emissivemap_pars_fragment:bu,colorspace_fragment:wu,colorspace_pars_fragment:Pu,envmap_fragment:Cu,envmap_common_pars_fragment:Lu,envmap_pars_fragment:yu,envmap_pars_vertex:Iu,envmap_physical_pars_fragment:Wu,envmap_vertex:Uu,fog_vertex:Nu,fog_pars_vertex:Du,fog_fragment:Ou,fog_pars_fragment:Fu,gradientmap_pars_fragment:Bu,lightmap_pars_fragment:Vu,lights_lambert_fragment:Hu,lights_lambert_pars_fragment:Gu,lights_pars_begin:ku,lights_toon_fragment:zu,lights_toon_pars_fragment:Xu,lights_phong_fragment:Yu,lights_phong_pars_fragment:qu,lights_physical_fragment:Ku,lights_physical_pars_fragment:ju,lights_fragment_begin:$u,lights_fragment_maps:Zu,lights_fragment_end:Qu,logdepthbuf_fragment:Ju,logdepthbuf_pars_fragment:ed,logdepthbuf_pars_vertex:td,logdepthbuf_vertex:nd,map_fragment:id,map_pars_fragment:rd,map_particle_fragment:od,map_particle_pars_fragment:ad,metalnessmap_fragment:sd,metalnessmap_pars_fragment:ld,morphinstance_vertex:cd,morphcolor_vertex:ud,morphnormal_vertex:dd,morphtarget_pars_vertex:fd,morphtarget_vertex:hd,normal_fragment_begin:pd,normal_fragment_maps:md,normal_pars_fragment:_d,normal_pars_vertex:gd,normal_vertex:vd,normalmap_pars_fragment:Md,clearcoat_normal_fragment_begin:xd,clearcoat_normal_fragment_maps:Sd,clearcoat_pars_fragment:Ed,iridescence_pars_fragment:Td,opaque_fragment:Rd,packing:Ad,premultiplied_alpha_fragment:bd,project_vertex:wd,dithering_fragment:Pd,dithering_pars_fragment:Cd,roughnessmap_fragment:Ld,roughnessmap_pars_fragment:yd,shadowmap_pars_fragment:Id,shadowmap_pars_vertex:Ud,shadowmap_vertex:Nd,shadowmask_pars_fragment:Dd,skinbase_vertex:Od,skinning_pars_vertex:Fd,skinning_vertex:Bd,skinnormal_vertex:Vd,specularmap_fragment:Hd,specularmap_pars_fragment:Gd,tonemapping_fragment:kd,tonemapping_pars_fragment:Wd,transmission_fragment:zd,transmission_pars_fragment:Xd,uv_pars_fragment:Yd,uv_pars_vertex:qd,uv_vertex:Kd,worldpos_vertex:jd,background_vert:$d,background_frag:Zd,backgroundCube_vert:Qd,backgroundCube_frag:Jd,cube_vert:ef,cube_frag:tf,depth_vert:nf,depth_frag:rf,distance_vert:of,distance_frag:af,equirect_vert:sf,equirect_frag:lf,linedashed_vert:cf,linedashed_frag:uf,meshbasic_vert:df,meshbasic_frag:ff,meshlambert_vert:hf,meshlambert_frag:pf,meshmatcap_vert:mf,meshmatcap_frag:_f,meshnormal_vert:gf,meshnormal_frag:vf,meshphong_vert:Mf,meshphong_frag:xf,meshphysical_vert:Sf,meshphysical_frag:Ef,meshtoon_vert:Tf,meshtoon_frag:Rf,points_vert:Af,points_frag:bf,shadow_vert:wf,shadow_frag:Pf,sprite_vert:Cf,sprite_frag:Lf},se={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Vt={basic:{uniforms:xt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:xt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Fe(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:xt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:xt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:xt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:xt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:xt([se.points,se.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:xt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:xt([se.common,se.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:xt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:xt([se.sprite,se.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:xt([se.common,se.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:xt([se.lights,se.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Vt.physical={uniforms:xt([Vt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const gi={r:0,b:0,g:0},cn=new si,yf=new ht;function If(e,t,n,i,r,o){const a=new Fe(0);let s=r===!0?0:1,l,c,h=null,d=0,u=null;function _(T){let A=T.isScene===!0?T.background:null;if(A&&A.isTexture){const R=T.backgroundBlurriness>0;A=t.get(A,R)}return A}function M(T){let A=!1;const R=_(T);R===null?f(a,s):R&&R.isColor&&(f(R,1),A=!0);const C=e.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(e.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function x(T,A){const R=_(A);R&&(R.isCubeTexture||R.mapping===Hi)?(c===void 0&&(c=new bt(new Wr(1,1,1),new Wt({name:"BackgroundCubeMaterial",uniforms:wr(Vt.backgroundCube.uniforms),vertexShader:Vt.backgroundCube.vertexShader,fragmentShader:Vt.backgroundCube.fragmentShader,side:Et,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,b,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),cn.copy(A.backgroundRotation),cn.x*=-1,cn.y*=-1,cn.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(cn.y*=-1,cn.z*=-1),c.material.uniforms.envMap.value=R,c.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(yf.makeRotationFromEuler(cn)),c.material.toneMapped=st.getTransfer(R.colorSpace)!==it,(h!==R||d!==R.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,h=R,d=R.version,u=e.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new bt(new ds(2,2),new Wt({name:"BackgroundMaterial",uniforms:wr(Vt.background.uniforms),vertexShader:Vt.background.vertexShader,fragmentShader:Vt.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=st.getTransfer(R.colorSpace)!==it,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(h!==R||d!==R.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,h=R,d=R.version,u=e.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function f(T,A){T.getRGB(gi,_s(e)),n.buffers.color.setClear(gi.r,gi.g,gi.b,A,o)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,A=1){a.set(T),s=A,f(a,s)},getClearAlpha:function(){return s},setClearAlpha:function(T){s=T,f(a,s)},render:M,addToRenderList:x,dispose:p}}function Uf(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},r=u(null);let o=r,a=!1;function s(P,V,W,X,q){let B=!1;const D=d(P,X,W,V);o!==D&&(o=D,c(o.object)),B=_(P,X,W,q),B&&M(P,X,W,q),q!==null&&t.update(q,e.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,R(P,V,W,X),q!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return e.createVertexArray()}function c(P){return e.bindVertexArray(P)}function h(P){return e.deleteVertexArray(P)}function d(P,V,W,X){const q=X.wireframe===!0;let B=i[V.id];B===void 0&&(B={},i[V.id]=B);const D=P.isInstancedMesh===!0?P.id:0;let ie=B[D];ie===void 0&&(ie={},B[D]=ie);let oe=ie[W.id];oe===void 0&&(oe={},ie[W.id]=oe);let de=oe[q];return de===void 0&&(de=u(l()),oe[q]=de),de}function u(P){const V=[],W=[],X=[];for(let q=0;q<n;q++)V[q]=0,W[q]=0,X[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:W,attributeDivisors:X,object:P,attributes:{},index:null}}function _(P,V,W,X){const q=o.attributes,B=V.attributes;let D=0;const ie=W.getAttributes();for(const oe in ie)if(ie[oe].location>=0){const Pe=q[oe];let ge=B[oe];if(ge===void 0&&(oe==="instanceMatrix"&&P.instanceMatrix&&(ge=P.instanceMatrix),oe==="instanceColor"&&P.instanceColor&&(ge=P.instanceColor)),Pe===void 0||Pe.attribute!==ge||ge&&Pe.data!==ge.data)return!0;D++}return o.attributesNum!==D||o.index!==X}function M(P,V,W,X){const q={},B=V.attributes;let D=0;const ie=W.getAttributes();for(const oe in ie)if(ie[oe].location>=0){let Pe=B[oe];Pe===void 0&&(oe==="instanceMatrix"&&P.instanceMatrix&&(Pe=P.instanceMatrix),oe==="instanceColor"&&P.instanceColor&&(Pe=P.instanceColor));const ge={};ge.attribute=Pe,Pe&&Pe.data&&(ge.data=Pe.data),q[oe]=ge,D++}o.attributes=q,o.attributesNum=D,o.index=X}function x(){const P=o.newAttributes;for(let V=0,W=P.length;V<W;V++)P[V]=0}function f(P){p(P,0)}function p(P,V){const W=o.newAttributes,X=o.enabledAttributes,q=o.attributeDivisors;W[P]=1,X[P]===0&&(e.enableVertexAttribArray(P),X[P]=1),q[P]!==V&&(e.vertexAttribDivisor(P,V),q[P]=V)}function T(){const P=o.newAttributes,V=o.enabledAttributes;for(let W=0,X=V.length;W<X;W++)V[W]!==P[W]&&(e.disableVertexAttribArray(W),V[W]=0)}function A(P,V,W,X,q,B,D){D===!0?e.vertexAttribIPointer(P,V,W,q,B):e.vertexAttribPointer(P,V,W,X,q,B)}function R(P,V,W,X){x();const q=X.attributes,B=W.getAttributes(),D=V.defaultAttributeValues;for(const ie in B){const oe=B[ie];if(oe.location>=0){let de=q[ie];if(de===void 0&&(ie==="instanceMatrix"&&P.instanceMatrix&&(de=P.instanceMatrix),ie==="instanceColor"&&P.instanceColor&&(de=P.instanceColor)),de!==void 0){const Pe=de.normalized,ge=de.itemSize,Ve=t.get(de);if(Ve===void 0)continue;const ue=Ve.buffer,pe=Ve.type,O=Ve.bytesPerElement,$=pe===e.INT||pe===e.UNSIGNED_INT||de.gpuType===fs;if(de.isInterleavedBufferAttribute){const J=de.data,ye=J.stride,Ae=de.offset;if(J.isInstancedInterleavedBuffer){for(let Le=0;Le<oe.locationSize;Le++)p(oe.location+Le,J.meshPerAttribute);P.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Le=0;Le<oe.locationSize;Le++)f(oe.location+Le);e.bindBuffer(e.ARRAY_BUFFER,ue);for(let Le=0;Le<oe.locationSize;Le++)A(oe.location+Le,ge/oe.locationSize,pe,Pe,ye*O,(Ae+ge/oe.locationSize*Le)*O,$)}else{if(de.isInstancedBufferAttribute){for(let J=0;J<oe.locationSize;J++)p(oe.location+J,de.meshPerAttribute);P.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let J=0;J<oe.locationSize;J++)f(oe.location+J);e.bindBuffer(e.ARRAY_BUFFER,ue);for(let J=0;J<oe.locationSize;J++)A(oe.location+J,ge/oe.locationSize,pe,Pe,ge*O,ge/oe.locationSize*J*O,$)}}else if(D!==void 0){const Pe=D[ie];if(Pe!==void 0)switch(Pe.length){case 2:e.vertexAttrib2fv(oe.location,Pe);break;case 3:e.vertexAttrib3fv(oe.location,Pe);break;case 4:e.vertexAttrib4fv(oe.location,Pe);break;default:e.vertexAttrib1fv(oe.location,Pe)}}}}T()}function C(){E();for(const P in i){const V=i[P];for(const W in V){const X=V[W];for(const q in X){const B=X[q];for(const D in B)h(B[D].object),delete B[D];delete X[q]}}delete i[P]}}function b(P){if(i[P.id]===void 0)return;const V=i[P.id];for(const W in V){const X=V[W];for(const q in X){const B=X[q];for(const D in B)h(B[D].object),delete B[D];delete X[q]}}delete i[P.id]}function y(P){for(const V in i){const W=i[V];for(const X in W){const q=W[X];if(q[P.id]===void 0)continue;const B=q[P.id];for(const D in B)h(B[D].object),delete B[D];delete q[P.id]}}}function v(P){for(const V in i){const W=i[V],X=P.isInstancedMesh===!0?P.id:0,q=W[X];if(q!==void 0){for(const B in q){const D=q[B];for(const ie in D)h(D[ie].object),delete D[ie];delete q[B]}delete W[X],Object.keys(W).length===0&&delete i[V]}}}function E(){z(),a=!0,o!==r&&(o=r,c(o.object))}function z(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:s,reset:E,resetDefaultState:z,dispose:C,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:y,initAttributes:x,enableAttribute:f,disableUnusedAttributes:T}}function Nf(e,t,n){let i;function r(c){i=c}function o(c,h){e.drawArrays(i,c,h),n.update(h,i,1)}function a(c,h,d){d!==0&&(e.drawArraysInstanced(i,c,h,d),n.update(h,i,d))}function s(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let _=0;for(let M=0;M<d;M++)_+=h[M];n.update(_,i,1)}function l(c,h,d,u){if(d===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let M=0;M<c.length;M++)a(c[M],h[M],u[M]);else{_.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let M=0;for(let x=0;x<d;x++)M+=h[x]*u[x];n.update(M,i,1)}}this.setMode=r,this.render=o,this.renderInstances=a,this.renderMultiDraw=s,this.renderMultiDrawInstances=l}function Df(e,t,n,i){let r;function o(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const y=t.get("EXT_texture_filter_anisotropic");r=e.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(y){return!(y!==Yt&&i.convert(y)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(y){const v=y===an&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(y!==Ht&&i.convert(y)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&y!==nn&&!v)}function l(y){if(y==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(tt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),_=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),M=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_TEXTURE_SIZE),f=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),T=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),A=e.getParameter(e.MAX_VARYING_VECTORS),R=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),C=e.getParameter(e.MAX_SAMPLES),b=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:s,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:_,maxVertexTextures:M,maxTextureSize:x,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:T,maxVaryings:A,maxFragmentUniforms:R,maxSamples:C,samples:b}}function Of(e){const t=this;let n=null,i=0,r=!1,o=!1;const a=new Bl,s=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const _=d.length!==0||u||i!==0||r;return r=u,i=d.length,_},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,u){n=h(d,u,0)},this.setState=function(d,u,_){const M=d.clippingPlanes,x=d.clipIntersection,f=d.clipShadows,p=e.get(d);if(!r||M===null||M.length===0||o&&!f)o?h(null):c();else{const T=o?0:i,A=T*4;let R=p.clippingState||null;l.value=R,R=h(M,u,A,_);for(let C=0;C!==A;++C)R[C]=n[C];p.clippingState=R,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,_,M){const x=d!==null?d.length:0;let f=null;if(x!==0){if(f=l.value,M!==!0||f===null){const p=_+x*4,T=u.matrixWorldInverse;s.getNormalMatrix(T),(f===null||f.length<p)&&(f=new Float32Array(p));for(let A=0,R=_;A!==x;++A,R+=4)a.copy(d[A]).applyMatrix4(T,s),a.normal.toArray(f,R),f[R+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,f}}const on=4,zo=[.125,.215,.35,.446,.526,.582],mn=20,Ff=256,zn=new Hr,Xo=new Fe;let ar=null,sr=0,lr=0,cr=!1;const Bf=new j;class Yo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,r=100,o={}){const{size:a=256,position:s=Bf}=o;ar=this._renderer.getRenderTarget(),sr=this._renderer.getActiveCubeFace(),lr=this._renderer.getActiveMipmapLevel(),cr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,r,l,s),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ko(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ar,sr,lr),this._renderer.xr.enabled=cr,t.scissorTest=!1,Tn(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===ai||t.mapping===On?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ar=this._renderer.getRenderTarget(),sr=this._renderer.getActiveCubeFace(),lr=this._renderer.getActiveMipmapLevel(),cr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Mt,minFilter:Mt,generateMipmaps:!1,type:an,format:Yt,colorSpace:At,depthBuffer:!1},r=qo(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qo(t,n,i);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Vf(o)),this._blurMaterial=Gf(o,t,n),this._ggxMaterial=Hf(o,t,n)}return r}_compileMaterial(t){const n=new bt(new Tt,t);this._renderer.compile(n,zn)}_sceneToCubeUV(t,n,i,r,o){const l=new yn(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,_=d.toneMapping;d.getClearColor(Xo),d.toneMapping=Gt,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new bt(new Wr,new rn({name:"PMREM.Background",side:Et,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,f=x.material;let p=!1;const T=t.background;T?T.isColor&&(f.color.copy(T),t.background=null,p=!0):(f.color.copy(Xo),p=!0);for(let A=0;A<6;A++){const R=A%3;R===0?(l.up.set(0,c[A],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+h[A],o.y,o.z)):R===1?(l.up.set(0,0,c[A]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+h[A],o.z)):(l.up.set(0,c[A],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+h[A]));const C=this._cubeSize;Tn(r,R*C,A>2?C:0,C,C),d.setRenderTarget(r),p&&d.render(x,l),d.render(t,l)}d.toneMapping=_,d.autoClear=u,t.background=T}_textureToCubeUV(t,n){const i=this._renderer,r=t.mapping===ai||t.mapping===On;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=jo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ko());const o=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=o;const s=o.uniforms;s.envMap.value=t;const l=this._cubeSize;Tn(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,zn)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(t,o-1,o);n.autoClear=i}_applyGGXFilter(t,n,i){const r=this._renderer,o=this._pingPongRenderTarget,a=this._ggxMaterial,s=this._lodMeshes[i];s.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=0+c*1.25,_=d*u,{_lodMax:M}=this,x=this._sizeLods[i],f=3*x*(i>M-on?i-M+on:0),p=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=_,l.mipInt.value=M-n,Tn(o,f,p,3*x,2*x),r.setRenderTarget(o),r.render(s,zn),l.envMap.value=o.texture,l.roughness.value=0,l.mipInt.value=M-i,Tn(t,f,p,3*x,2*x),r.setRenderTarget(t),r.render(s,zn)}_blur(t,n,i,r,o){const a=this._pingPongRenderTarget;this._halfBlur(t,a,n,i,r,"latitudinal",o),this._halfBlur(a,t,i,i,r,"longitudinal",o)}_halfBlur(t,n,i,r,o,a,s){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&rt("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[r];d.material=c;const u=c.uniforms,_=this._sizeLods[i]-1,M=isFinite(o)?Math.PI/(2*_):2*Math.PI/(2*mn-1),x=o/M,f=isFinite(o)?1+Math.floor(h*x):mn;f>mn&&tt(`sigmaRadians, ${o}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${mn}`);const p=[];let T=0;for(let y=0;y<mn;++y){const v=y/x,E=Math.exp(-v*v/2);p.push(E),y===0?T+=E:y<f&&(T+=2*E)}for(let y=0;y<p.length;y++)p[y]=p[y]/T;u.envMap.value=t.texture,u.samples.value=f,u.weights.value=p,u.latitudinal.value=a==="latitudinal",s&&(u.poleAxis.value=s);const{_lodMax:A}=this;u.dTheta.value=M,u.mipInt.value=A-i;const R=this._sizeLods[r],C=3*R*(r>A-on?r-A+on:0),b=4*(this._cubeSize-R);Tn(n,C,b,3*R,2*R),l.setRenderTarget(n),l.render(d,zn)}}function Vf(e){const t=[],n=[],i=[];let r=e;const o=e-on+1+zo.length;for(let a=0;a<o;a++){const s=Math.pow(2,r);t.push(s);let l=1/s;a>e-on?l=zo[a-e+on-1]:a===0&&(l=0),n.push(l);const c=1/(s-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],_=6,M=6,x=3,f=2,p=1,T=new Float32Array(x*M*_),A=new Float32Array(f*M*_),R=new Float32Array(p*M*_);for(let b=0;b<_;b++){const y=b%3*2/3-1,v=b>2?0:-1,E=[y,v,0,y+2/3,v,0,y+2/3,v+1,0,y,v,0,y+2/3,v+1,0,y,v+1,0];T.set(E,x*M*b),A.set(u,f*M*b);const z=[b,b,b,b,b,b];R.set(z,p*M*b)}const C=new Tt;C.setAttribute("position",new at(T,x)),C.setAttribute("uv",new at(A,f)),C.setAttribute("faceIndex",new at(R,p)),i.push(new bt(C,null)),r>on&&r--}return{lodMeshes:i,sizeLods:t,sigmas:n}}function qo(e,t,n){const i=new kt(e,t,n);return i.texture.mapping=Hi,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Tn(e,t,n,i,r){e.viewport.set(t,n,i,r),e.scissor.set(t,n,i,r)}function Hf(e,t,n){return new Wt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ff,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wi(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Kt,depthTest:!1,depthWrite:!1})}function Gf(e,t,n){const i=new Float32Array(mn),r=new j(0,1,0);return new Wt({name:"SphericalGaussianBlur",defines:{n:mn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Wi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Kt,depthTest:!1,depthWrite:!1})}function Ko(){return new Wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Kt,depthTest:!1,depthWrite:!1})}function jo(){return new Wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kt,depthTest:!1,depthWrite:!1})}function Wi(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Is extends kt{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new gs(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Wr(5,5,5),o=new Wt({name:"CubemapFromEquirect",uniforms:wr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Et,blending:Kt});o.uniforms.tEquirect.value=n;const a=new bt(r,o),s=n.minFilter;return n.minFilter===tn&&(n.minFilter=Mt),new sc(1,10,this).update(t,a),n.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(t,n=!0,i=!0,r=!0){const o=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(n,i,r);t.setRenderTarget(o)}}function kf(e){let t=new WeakMap,n=new WeakMap,i=null;function r(u,_=!1){return u==null?null:_?a(u):o(u)}function o(u){if(u&&u.isTexture){const _=u.mapping;if(_===nr||_===ir)if(t.has(u)){const M=t.get(u).texture;return s(M,u.mapping)}else{const M=u.image;if(M&&M.height>0){const x=new Is(M.height);return x.fromEquirectangularTexture(e,u),t.set(u,x),u.addEventListener("dispose",c),s(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const _=u.mapping,M=_===nr||_===ir,x=_===ai||_===On;if(M||x){let f=n.get(u);const p=f!==void 0?f.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new Yo(e)),f=M?i.fromEquirectangular(u,f):i.fromCubemap(u,f),f.texture.pmremVersion=u.pmremVersion,n.set(u,f),f.texture;if(f!==void 0)return f.texture;{const T=u.image;return M&&T&&T.height>0||x&&T&&l(T)?(i===null&&(i=new Yo(e)),f=M?i.fromEquirectangular(u):i.fromCubemap(u),f.texture.pmremVersion=u.pmremVersion,n.set(u,f),u.addEventListener("dispose",h),f.texture):null}}}return u}function s(u,_){return _===nr?u.mapping=ai:_===ir&&(u.mapping=On),u}function l(u){let _=0;const M=6;for(let x=0;x<M;x++)u[x]!==void 0&&_++;return _===M}function c(u){const _=u.target;_.removeEventListener("dispose",c);const M=t.get(_);M!==void 0&&(t.delete(_),M.dispose())}function h(u){const _=u.target;_.removeEventListener("dispose",h);const M=n.get(_);M!==void 0&&(n.delete(_),M.dispose())}function d(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function Wf(e){const t={};function n(i){if(t[i]!==void 0)return t[i];const r=e.getExtension(i);return t[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ns("WebGLRenderer: "+i+" extension not supported."),r}}}function zf(e,t,n,i){const r={},o=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const M in u.attributes)t.remove(u.attributes[M]);u.removeEventListener("dispose",a),delete r[u.id];const _=o.get(u);_&&(t.remove(_),o.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function s(d,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,n.memory.geometries++),u}function l(d){const u=d.attributes;for(const _ in u)t.update(u[_],e.ARRAY_BUFFER)}function c(d){const u=[],_=d.index,M=d.attributes.position;let x=0;if(M===void 0)return;if(_!==null){const T=_.array;x=_.version;for(let A=0,R=T.length;A<R;A+=3){const C=T[A+0],b=T[A+1],y=T[A+2];u.push(C,b,b,y,y,C)}}else{const T=M.array;x=M.version;for(let A=0,R=T.length/3-1;A<R;A+=3){const C=A+0,b=A+1,y=A+2;u.push(C,b,b,y,y,C)}}const f=new(M.count>=65535?lc:cc)(u,1);f.version=x;const p=o.get(d);p&&t.remove(p),o.set(d,f)}function h(d){const u=o.get(d);if(u){const _=d.index;_!==null&&u.version<_.version&&c(d)}else c(d);return o.get(d)}return{get:s,update:l,getWireframeAttribute:h}}function Xf(e,t,n){let i;function r(u){i=u}let o,a;function s(u){o=u.type,a=u.bytesPerElement}function l(u,_){e.drawElements(i,_,o,u*a),n.update(_,i,1)}function c(u,_,M){M!==0&&(e.drawElementsInstanced(i,_,o,u*a,M),n.update(_,i,M))}function h(u,_,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,_,0,o,u,0,M);let f=0;for(let p=0;p<M;p++)f+=_[p];n.update(f,i,1)}function d(u,_,M,x){if(M===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<u.length;p++)c(u[p]/a,_[p],x[p]);else{f.multiDrawElementsInstancedWEBGL(i,_,0,o,u,0,x,0,M);let p=0;for(let T=0;T<M;T++)p+=_[T]*x[T];n.update(p,i,1)}}this.setMode=r,this.setIndex=s,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Yf(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,a,s){switch(n.calls++,a){case e.TRIANGLES:n.triangles+=s*(o/3);break;case e.LINES:n.lines+=s*(o/2);break;case e.LINE_STRIP:n.lines+=s*(o-1);break;case e.LINE_LOOP:n.lines+=s*o;break;case e.POINTS:n.points+=s*o;break;default:rt("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:r,update:i}}function qf(e,t,n){const i=new WeakMap,r=new St;function o(a,s,l){const c=a.morphTargetInfluences,h=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(s);if(u===void 0||u.count!==d){let E=function(){y.dispose(),i.delete(s),s.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();const _=s.morphAttributes.position!==void 0,M=s.morphAttributes.normal!==void 0,x=s.morphAttributes.color!==void 0,f=s.morphAttributes.position||[],p=s.morphAttributes.normal||[],T=s.morphAttributes.color||[];let A=0;_===!0&&(A=1),M===!0&&(A=2),x===!0&&(A=3);let R=s.attributes.position.count*A,C=1;R>t.maxTextureSize&&(C=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const b=new Float32Array(R*C*4*d),y=new hs(b,R,C,d);y.type=nn,y.needsUpdate=!0;const v=A*4;for(let z=0;z<d;z++){const P=f[z],V=p[z],W=T[z],X=R*C*4*z;for(let q=0;q<P.count;q++){const B=q*v;_===!0&&(r.fromBufferAttribute(P,q),b[X+B+0]=r.x,b[X+B+1]=r.y,b[X+B+2]=r.z,b[X+B+3]=0),M===!0&&(r.fromBufferAttribute(V,q),b[X+B+4]=r.x,b[X+B+5]=r.y,b[X+B+6]=r.z,b[X+B+7]=0),x===!0&&(r.fromBufferAttribute(W,q),b[X+B+8]=r.x,b[X+B+9]=r.y,b[X+B+10]=r.z,b[X+B+11]=W.itemSize===4?r.w:1)}}u={count:d,texture:y,size:new dt(R,C)},i.set(s,u),s.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",a.morphTexture,n);else{let _=0;for(let x=0;x<c.length;x++)_+=c[x];const M=s.morphTargetsRelative?1:1-_;l.getUniforms().setValue(e,"morphTargetBaseInfluence",M),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:o}}function Kf(e,t,n,i,r){let o=new WeakMap;function a(c){const h=r.render.frame,d=c.geometry,u=t.get(c,d);if(o.get(u)!==h&&(t.update(u),o.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),o.get(c)!==h&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),o.set(c,h))),c.isSkinnedMesh){const _=c.skeleton;o.get(_)!==h&&(_.update(),o.set(_,h))}return u}function s(){o=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:a,dispose:s}}const jf={[Rs]:"LINEAR_TONE_MAPPING",[Ts]:"REINHARD_TONE_MAPPING",[Es]:"CINEON_TONE_MAPPING",[Ss]:"ACES_FILMIC_TONE_MAPPING",[xs]:"AGX_TONE_MAPPING",[Ms]:"NEUTRAL_TONE_MAPPING",[vs]:"CUSTOM_TONE_MAPPING"};function $f(e,t,n,i,r){const o=new kt(t,n,{type:e,depthBuffer:i,stencilBuffer:r}),a=new kt(t,n,{type:an,depthBuffer:!1,stencilBuffer:!1}),s=new Tt;s.setAttribute("position",new Jr([-1,3,0,-1,-1,0,3,-1,0],3)),s.setAttribute("uv",new Jr([0,2,0,0,2,0],2));const l=new ul({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new bt(s,l),h=new Hr(-1,1,1,-1,0,1);let d=null,u=null,_=!1,M,x=null,f=[],p=!1;this.setSize=function(T,A){o.setSize(T,A),a.setSize(T,A);for(let R=0;R<f.length;R++){const C=f[R];C.setSize&&C.setSize(T,A)}},this.setEffects=function(T){f=T,p=f.length>0&&f[0].isRenderPass===!0;const A=o.width,R=o.height;for(let C=0;C<f.length;C++){const b=f[C];b.setSize&&b.setSize(A,R)}},this.begin=function(T,A){if(_||T.toneMapping===Gt&&f.length===0)return!1;if(x=A,A!==null){const R=A.width,C=A.height;(o.width!==R||o.height!==C)&&this.setSize(R,C)}return p===!1&&T.setRenderTarget(o),M=T.toneMapping,T.toneMapping=Gt,!0},this.hasRenderPass=function(){return p},this.end=function(T,A){T.toneMapping=M,_=!0;let R=o,C=a;for(let b=0;b<f.length;b++){const y=f[b];if(y.enabled!==!1&&(y.render(T,C,R,A),y.needsSwap!==!1)){const v=R;R=C,C=v}}if(d!==T.outputColorSpace||u!==T.toneMapping){d=T.outputColorSpace,u=T.toneMapping,l.defines={},st.getTransfer(d)===it&&(l.defines.SRGB_TRANSFER="");const b=jf[u];b&&(l.defines[b]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=R.texture,T.setRenderTarget(x),T.render(c,h),x=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a.dispose(),s.dispose(),l.dispose()}}const Us=new Pr,Lr=new Ii(1,1),Ns=new hs,Ds=new dc,Os=new gs,$o=[],Zo=[],Qo=new Float32Array(16),Jo=new Float32Array(9),ea=new Float32Array(4);function Bn(e,t,n){const i=e[0];if(i<=0||i>0)return e;const r=t*n;let o=$o[r];if(o===void 0&&(o=new Float32Array(r),$o[r]=o),t!==0){i.toArray(o,0);for(let a=1,s=0;a!==t;++a)s+=n,e[a].toArray(o,s)}return o}function pt(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function mt(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function zi(e,t){let n=Zo[t];n===void 0&&(n=new Int32Array(t),Zo[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function Zf(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Qf(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(pt(n,t))return;e.uniform2fv(this.addr,t),mt(n,t)}}function Jf(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(pt(n,t))return;e.uniform3fv(this.addr,t),mt(n,t)}}function eh(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(pt(n,t))return;e.uniform4fv(this.addr,t),mt(n,t)}}function th(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(pt(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),mt(n,t)}else{if(pt(n,i))return;ea.set(i),e.uniformMatrix2fv(this.addr,!1,ea),mt(n,i)}}function nh(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(pt(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),mt(n,t)}else{if(pt(n,i))return;Jo.set(i),e.uniformMatrix3fv(this.addr,!1,Jo),mt(n,i)}}function ih(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(pt(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),mt(n,t)}else{if(pt(n,i))return;Qo.set(i),e.uniformMatrix4fv(this.addr,!1,Qo),mt(n,i)}}function rh(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function oh(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(pt(n,t))return;e.uniform2iv(this.addr,t),mt(n,t)}}function ah(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(pt(n,t))return;e.uniform3iv(this.addr,t),mt(n,t)}}function sh(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(pt(n,t))return;e.uniform4iv(this.addr,t),mt(n,t)}}function lh(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function ch(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(pt(n,t))return;e.uniform2uiv(this.addr,t),mt(n,t)}}function uh(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(pt(n,t))return;e.uniform3uiv(this.addr,t),mt(n,t)}}function dh(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(pt(n,t))return;e.uniform4uiv(this.addr,t),mt(n,t)}}function fh(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r);let o;this.type===e.SAMPLER_2D_SHADOW?(Lr.compareFunction=n.isReversedDepthBuffer()?Gr:kr,o=Lr):o=Us,n.setTexture2D(t||o,r)}function hh(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(t||Ds,r)}function ph(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(t||Os,r)}function mh(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(t||Ns,r)}function _h(e){switch(e){case 5126:return Zf;case 35664:return Qf;case 35665:return Jf;case 35666:return eh;case 35674:return th;case 35675:return nh;case 35676:return ih;case 5124:case 35670:return rh;case 35667:case 35671:return oh;case 35668:case 35672:return ah;case 35669:case 35673:return sh;case 5125:return lh;case 36294:return ch;case 36295:return uh;case 36296:return dh;case 35678:case 36198:case 36298:case 36306:case 35682:return fh;case 35679:case 36299:case 36307:return hh;case 35680:case 36300:case 36308:case 36293:return ph;case 36289:case 36303:case 36311:case 36292:return mh}}function gh(e,t){e.uniform1fv(this.addr,t)}function vh(e,t){const n=Bn(t,this.size,2);e.uniform2fv(this.addr,n)}function Mh(e,t){const n=Bn(t,this.size,3);e.uniform3fv(this.addr,n)}function xh(e,t){const n=Bn(t,this.size,4);e.uniform4fv(this.addr,n)}function Sh(e,t){const n=Bn(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Eh(e,t){const n=Bn(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Th(e,t){const n=Bn(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Rh(e,t){e.uniform1iv(this.addr,t)}function Ah(e,t){e.uniform2iv(this.addr,t)}function bh(e,t){e.uniform3iv(this.addr,t)}function wh(e,t){e.uniform4iv(this.addr,t)}function Ph(e,t){e.uniform1uiv(this.addr,t)}function Ch(e,t){e.uniform2uiv(this.addr,t)}function Lh(e,t){e.uniform3uiv(this.addr,t)}function yh(e,t){e.uniform4uiv(this.addr,t)}function Ih(e,t,n){const i=this.cache,r=t.length,o=zi(n,r);pt(i,o)||(e.uniform1iv(this.addr,o),mt(i,o));let a;this.type===e.SAMPLER_2D_SHADOW?a=Lr:a=Us;for(let s=0;s!==r;++s)n.setTexture2D(t[s]||a,o[s])}function Uh(e,t,n){const i=this.cache,r=t.length,o=zi(n,r);pt(i,o)||(e.uniform1iv(this.addr,o),mt(i,o));for(let a=0;a!==r;++a)n.setTexture3D(t[a]||Ds,o[a])}function Nh(e,t,n){const i=this.cache,r=t.length,o=zi(n,r);pt(i,o)||(e.uniform1iv(this.addr,o),mt(i,o));for(let a=0;a!==r;++a)n.setTextureCube(t[a]||Os,o[a])}function Dh(e,t,n){const i=this.cache,r=t.length,o=zi(n,r);pt(i,o)||(e.uniform1iv(this.addr,o),mt(i,o));for(let a=0;a!==r;++a)n.setTexture2DArray(t[a]||Ns,o[a])}function Oh(e){switch(e){case 5126:return gh;case 35664:return vh;case 35665:return Mh;case 35666:return xh;case 35674:return Sh;case 35675:return Eh;case 35676:return Th;case 5124:case 35670:return Rh;case 35667:case 35671:return Ah;case 35668:case 35672:return bh;case 35669:case 35673:return wh;case 5125:return Ph;case 36294:return Ch;case 36295:return Lh;case 36296:return yh;case 35678:case 36198:case 36298:case 36306:case 35682:return Ih;case 35679:case 36299:case 36307:return Uh;case 35680:case 36300:case 36308:case 36293:return Nh;case 36289:case 36303:case 36311:case 36292:return Dh}}class Fh{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=_h(n.type)}}class Bh{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Oh(n.type)}}class Vh{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const r=this.seq;for(let o=0,a=r.length;o!==a;++o){const s=r[o];s.setValue(t,n[s.id],i)}}}const ur=/(\w+)(\])?(\[|\.)?/g;function ta(e,t){e.seq.push(t),e.map[t.id]=t}function Hh(e,t,n){const i=e.name,r=i.length;for(ur.lastIndex=0;;){const o=ur.exec(i),a=ur.lastIndex;let s=o[1];const l=o[2]==="]",c=o[3];if(l&&(s=s|0),c===void 0||c==="["&&a+2===r){ta(n,c===void 0?new Fh(s,e,t):new Bh(s,e,t));break}else{let d=n.map[s];d===void 0&&(d=new Vh(s),ta(n,d)),n=d}}}class Pi{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const s=t.getActiveUniform(n,a),l=t.getUniformLocation(n,s.name);Hh(s,l,this)}const r=[],o=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(a):o.push(a);r.length>0&&(this.seq=r.concat(o))}setValue(t,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(t,i,r)}setOptional(t,n,i){const r=n[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,n,i,r){for(let o=0,a=n.length;o!==a;++o){const s=n[o],l=i[s.id];l.needsUpdate!==!1&&s.setValue(t,l.value,r)}}static seqWithValue(t,n){const i=[];for(let r=0,o=t.length;r!==o;++r){const a=t[r];a.id in n&&i.push(a)}return i}}function na(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const Gh=37297;let kh=0;function Wh(e,t){const n=e.split(`
`),i=[],r=Math.max(t-6,0),o=Math.min(t+6,n.length);for(let a=r;a<o;a++){const s=a+1;i.push(`${s===t?">":" "} ${s}: ${n[a]}`)}return i.join(`
`)}const ia=new Oe;function zh(e){st._getMatrix(ia,st.workingColorSpace,e);const t=`mat3( ${ia.elements.map(n=>n.toFixed(4))} )`;switch(st.getTransfer(e)){case As:return[t,"LinearTransferOETF"];case it:return[t,"sRGBTransferOETF"];default:return tt("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function ra(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),o=(e.getShaderInfoLog(t)||"").trim();if(i&&o==="")return"";const a=/ERROR: 0:(\d+)/.exec(o);if(a){const s=parseInt(a[1]);return n.toUpperCase()+`

`+o+`

`+Wh(e.getShaderSource(t),s)}else return o}function Xh(e,t){const n=zh(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const Yh={[Rs]:"Linear",[Ts]:"Reinhard",[Es]:"Cineon",[Ss]:"ACESFilmic",[xs]:"AgX",[Ms]:"Neutral",[vs]:"Custom"};function qh(e,t){const n=Yh[t];return n===void 0?(tt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const vi=new j;function Kh(){st.getLuminanceCoefficients(vi);const e=vi.x.toFixed(4),t=vi.y.toFixed(4),n=vi.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jh(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ei).join(`
`)}function $h(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function Zh(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=e.getActiveAttrib(t,r),a=o.name;let s=1;o.type===e.FLOAT_MAT2&&(s=2),o.type===e.FLOAT_MAT3&&(s=3),o.type===e.FLOAT_MAT4&&(s=4),n[a]={type:o.type,location:e.getAttribLocation(t,a),locationSize:s}}return n}function ei(e){return e!==""}function oa(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function aa(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Qh=/^[ \t]*#include +<([\w\d./]+)>/gm;function yr(e){return e.replace(Qh,ep)}const Jh=new Map;function ep(e,t){let n=Ge[t];if(n===void 0){const i=Jh.get(t);if(i!==void 0)n=Ge[i],tt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return yr(n)}const tp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sa(e){return e.replace(tp,np)}function np(e,t,n,i){let r="";for(let o=parseInt(t);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function la(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const ip={[Ri]:"SHADOWMAP_TYPE_PCF",[Jn]:"SHADOWMAP_TYPE_VSM"};function rp(e){return ip[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const op={[ai]:"ENVMAP_TYPE_CUBE",[On]:"ENVMAP_TYPE_CUBE",[Hi]:"ENVMAP_TYPE_CUBE_UV"};function ap(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":op[e.envMapMode]||"ENVMAP_TYPE_CUBE"}const sp={[On]:"ENVMAP_MODE_REFRACTION"};function lp(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":sp[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}const cp={[mc]:"ENVMAP_BLENDING_MULTIPLY",[pc]:"ENVMAP_BLENDING_MIX",[hc]:"ENVMAP_BLENDING_ADD"};function up(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":cp[e.combine]||"ENVMAP_BLENDING_NONE"}function dp(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function fp(e,t,n,i){const r=e.getContext(),o=n.defines;let a=n.vertexShader,s=n.fragmentShader;const l=rp(n),c=ap(n),h=lp(n),d=up(n),u=dp(n),_=jh(n),M=$h(o),x=r.createProgram();let f,p,T=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(ei).join(`
`),f.length>0&&(f+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(ei).join(`
`),p.length>0&&(p+=`
`)):(f=[la(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ei).join(`
`),p=[la(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Gt?"#define TONE_MAPPING":"",n.toneMapping!==Gt?Ge.tonemapping_pars_fragment:"",n.toneMapping!==Gt?qh("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,Xh("linearToOutputTexel",n.outputColorSpace),Kh(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ei).join(`
`)),a=yr(a),a=oa(a,n),a=aa(a,n),s=yr(s),s=oa(s,n),s=aa(s,n),a=sa(a),s=sa(s),n.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,f=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,p=["#define varying in",n.glslVersion===Vo?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Vo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const A=T+f+a,R=T+p+s,C=na(r,r.VERTEX_SHADER,A),b=na(r,r.FRAGMENT_SHADER,R);r.attachShader(x,C),r.attachShader(x,b),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function y(P){if(e.debug.checkShaderErrors){const V=r.getProgramInfoLog(x)||"",W=r.getShaderInfoLog(C)||"",X=r.getShaderInfoLog(b)||"",q=V.trim(),B=W.trim(),D=X.trim();let ie=!0,oe=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(ie=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(r,x,C,b);else{const de=ra(r,C,"vertex"),Pe=ra(r,b,"fragment");rt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+q+`
`+de+`
`+Pe)}else q!==""?tt("WebGLProgram: Program Info Log:",q):(B===""||D==="")&&(oe=!1);oe&&(P.diagnostics={runnable:ie,programLog:q,vertexShader:{log:B,prefix:f},fragmentShader:{log:D,prefix:p}})}r.deleteShader(C),r.deleteShader(b),v=new Pi(r,x),E=Zh(r,x)}let v;this.getUniforms=function(){return v===void 0&&y(this),v};let E;this.getAttributes=function(){return E===void 0&&y(this),E};let z=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=r.getProgramParameter(x,Gh)),z},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=kh++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=b,this}let hp=0;class pp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new mp(t),n.set(t,i)),i}}class mp{constructor(t){this.id=hp++,this.code=t,this.usedTimes=0}}function _p(e,t,n,i,r,o){const a=new uc,s=new pp,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer;let u=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(v){return l.add(v),v===0?"uv":`uv${v}`}function x(v,E,z,P,V){const W=P.fog,X=V.geometry,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,B=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,D=t.get(v.envMap||q,B),ie=D&&D.mapping===Hi?D.image.height:null,oe=_[v.type];v.precision!==null&&(u=i.getMaxPrecision(v.precision),u!==v.precision&&tt("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const de=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Pe=de!==void 0?de.length:0;let ge=0;X.morphAttributes.position!==void 0&&(ge=1),X.morphAttributes.normal!==void 0&&(ge=2),X.morphAttributes.color!==void 0&&(ge=3);let Ve,ue,pe,O;if(oe){const je=Vt[oe];Ve=je.vertexShader,ue=je.fragmentShader}else Ve=v.vertexShader,ue=v.fragmentShader,s.update(v),pe=s.getVertexShaderID(v),O=s.getFragmentShaderID(v);const $=e.getRenderTarget(),J=e.state.buffers.depth.getReversed(),ye=V.isInstancedMesh===!0,Ae=V.isBatchedMesh===!0,Le=!!v.map,ot=!!v.matcap,Be=!!D,ze=!!v.aoMap,Ye=!!v.lightMap,Ce=!!v.bumpMap,nt=!!v.normalMap,w=!!v.displacementMap,Ze=!!v.emissiveMap,Ne=!!v.metalnessMap,He=!!v.roughnessMap,fe=v.anisotropy>0,S=v.clearcoat>0,m=v.dispersion>0,I=v.iridescence>0,Y=v.sheen>0,K=v.transmission>0,k=fe&&!!v.anisotropyMap,ve=S&&!!v.clearcoatMap,ee=S&&!!v.clearcoatNormalMap,Ee=S&&!!v.clearcoatRoughnessMap,we=I&&!!v.iridescenceMap,Q=I&&!!v.iridescenceThicknessMap,te=Y&&!!v.sheenColorMap,me=Y&&!!v.sheenRoughnessMap,_e=!!v.specularMap,ae=!!v.specularColorMap,Ue=!!v.specularIntensityMap,L=K&&!!v.transmissionMap,re=K&&!!v.thicknessMap,ne=!!v.gradientMap,he=!!v.alphaMap,Z=v.alphaTest>0,G=!!v.alphaHash,Me=!!v.extensions;let Ie=Gt;v.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Ie=e.toneMapping);const $e={shaderID:oe,shaderType:v.type,shaderName:v.name,vertexShader:Ve,fragmentShader:ue,defines:v.defines,customVertexShaderID:pe,customFragmentShaderID:O,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Ae,batchingColor:Ae&&V._colorsTexture!==null,instancing:ye,instancingColor:ye&&V.instanceColor!==null,instancingMorph:ye&&V.morphTexture!==null,outputColorSpace:$===null?e.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:At,alphaToCoverage:!!v.alphaToCoverage,map:Le,matcap:ot,envMap:Be,envMapMode:Be&&D.mapping,envMapCubeUVHeight:ie,aoMap:ze,lightMap:Ye,bumpMap:Ce,normalMap:nt,displacementMap:w,emissiveMap:Ze,normalMapObjectSpace:nt&&v.normalMapType===ac,normalMapTangentSpace:nt&&v.normalMapType===ms,metalnessMap:Ne,roughnessMap:He,anisotropy:fe,anisotropyMap:k,clearcoat:S,clearcoatMap:ve,clearcoatNormalMap:ee,clearcoatRoughnessMap:Ee,dispersion:m,iridescence:I,iridescenceMap:we,iridescenceThicknessMap:Q,sheen:Y,sheenColorMap:te,sheenRoughnessMap:me,specularMap:_e,specularColorMap:ae,specularIntensityMap:Ue,transmission:K,transmissionMap:L,thicknessMap:re,gradientMap:ne,opaque:v.transparent===!1&&v.blending===Ai&&v.alphaToCoverage===!1,alphaMap:he,alphaTest:Z,alphaHash:G,combine:v.combine,mapUv:Le&&M(v.map.channel),aoMapUv:ze&&M(v.aoMap.channel),lightMapUv:Ye&&M(v.lightMap.channel),bumpMapUv:Ce&&M(v.bumpMap.channel),normalMapUv:nt&&M(v.normalMap.channel),displacementMapUv:w&&M(v.displacementMap.channel),emissiveMapUv:Ze&&M(v.emissiveMap.channel),metalnessMapUv:Ne&&M(v.metalnessMap.channel),roughnessMapUv:He&&M(v.roughnessMap.channel),anisotropyMapUv:k&&M(v.anisotropyMap.channel),clearcoatMapUv:ve&&M(v.clearcoatMap.channel),clearcoatNormalMapUv:ee&&M(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&M(v.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&M(v.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&M(v.iridescenceThicknessMap.channel),sheenColorMapUv:te&&M(v.sheenColorMap.channel),sheenRoughnessMapUv:me&&M(v.sheenRoughnessMap.channel),specularMapUv:_e&&M(v.specularMap.channel),specularColorMapUv:ae&&M(v.specularColorMap.channel),specularIntensityMapUv:Ue&&M(v.specularIntensityMap.channel),transmissionMapUv:L&&M(v.transmissionMap.channel),thicknessMapUv:re&&M(v.thicknessMap.channel),alphaMapUv:he&&M(v.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(nt||fe),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!X.attributes.uv&&(Le||he),fog:!!W,useFog:v.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||X.attributes.normal===void 0&&nt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:J,skinning:V.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Pe,morphTextureStride:ge,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:e.shadowMap.enabled&&z.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ie,decodeVideoTexture:Le&&v.map.isVideoTexture===!0&&st.getTransfer(v.map.colorSpace)===it,decodeVideoTextureEmissive:Ze&&v.emissiveMap.isVideoTexture===!0&&st.getTransfer(v.emissiveMap.colorSpace)===it,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ct,flipSided:v.side===Et,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Me&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&v.extensions.multiDraw===!0||Ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return $e.vertexUv1s=l.has(1),$e.vertexUv2s=l.has(2),$e.vertexUv3s=l.has(3),l.clear(),$e}function f(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const z in v.defines)E.push(z),E.push(v.defines[z]);return v.isRawShaderMaterial===!1&&(p(E,v),T(E,v),E.push(e.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function p(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function T(v,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),v.push(a.mask)}function A(v){const E=_[v.type];let z;if(E){const P=Vt[E];z=ps.clone(P.uniforms)}else z=v.uniforms;return z}function R(v,E){let z=h.get(E);return z!==void 0?++z.usedTimes:(z=new fp(e,E,v,r),c.push(z),h.set(E,z)),z}function C(v){if(--v.usedTimes===0){const E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function b(v){s.remove(v)}function y(){s.dispose()}return{getParameters:x,getProgramCacheKey:f,getUniforms:A,acquireProgram:R,releaseProgram:C,releaseShaderCache:b,programs:c,dispose:y}}function gp(){let e=new WeakMap;function t(a){return e.has(a)}function n(a){let s=e.get(a);return s===void 0&&(s={},e.set(a,s)),s}function i(a){e.delete(a)}function r(a,s,l){e.get(a)[s]=l}function o(){e=new WeakMap}return{has:t,get:n,remove:i,update:r,dispose:o}}function vp(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function ca(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function ua(){const e=[];let t=0;const n=[],i=[],r=[];function o(){t=0,n.length=0,i.length=0,r.length=0}function a(u){let _=0;return u.isInstancedMesh&&(_+=2),u.isSkinnedMesh&&(_+=1),_}function s(u,_,M,x,f,p){let T=e[t];return T===void 0?(T={id:u.id,object:u,geometry:_,material:M,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:f,group:p},e[t]=T):(T.id=u.id,T.object=u,T.geometry=_,T.material=M,T.materialVariant=a(u),T.groupOrder=x,T.renderOrder=u.renderOrder,T.z=f,T.group=p),t++,T}function l(u,_,M,x,f,p){const T=s(u,_,M,x,f,p);M.transmission>0?i.push(T):M.transparent===!0?r.push(T):n.push(T)}function c(u,_,M,x,f,p){const T=s(u,_,M,x,f,p);M.transmission>0?i.unshift(T):M.transparent===!0?r.unshift(T):n.unshift(T)}function h(u,_){n.length>1&&n.sort(u||vp),i.length>1&&i.sort(_||ca),r.length>1&&r.sort(_||ca)}function d(){for(let u=t,_=e.length;u<_;u++){const M=e[u];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:l,unshift:c,finish:d,sort:h}}function Mp(){let e=new WeakMap;function t(i,r){const o=e.get(i);let a;return o===void 0?(a=new ua,e.set(i,[a])):r>=o.length?(a=new ua,o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function xp(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new j,color:new Fe};break;case"SpotLight":n={position:new j,direction:new j,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":n={color:new Fe,position:new j,halfWidth:new j,halfHeight:new j};break}return e[t.id]=n,n}}}function Sp(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let Ep=0;function Tp(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function Rp(e){const t=new xp,n=Sp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new j);const r=new j,o=new ht,a=new ht;function s(c){let h=0,d=0,u=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let _=0,M=0,x=0,f=0,p=0,T=0,A=0,R=0,C=0,b=0,y=0;c.sort(Tp);for(let E=0,z=c.length;E<z;E++){const P=c[E],V=P.color,W=P.intensity,X=P.distance;let q=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===oi?q=P.shadow.map.texture:q=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=V.r*W,d+=V.g*W,u+=V.b*W;else if(P.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(P.sh.coefficients[B],W);y++}else if(P.isDirectionalLight){const B=t.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const D=P.shadow,ie=n.get(P);ie.shadowIntensity=D.intensity,ie.shadowBias=D.bias,ie.shadowNormalBias=D.normalBias,ie.shadowRadius=D.radius,ie.shadowMapSize=D.mapSize,i.directionalShadow[_]=ie,i.directionalShadowMap[_]=q,i.directionalShadowMatrix[_]=P.shadow.matrix,T++}i.directional[_]=B,_++}else if(P.isSpotLight){const B=t.get(P);B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(V).multiplyScalar(W),B.distance=X,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,i.spot[x]=B;const D=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,D.updateMatrices(P),P.castShadow&&b++),i.spotLightMatrix[x]=D.matrix,P.castShadow){const ie=n.get(P);ie.shadowIntensity=D.intensity,ie.shadowBias=D.bias,ie.shadowNormalBias=D.normalBias,ie.shadowRadius=D.radius,ie.shadowMapSize=D.mapSize,i.spotShadow[x]=ie,i.spotShadowMap[x]=q,R++}x++}else if(P.isRectAreaLight){const B=t.get(P);B.color.copy(V).multiplyScalar(W),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),i.rectArea[f]=B,f++}else if(P.isPointLight){const B=t.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),B.distance=P.distance,B.decay=P.decay,P.castShadow){const D=P.shadow,ie=n.get(P);ie.shadowIntensity=D.intensity,ie.shadowBias=D.bias,ie.shadowNormalBias=D.normalBias,ie.shadowRadius=D.radius,ie.shadowMapSize=D.mapSize,ie.shadowCameraNear=D.camera.near,ie.shadowCameraFar=D.camera.far,i.pointShadow[M]=ie,i.pointShadowMap[M]=q,i.pointShadowMatrix[M]=P.shadow.matrix,A++}i.point[M]=B,M++}else if(P.isHemisphereLight){const B=t.get(P);B.skyColor.copy(P.color).multiplyScalar(W),B.groundColor.copy(P.groundColor).multiplyScalar(W),i.hemi[p]=B,p++}}f>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const v=i.hash;(v.directionalLength!==_||v.pointLength!==M||v.spotLength!==x||v.rectAreaLength!==f||v.hemiLength!==p||v.numDirectionalShadows!==T||v.numPointShadows!==A||v.numSpotShadows!==R||v.numSpotMaps!==C||v.numLightProbes!==y)&&(i.directional.length=_,i.spot.length=x,i.rectArea.length=f,i.point.length=M,i.hemi.length=p,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=R+C-b,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=y,v.directionalLength=_,v.pointLength=M,v.spotLength=x,v.rectAreaLength=f,v.hemiLength=p,v.numDirectionalShadows=T,v.numPointShadows=A,v.numSpotShadows=R,v.numSpotMaps=C,v.numLightProbes=y,i.version=Ep++)}function l(c,h){let d=0,u=0,_=0,M=0,x=0;const f=h.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const A=c[p];if(A.isDirectionalLight){const R=i.directional[d];R.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(f),d++}else if(A.isSpotLight){const R=i.spot[_];R.position.setFromMatrixPosition(A.matrixWorld),R.position.applyMatrix4(f),R.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(f),_++}else if(A.isRectAreaLight){const R=i.rectArea[M];R.position.setFromMatrixPosition(A.matrixWorld),R.position.applyMatrix4(f),a.identity(),o.copy(A.matrixWorld),o.premultiply(f),a.extractRotation(o),R.halfWidth.set(A.width*.5,0,0),R.halfHeight.set(0,A.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),M++}else if(A.isPointLight){const R=i.point[u];R.position.setFromMatrixPosition(A.matrixWorld),R.position.applyMatrix4(f),u++}else if(A.isHemisphereLight){const R=i.hemi[x];R.direction.setFromMatrixPosition(A.matrixWorld),R.direction.transformDirection(f),x++}}}return{setup:s,setupView:l,state:i}}function da(e){const t=new Rp(e),n=[],i=[];function r(h){c.camera=h,n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function s(){t.setup(n)}function l(h){t.setupView(n,h)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:s,setupLightsView:l,pushLight:o,pushShadow:a}}function Ap(e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let s;return a===void 0?(s=new da(e),t.set(r,[s])):o>=a.length?(s=new da(e),a.push(s)):s=a[o],s}function i(){t=new WeakMap}return{get:n,dispose:i}}const bp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Pp=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],Cp=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],fa=new ht,Xn=new j,dr=new j;function Lp(e,t,n){let i=new ts;const r=new dt,o=new dt,a=new St,s=new Vl,l=new Hl,c={},h=n.maxTextureSize,d={[Nn]:Et,[Et]:Nn,[Ct]:Ct},u=new Wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:bp,fragmentShader:wp}),_=u.clone();_.defines.HORIZONTAL_PASS=1;const M=new Tt;M.setAttribute("position",new at(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new bt(M,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ri;let p=this.type;this.render=function(b,y,v){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||b.length===0)return;this.type===Gl&&(tt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ri);const E=e.getRenderTarget(),z=e.getActiveCubeFace(),P=e.getActiveMipmapLevel(),V=e.state;V.setBlending(Kt),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const W=p!==this.type;W&&y.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(q=>q.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,q=b.length;X<q;X++){const B=b[X],D=B.shadow;if(D===void 0){tt("WebGLShadowMap:",B,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const ie=D.getFrameExtents();r.multiply(ie),o.copy(D.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(o.x=Math.floor(h/ie.x),r.x=o.x*ie.x,D.mapSize.x=o.x),r.y>h&&(o.y=Math.floor(h/ie.y),r.y=o.y*ie.y,D.mapSize.y=o.y));const oe=e.state.buffers.depth.getReversed();if(D.camera._reversedDepth=oe,D.map===null||W===!0){if(D.map!==null&&(D.map.depthTexture!==null&&(D.map.depthTexture.dispose(),D.map.depthTexture=null),D.map.dispose()),this.type===Jn){if(B.isPointLight){tt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}D.map=new kt(r.x,r.y,{format:oi,type:an,minFilter:Mt,magFilter:Mt,generateMipmaps:!1}),D.map.texture.name=B.name+".shadowMap",D.map.depthTexture=new Ii(r.x,r.y,nn),D.map.depthTexture.name=B.name+".shadowMapDepth",D.map.depthTexture.format=Dn,D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=qt,D.map.depthTexture.magFilter=qt}else B.isPointLight?(D.map=new Is(r.x),D.map.depthTexture=new kl(r.x,gn)):(D.map=new kt(r.x,r.y),D.map.depthTexture=new Ii(r.x,r.y,gn)),D.map.depthTexture.name=B.name+".shadowMap",D.map.depthTexture.format=Dn,this.type===Ri?(D.map.depthTexture.compareFunction=oe?Gr:kr,D.map.depthTexture.minFilter=Mt,D.map.depthTexture.magFilter=Mt):(D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=qt,D.map.depthTexture.magFilter=qt);D.camera.updateProjectionMatrix()}const de=D.map.isWebGLCubeRenderTarget?6:1;for(let Pe=0;Pe<de;Pe++){if(D.map.isWebGLCubeRenderTarget)e.setRenderTarget(D.map,Pe),e.clear();else{Pe===0&&(e.setRenderTarget(D.map),e.clear());const ge=D.getViewport(Pe);a.set(o.x*ge.x,o.y*ge.y,o.x*ge.z,o.y*ge.w),V.viewport(a)}if(B.isPointLight){const ge=D.camera,Ve=D.matrix,ue=B.distance||ge.far;ue!==ge.far&&(ge.far=ue,ge.updateProjectionMatrix()),Xn.setFromMatrixPosition(B.matrixWorld),ge.position.copy(Xn),dr.copy(ge.position),dr.add(Pp[Pe]),ge.up.copy(Cp[Pe]),ge.lookAt(dr),ge.updateMatrixWorld(),Ve.makeTranslation(-Xn.x,-Xn.y,-Xn.z),fa.multiplyMatrices(ge.projectionMatrix,ge.matrixWorldInverse),D._frustum.setFromProjectionMatrix(fa,ge.coordinateSystem,ge.reversedDepth)}else D.updateMatrices(B);i=D.getFrustum(),R(y,v,D.camera,B,this.type)}D.isPointLightShadow!==!0&&this.type===Jn&&T(D,v),D.needsUpdate=!1}p=this.type,f.needsUpdate=!1,e.setRenderTarget(E,z,P)};function T(b,y){const v=t.update(x);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,_.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,_.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new kt(r.x,r.y,{format:oi,type:an})),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,e.setRenderTarget(b.mapPass),e.clear(),e.renderBufferDirect(y,null,v,u,x,null),_.uniforms.shadow_pass.value=b.mapPass.texture,_.uniforms.resolution.value=b.mapSize,_.uniforms.radius.value=b.radius,e.setRenderTarget(b.map),e.clear(),e.renderBufferDirect(y,null,v,_,x,null)}function A(b,y,v,E){let z=null;const P=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)z=P;else if(z=v.isPointLight===!0?l:s,e.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){const V=z.uuid,W=y.uuid;let X=c[V];X===void 0&&(X={},c[V]=X);let q=X[W];q===void 0&&(q=z.clone(),X[W]=q,y.addEventListener("dispose",C)),z=q}if(z.visible=y.visible,z.wireframe=y.wireframe,E===Jn?z.side=y.shadowSide!==null?y.shadowSide:y.side:z.side=y.shadowSide!==null?y.shadowSide:d[y.side],z.alphaMap=y.alphaMap,z.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,z.map=y.map,z.clipShadows=y.clipShadows,z.clippingPlanes=y.clippingPlanes,z.clipIntersection=y.clipIntersection,z.displacementMap=y.displacementMap,z.displacementScale=y.displacementScale,z.displacementBias=y.displacementBias,z.wireframeLinewidth=y.wireframeLinewidth,z.linewidth=y.linewidth,v.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const V=e.properties.get(z);V.light=v}return z}function R(b,y,v,E,z){if(b.visible===!1)return;if(b.layers.test(y.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&z===Jn)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);const W=t.update(b),X=b.material;if(Array.isArray(X)){const q=W.groups;for(let B=0,D=q.length;B<D;B++){const ie=q[B],oe=X[ie.materialIndex];if(oe&&oe.visible){const de=A(b,oe,E,z);b.onBeforeShadow(e,b,y,v,W,de,ie),e.renderBufferDirect(v,null,W,de,b,ie),b.onAfterShadow(e,b,y,v,W,de,ie)}}}else if(X.visible){const q=A(b,X,E,z);b.onBeforeShadow(e,b,y,v,W,q,null),e.renderBufferDirect(v,null,W,q,b,null),b.onAfterShadow(e,b,y,v,W,q,null)}}const V=b.children;for(let W=0,X=V.length;W<X;W++)R(V[W],y,v,E,z)}function C(b){b.target.removeEventListener("dispose",C);for(const v in c){const E=c[v],z=b.target.uuid;z in E&&(E[z].dispose(),delete E[z])}}}function yp(e,t){function n(){let L=!1;const re=new St;let ne=null;const he=new St(0,0,0,0);return{setMask:function(Z){ne!==Z&&!L&&(e.colorMask(Z,Z,Z,Z),ne=Z)},setLocked:function(Z){L=Z},setClear:function(Z,G,Me,Ie,$e){$e===!0&&(Z*=Ie,G*=Ie,Me*=Ie),re.set(Z,G,Me,Ie),he.equals(re)===!1&&(e.clearColor(Z,G,Me,Ie),he.copy(re))},reset:function(){L=!1,ne=null,he.set(-1,0,0,0)}}}function i(){let L=!1,re=!1,ne=null,he=null,Z=null;return{setReversed:function(G){if(re!==G){const Me=t.get("EXT_clip_control");G?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),re=G;const Ie=Z;Z=null,this.setClear(Ie)}},getReversed:function(){return re},setTest:function(G){G?$(e.DEPTH_TEST):J(e.DEPTH_TEST)},setMask:function(G){ne!==G&&!L&&(e.depthMask(G),ne=G)},setFunc:function(G){if(re&&(G=_c[G]),he!==G){switch(G){case nc:e.depthFunc(e.NEVER);break;case tc:e.depthFunc(e.ALWAYS);break;case ec:e.depthFunc(e.LESS);break;case eo:e.depthFunc(e.LEQUAL);break;case Jl:e.depthFunc(e.EQUAL);break;case Ql:e.depthFunc(e.GEQUAL);break;case Zl:e.depthFunc(e.GREATER);break;case $l:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}he=G}},setLocked:function(G){L=G},setClear:function(G){Z!==G&&(Z=G,re&&(G=1-G),e.clearDepth(G))},reset:function(){L=!1,ne=null,he=null,Z=null,re=!1}}}function r(){let L=!1,re=null,ne=null,he=null,Z=null,G=null,Me=null,Ie=null,$e=null;return{setTest:function(je){L||(je?$(e.STENCIL_TEST):J(e.STENCIL_TEST))},setMask:function(je){re!==je&&!L&&(e.stencilMask(je),re=je)},setFunc:function(je,Lt,yt){(ne!==je||he!==Lt||Z!==yt)&&(e.stencilFunc(je,Lt,yt),ne=je,he=Lt,Z=yt)},setOp:function(je,Lt,yt){(G!==je||Me!==Lt||Ie!==yt)&&(e.stencilOp(je,Lt,yt),G=je,Me=Lt,Ie=yt)},setLocked:function(je){L=je},setClear:function(je){$e!==je&&(e.clearStencil(je),$e=je)},reset:function(){L=!1,re=null,ne=null,he=null,Z=null,G=null,Me=null,Ie=null,$e=null}}}const o=new n,a=new i,s=new r,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,_=[],M=null,x=!1,f=null,p=null,T=null,A=null,R=null,C=null,b=null,y=new Fe(0,0,0),v=0,E=!1,z=null,P=null,V=null,W=null,X=null;const q=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,D=0;const ie=e.getParameter(e.VERSION);ie.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(ie)[1]),B=D>=1):ie.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),B=D>=2);let oe=null,de={};const Pe=e.getParameter(e.SCISSOR_BOX),ge=e.getParameter(e.VIEWPORT),Ve=new St().fromArray(Pe),ue=new St().fromArray(ge);function pe(L,re,ne,he){const Z=new Uint8Array(4),G=e.createTexture();e.bindTexture(L,G),e.texParameteri(L,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(L,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Me=0;Me<ne;Me++)L===e.TEXTURE_3D||L===e.TEXTURE_2D_ARRAY?e.texImage3D(re,0,e.RGBA,1,1,he,0,e.RGBA,e.UNSIGNED_BYTE,Z):e.texImage2D(re+Me,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Z);return G}const O={};O[e.TEXTURE_2D]=pe(e.TEXTURE_2D,e.TEXTURE_2D,1),O[e.TEXTURE_CUBE_MAP]=pe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),O[e.TEXTURE_2D_ARRAY]=pe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),O[e.TEXTURE_3D]=pe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),o.setClear(0,0,0,1),a.setClear(1),s.setClear(0),$(e.DEPTH_TEST),a.setFunc(eo),Ce(!1),nt(No),$(e.CULL_FACE),ze(Kt);function $(L){h[L]!==!0&&(e.enable(L),h[L]=!0)}function J(L){h[L]!==!1&&(e.disable(L),h[L]=!1)}function ye(L,re){return d[L]!==re?(e.bindFramebuffer(L,re),d[L]=re,L===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=re),L===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=re),!0):!1}function Ae(L,re){let ne=_,he=!1;if(L){ne=u.get(re),ne===void 0&&(ne=[],u.set(re,ne));const Z=L.textures;if(ne.length!==Z.length||ne[0]!==e.COLOR_ATTACHMENT0){for(let G=0,Me=Z.length;G<Me;G++)ne[G]=e.COLOR_ATTACHMENT0+G;ne.length=Z.length,he=!0}}else ne[0]!==e.BACK&&(ne[0]=e.BACK,he=!0);he&&e.drawBuffers(ne)}function Le(L){return M!==L?(e.useProgram(L),M=L,!0):!1}const ot={[Wn]:e.FUNC_ADD,[_l]:e.FUNC_SUBTRACT,[ml]:e.FUNC_REVERSE_SUBTRACT};ot[gc]=e.MIN,ot[vc]=e.MAX;const Be={[yl]:e.ZERO,[Ll]:e.ONE,[Cl]:e.SRC_COLOR,[Pl]:e.SRC_ALPHA,[wl]:e.SRC_ALPHA_SATURATE,[bl]:e.DST_COLOR,[Al]:e.DST_ALPHA,[Rl]:e.ONE_MINUS_SRC_COLOR,[Tl]:e.ONE_MINUS_SRC_ALPHA,[El]:e.ONE_MINUS_DST_COLOR,[Sl]:e.ONE_MINUS_DST_ALPHA,[xl]:e.CONSTANT_COLOR,[Ml]:e.ONE_MINUS_CONSTANT_COLOR,[vl]:e.CONSTANT_ALPHA,[gl]:e.ONE_MINUS_CONSTANT_ALPHA};function ze(L,re,ne,he,Z,G,Me,Ie,$e,je){if(L===Kt){x===!0&&(J(e.BLEND),x=!1);return}if(x===!1&&($(e.BLEND),x=!0),L!==oc){if(L!==f||je!==E){if((p!==Wn||R!==Wn)&&(e.blendEquation(e.FUNC_ADD),p=Wn,R=Wn),je)switch(L){case Ai:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Fo:e.blendFunc(e.ONE,e.ONE);break;case Oo:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Do:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:rt("WebGLState: Invalid blending: ",L);break}else switch(L){case Ai:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Fo:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Oo:rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Do:rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rt("WebGLState: Invalid blending: ",L);break}T=null,A=null,C=null,b=null,y.set(0,0,0),v=0,f=L,E=je}return}Z=Z||re,G=G||ne,Me=Me||he,(re!==p||Z!==R)&&(e.blendEquationSeparate(ot[re],ot[Z]),p=re,R=Z),(ne!==T||he!==A||G!==C||Me!==b)&&(e.blendFuncSeparate(Be[ne],Be[he],Be[G],Be[Me]),T=ne,A=he,C=G,b=Me),(Ie.equals(y)===!1||$e!==v)&&(e.blendColor(Ie.r,Ie.g,Ie.b,$e),y.copy(Ie),v=$e),f=L,E=!1}function Ye(L,re){L.side===Ct?J(e.CULL_FACE):$(e.CULL_FACE);let ne=L.side===Et;re&&(ne=!ne),Ce(ne),L.blending===Ai&&L.transparent===!1?ze(Kt):ze(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),o.setMask(L.colorWrite);const he=L.stencilWrite;s.setTest(he),he&&(s.setMask(L.stencilWriteMask),s.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),s.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ze(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?$(e.SAMPLE_ALPHA_TO_COVERAGE):J(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(L){z!==L&&(L?e.frontFace(e.CW):e.frontFace(e.CCW),z=L)}function nt(L){L!==ic?($(e.CULL_FACE),L!==P&&(L===No?e.cullFace(e.BACK):L===rc?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):J(e.CULL_FACE),P=L}function w(L){L!==V&&(B&&e.lineWidth(L),V=L)}function Ze(L,re,ne){L?($(e.POLYGON_OFFSET_FILL),(W!==re||X!==ne)&&(W=re,X=ne,a.getReversed()&&(re=-re),e.polygonOffset(re,ne))):J(e.POLYGON_OFFSET_FILL)}function Ne(L){L?$(e.SCISSOR_TEST):J(e.SCISSOR_TEST)}function He(L){L===void 0&&(L=e.TEXTURE0+q-1),oe!==L&&(e.activeTexture(L),oe=L)}function fe(L,re,ne){ne===void 0&&(oe===null?ne=e.TEXTURE0+q-1:ne=oe);let he=de[ne];he===void 0&&(he={type:void 0,texture:void 0},de[ne]=he),(he.type!==L||he.texture!==re)&&(oe!==ne&&(e.activeTexture(ne),oe=ne),e.bindTexture(L,re||O[L]),he.type=L,he.texture=re)}function S(){const L=de[oe];L!==void 0&&L.type!==void 0&&(e.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function m(){try{e.compressedTexImage2D(...arguments)}catch(L){rt("WebGLState:",L)}}function I(){try{e.compressedTexImage3D(...arguments)}catch(L){rt("WebGLState:",L)}}function Y(){try{e.texSubImage2D(...arguments)}catch(L){rt("WebGLState:",L)}}function K(){try{e.texSubImage3D(...arguments)}catch(L){rt("WebGLState:",L)}}function k(){try{e.compressedTexSubImage2D(...arguments)}catch(L){rt("WebGLState:",L)}}function ve(){try{e.compressedTexSubImage3D(...arguments)}catch(L){rt("WebGLState:",L)}}function ee(){try{e.texStorage2D(...arguments)}catch(L){rt("WebGLState:",L)}}function Ee(){try{e.texStorage3D(...arguments)}catch(L){rt("WebGLState:",L)}}function we(){try{e.texImage2D(...arguments)}catch(L){rt("WebGLState:",L)}}function Q(){try{e.texImage3D(...arguments)}catch(L){rt("WebGLState:",L)}}function te(L){Ve.equals(L)===!1&&(e.scissor(L.x,L.y,L.z,L.w),Ve.copy(L))}function me(L){ue.equals(L)===!1&&(e.viewport(L.x,L.y,L.z,L.w),ue.copy(L))}function _e(L,re){let ne=c.get(re);ne===void 0&&(ne=new WeakMap,c.set(re,ne));let he=ne.get(L);he===void 0&&(he=e.getUniformBlockIndex(re,L.name),ne.set(L,he))}function ae(L,re){const he=c.get(re).get(L);l.get(re)!==he&&(e.uniformBlockBinding(re,he,L.__bindingPointIndex),l.set(re,he))}function Ue(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),a.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),h={},oe=null,de={},d={},u=new WeakMap,_=[],M=null,x=!1,f=null,p=null,T=null,A=null,R=null,C=null,b=null,y=new Fe(0,0,0),v=0,E=!1,z=null,P=null,V=null,W=null,X=null,Ve.set(0,0,e.canvas.width,e.canvas.height),ue.set(0,0,e.canvas.width,e.canvas.height),o.reset(),a.reset(),s.reset()}return{buffers:{color:o,depth:a,stencil:s},enable:$,disable:J,bindFramebuffer:ye,drawBuffers:Ae,useProgram:Le,setBlending:ze,setMaterial:Ye,setFlipSided:Ce,setCullFace:nt,setLineWidth:w,setPolygonOffset:Ze,setScissorTest:Ne,activeTexture:He,bindTexture:fe,unbindTexture:S,compressedTexImage2D:m,compressedTexImage3D:I,texImage2D:we,texImage3D:Q,updateUBOMapping:_e,uniformBlockBinding:ae,texStorage2D:ee,texStorage3D:Ee,texSubImage2D:Y,texSubImage3D:K,compressedTexSubImage2D:k,compressedTexSubImage3D:ve,scissor:te,viewport:me,reset:Ue}}function Ip(e,t,n,i,r,o,a){const s=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new dt,h=new WeakMap;let d;const u=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(S,m){return _?new OffscreenCanvas(S,m):fc("canvas")}function x(S,m,I){let Y=1;const K=fe(S);if((K.width>I||K.height>I)&&(Y=I/Math.max(K.width,K.height)),Y<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const k=Math.floor(Y*K.width),ve=Math.floor(Y*K.height);d===void 0&&(d=M(k,ve));const ee=m?M(k,ve):d;return ee.width=k,ee.height=ve,ee.getContext("2d").drawImage(S,0,0,k,ve),tt("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+k+"x"+ve+")."),ee}else return"data"in S&&tt("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),S;return S}function f(S){return S.generateMipmaps}function p(S){e.generateMipmap(S)}function T(S){return S.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?e.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function A(S,m,I,Y,K=!1){if(S!==null){if(e[S]!==void 0)return e[S];tt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let k=m;if(m===e.RED&&(I===e.FLOAT&&(k=e.R32F),I===e.HALF_FLOAT&&(k=e.R16F),I===e.UNSIGNED_BYTE&&(k=e.R8)),m===e.RED_INTEGER&&(I===e.UNSIGNED_BYTE&&(k=e.R8UI),I===e.UNSIGNED_SHORT&&(k=e.R16UI),I===e.UNSIGNED_INT&&(k=e.R32UI),I===e.BYTE&&(k=e.R8I),I===e.SHORT&&(k=e.R16I),I===e.INT&&(k=e.R32I)),m===e.RG&&(I===e.FLOAT&&(k=e.RG32F),I===e.HALF_FLOAT&&(k=e.RG16F),I===e.UNSIGNED_BYTE&&(k=e.RG8)),m===e.RG_INTEGER&&(I===e.UNSIGNED_BYTE&&(k=e.RG8UI),I===e.UNSIGNED_SHORT&&(k=e.RG16UI),I===e.UNSIGNED_INT&&(k=e.RG32UI),I===e.BYTE&&(k=e.RG8I),I===e.SHORT&&(k=e.RG16I),I===e.INT&&(k=e.RG32I)),m===e.RGB_INTEGER&&(I===e.UNSIGNED_BYTE&&(k=e.RGB8UI),I===e.UNSIGNED_SHORT&&(k=e.RGB16UI),I===e.UNSIGNED_INT&&(k=e.RGB32UI),I===e.BYTE&&(k=e.RGB8I),I===e.SHORT&&(k=e.RGB16I),I===e.INT&&(k=e.RGB32I)),m===e.RGBA_INTEGER&&(I===e.UNSIGNED_BYTE&&(k=e.RGBA8UI),I===e.UNSIGNED_SHORT&&(k=e.RGBA16UI),I===e.UNSIGNED_INT&&(k=e.RGBA32UI),I===e.BYTE&&(k=e.RGBA8I),I===e.SHORT&&(k=e.RGBA16I),I===e.INT&&(k=e.RGBA32I)),m===e.RGB&&(I===e.UNSIGNED_INT_5_9_9_9_REV&&(k=e.RGB9_E5),I===e.UNSIGNED_INT_10F_11F_11F_REV&&(k=e.R11F_G11F_B10F)),m===e.RGBA){const ve=K?As:st.getTransfer(Y);I===e.FLOAT&&(k=e.RGBA32F),I===e.HALF_FLOAT&&(k=e.RGBA16F),I===e.UNSIGNED_BYTE&&(k=ve===it?e.SRGB8_ALPHA8:e.RGBA8),I===e.UNSIGNED_SHORT_4_4_4_4&&(k=e.RGBA4),I===e.UNSIGNED_SHORT_5_5_5_1&&(k=e.RGB5_A1)}return(k===e.R16F||k===e.R32F||k===e.RG16F||k===e.RG32F||k===e.RGBA16F||k===e.RGBA32F)&&t.get("EXT_color_buffer_float"),k}function R(S,m){let I;return S?m===null||m===gn||m===ri?I=e.DEPTH24_STENCIL8:m===nn?I=e.DEPTH32F_STENCIL8:m===Di&&(I=e.DEPTH24_STENCIL8,tt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===gn||m===ri?I=e.DEPTH_COMPONENT24:m===nn?I=e.DEPTH_COMPONENT32F:m===Di&&(I=e.DEPTH_COMPONENT16),I}function C(S,m){return f(S)===!0||S.isFramebufferTexture&&S.minFilter!==qt&&S.minFilter!==Mt?Math.log2(Math.max(m.width,m.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?m.mipmaps.length:1}function b(S){const m=S.target;m.removeEventListener("dispose",b),v(m),m.isVideoTexture&&h.delete(m)}function y(S){const m=S.target;m.removeEventListener("dispose",y),z(m)}function v(S){const m=i.get(S);if(m.__webglInit===void 0)return;const I=S.source,Y=u.get(I);if(Y){const K=Y[m.__cacheKey];K.usedTimes--,K.usedTimes===0&&E(S),Object.keys(Y).length===0&&u.delete(I)}i.remove(S)}function E(S){const m=i.get(S);e.deleteTexture(m.__webglTexture);const I=S.source,Y=u.get(I);delete Y[m.__cacheKey],a.memory.textures--}function z(S){const m=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(m.__webglFramebuffer[Y]))for(let K=0;K<m.__webglFramebuffer[Y].length;K++)e.deleteFramebuffer(m.__webglFramebuffer[Y][K]);else e.deleteFramebuffer(m.__webglFramebuffer[Y]);m.__webglDepthbuffer&&e.deleteRenderbuffer(m.__webglDepthbuffer[Y])}else{if(Array.isArray(m.__webglFramebuffer))for(let Y=0;Y<m.__webglFramebuffer.length;Y++)e.deleteFramebuffer(m.__webglFramebuffer[Y]);else e.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&e.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&e.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let Y=0;Y<m.__webglColorRenderbuffer.length;Y++)m.__webglColorRenderbuffer[Y]&&e.deleteRenderbuffer(m.__webglColorRenderbuffer[Y]);m.__webglDepthRenderbuffer&&e.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const I=S.textures;for(let Y=0,K=I.length;Y<K;Y++){const k=i.get(I[Y]);k.__webglTexture&&(e.deleteTexture(k.__webglTexture),a.memory.textures--),i.remove(I[Y])}i.remove(S)}let P=0;function V(){P=0}function W(){const S=P;return S>=r.maxTextures&&tt("WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),P+=1,S}function X(S){const m=[];return m.push(S.wrapS),m.push(S.wrapT),m.push(S.wrapR||0),m.push(S.magFilter),m.push(S.minFilter),m.push(S.anisotropy),m.push(S.internalFormat),m.push(S.format),m.push(S.type),m.push(S.generateMipmaps),m.push(S.premultiplyAlpha),m.push(S.flipY),m.push(S.unpackAlignment),m.push(S.colorSpace),m.join()}function q(S,m){const I=i.get(S);if(S.isVideoTexture&&Ne(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&I.__version!==S.version){const Y=S.image;if(Y===null)tt("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)tt("WebGLRenderer: Texture marked for update but image is incomplete");else{O(I,S,m);return}}else S.isExternalTexture&&(I.__webglTexture=S.sourceTexture?S.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,I.__webglTexture,e.TEXTURE0+m)}function B(S,m){const I=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&I.__version!==S.version){O(I,S,m);return}else S.isExternalTexture&&(I.__webglTexture=S.sourceTexture?S.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,I.__webglTexture,e.TEXTURE0+m)}function D(S,m){const I=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&I.__version!==S.version){O(I,S,m);return}n.bindTexture(e.TEXTURE_3D,I.__webglTexture,e.TEXTURE0+m)}function ie(S,m){const I=i.get(S);if(S.isCubeDepthTexture!==!0&&S.version>0&&I.__version!==S.version){$(I,S,m);return}n.bindTexture(e.TEXTURE_CUBE_MAP,I.__webglTexture,e.TEXTURE0+m)}const oe={[Ni]:e.REPEAT,[Ui]:e.CLAMP_TO_EDGE,[is]:e.MIRRORED_REPEAT},de={[qt]:e.NEAREST,[rs]:e.NEAREST_MIPMAP_NEAREST,[Qn]:e.NEAREST_MIPMAP_LINEAR,[Mt]:e.LINEAR,[Ti]:e.LINEAR_MIPMAP_NEAREST,[tn]:e.LINEAR_MIPMAP_LINEAR},Pe={[Fl]:e.NEVER,[Ol]:e.ALWAYS,[Dl]:e.LESS,[kr]:e.LEQUAL,[Nl]:e.EQUAL,[Gr]:e.GEQUAL,[Ul]:e.GREATER,[Il]:e.NOTEQUAL};function ge(S,m){if(m.type===nn&&t.has("OES_texture_float_linear")===!1&&(m.magFilter===Mt||m.magFilter===Ti||m.magFilter===Qn||m.magFilter===tn||m.minFilter===Mt||m.minFilter===Ti||m.minFilter===Qn||m.minFilter===tn)&&tt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(S,e.TEXTURE_WRAP_S,oe[m.wrapS]),e.texParameteri(S,e.TEXTURE_WRAP_T,oe[m.wrapT]),(S===e.TEXTURE_3D||S===e.TEXTURE_2D_ARRAY)&&e.texParameteri(S,e.TEXTURE_WRAP_R,oe[m.wrapR]),e.texParameteri(S,e.TEXTURE_MAG_FILTER,de[m.magFilter]),e.texParameteri(S,e.TEXTURE_MIN_FILTER,de[m.minFilter]),m.compareFunction&&(e.texParameteri(S,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(S,e.TEXTURE_COMPARE_FUNC,Pe[m.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===qt||m.minFilter!==Qn&&m.minFilter!==tn||m.type===nn&&t.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||i.get(m).__currentAnisotropy){const I=t.get("EXT_texture_filter_anisotropic");e.texParameterf(S,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,r.getMaxAnisotropy())),i.get(m).__currentAnisotropy=m.anisotropy}}}function Ve(S,m){let I=!1;S.__webglInit===void 0&&(S.__webglInit=!0,m.addEventListener("dispose",b));const Y=m.source;let K=u.get(Y);K===void 0&&(K={},u.set(Y,K));const k=X(m);if(k!==S.__cacheKey){K[k]===void 0&&(K[k]={texture:e.createTexture(),usedTimes:0},a.memory.textures++,I=!0),K[k].usedTimes++;const ve=K[S.__cacheKey];ve!==void 0&&(K[S.__cacheKey].usedTimes--,ve.usedTimes===0&&E(m)),S.__cacheKey=k,S.__webglTexture=K[k].texture}return I}function ue(S,m,I){return Math.floor(Math.floor(S/I)/m)}function pe(S,m,I,Y){const k=S.updateRanges;if(k.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,m.width,m.height,I,Y,m.data);else{k.sort((Q,te)=>Q.start-te.start);let ve=0;for(let Q=1;Q<k.length;Q++){const te=k[ve],me=k[Q],_e=te.start+te.count,ae=ue(me.start,m.width,4),Ue=ue(te.start,m.width,4);me.start<=_e+1&&ae===Ue&&ue(me.start+me.count-1,m.width,4)===ae?te.count=Math.max(te.count,me.start+me.count-te.start):(++ve,k[ve]=me)}k.length=ve+1;const ee=e.getParameter(e.UNPACK_ROW_LENGTH),Ee=e.getParameter(e.UNPACK_SKIP_PIXELS),we=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,m.width);for(let Q=0,te=k.length;Q<te;Q++){const me=k[Q],_e=Math.floor(me.start/4),ae=Math.ceil(me.count/4),Ue=_e%m.width,L=Math.floor(_e/m.width),re=ae,ne=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Ue),e.pixelStorei(e.UNPACK_SKIP_ROWS,L),n.texSubImage2D(e.TEXTURE_2D,0,Ue,L,re,ne,I,Y,m.data)}S.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,ee),e.pixelStorei(e.UNPACK_SKIP_PIXELS,Ee),e.pixelStorei(e.UNPACK_SKIP_ROWS,we)}}function O(S,m,I){let Y=e.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(Y=e.TEXTURE_2D_ARRAY),m.isData3DTexture&&(Y=e.TEXTURE_3D);const K=Ve(S,m),k=m.source;n.bindTexture(Y,S.__webglTexture,e.TEXTURE0+I);const ve=i.get(k);if(k.version!==ve.__version||K===!0){n.activeTexture(e.TEXTURE0+I);const ee=st.getPrimaries(st.workingColorSpace),Ee=m.colorSpace===wn?null:st.getPrimaries(m.colorSpace),we=m.colorSpace===wn||ee===Ee?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,m.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,m.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let Q=x(m.image,!1,r.maxTextureSize);Q=He(m,Q);const te=o.convert(m.format,m.colorSpace),me=o.convert(m.type);let _e=A(m.internalFormat,te,me,m.colorSpace,m.isVideoTexture);ge(Y,m);let ae;const Ue=m.mipmaps,L=m.isVideoTexture!==!0,re=ve.__version===void 0||K===!0,ne=k.dataReady,he=C(m,Q);if(m.isDepthTexture)_e=R(m.format===Ln,m.type),re&&(L?n.texStorage2D(e.TEXTURE_2D,1,_e,Q.width,Q.height):n.texImage2D(e.TEXTURE_2D,0,_e,Q.width,Q.height,0,te,me,null));else if(m.isDataTexture)if(Ue.length>0){L&&re&&n.texStorage2D(e.TEXTURE_2D,he,_e,Ue[0].width,Ue[0].height);for(let Z=0,G=Ue.length;Z<G;Z++)ae=Ue[Z],L?ne&&n.texSubImage2D(e.TEXTURE_2D,Z,0,0,ae.width,ae.height,te,me,ae.data):n.texImage2D(e.TEXTURE_2D,Z,_e,ae.width,ae.height,0,te,me,ae.data);m.generateMipmaps=!1}else L?(re&&n.texStorage2D(e.TEXTURE_2D,he,_e,Q.width,Q.height),ne&&pe(m,Q,te,me)):n.texImage2D(e.TEXTURE_2D,0,_e,Q.width,Q.height,0,te,me,Q.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){L&&re&&n.texStorage3D(e.TEXTURE_2D_ARRAY,he,_e,Ue[0].width,Ue[0].height,Q.depth);for(let Z=0,G=Ue.length;Z<G;Z++)if(ae=Ue[Z],m.format!==Yt)if(te!==null)if(L){if(ne)if(m.layerUpdates.size>0){const Me=Bo(ae.width,ae.height,m.format,m.type);for(const Ie of m.layerUpdates){const $e=ae.data.subarray(Ie*Me/ae.data.BYTES_PER_ELEMENT,(Ie+1)*Me/ae.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,Ie,ae.width,ae.height,1,te,$e)}m.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,0,ae.width,ae.height,Q.depth,te,ae.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Z,_e,ae.width,ae.height,Q.depth,0,ae.data,0,0);else tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ne&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,0,ae.width,ae.height,Q.depth,te,me,ae.data):n.texImage3D(e.TEXTURE_2D_ARRAY,Z,_e,ae.width,ae.height,Q.depth,0,te,me,ae.data)}else{L&&re&&n.texStorage2D(e.TEXTURE_2D,he,_e,Ue[0].width,Ue[0].height);for(let Z=0,G=Ue.length;Z<G;Z++)ae=Ue[Z],m.format!==Yt?te!==null?L?ne&&n.compressedTexSubImage2D(e.TEXTURE_2D,Z,0,0,ae.width,ae.height,te,ae.data):n.compressedTexImage2D(e.TEXTURE_2D,Z,_e,ae.width,ae.height,0,ae.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ne&&n.texSubImage2D(e.TEXTURE_2D,Z,0,0,ae.width,ae.height,te,me,ae.data):n.texImage2D(e.TEXTURE_2D,Z,_e,ae.width,ae.height,0,te,me,ae.data)}else if(m.isDataArrayTexture)if(L){if(re&&n.texStorage3D(e.TEXTURE_2D_ARRAY,he,_e,Q.width,Q.height,Q.depth),ne)if(m.layerUpdates.size>0){const Z=Bo(Q.width,Q.height,m.format,m.type);for(const G of m.layerUpdates){const Me=Q.data.subarray(G*Z/Q.data.BYTES_PER_ELEMENT,(G+1)*Z/Q.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,G,Q.width,Q.height,1,te,me,Me)}m.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,te,me,Q.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,_e,Q.width,Q.height,Q.depth,0,te,me,Q.data);else if(m.isData3DTexture)L?(re&&n.texStorage3D(e.TEXTURE_3D,he,_e,Q.width,Q.height,Q.depth),ne&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,te,me,Q.data)):n.texImage3D(e.TEXTURE_3D,0,_e,Q.width,Q.height,Q.depth,0,te,me,Q.data);else if(m.isFramebufferTexture){if(re)if(L)n.texStorage2D(e.TEXTURE_2D,he,_e,Q.width,Q.height);else{let Z=Q.width,G=Q.height;for(let Me=0;Me<he;Me++)n.texImage2D(e.TEXTURE_2D,Me,_e,Z,G,0,te,me,null),Z>>=1,G>>=1}}else if(Ue.length>0){if(L&&re){const Z=fe(Ue[0]);n.texStorage2D(e.TEXTURE_2D,he,_e,Z.width,Z.height)}for(let Z=0,G=Ue.length;Z<G;Z++)ae=Ue[Z],L?ne&&n.texSubImage2D(e.TEXTURE_2D,Z,0,0,te,me,ae):n.texImage2D(e.TEXTURE_2D,Z,_e,te,me,ae);m.generateMipmaps=!1}else if(L){if(re){const Z=fe(Q);n.texStorage2D(e.TEXTURE_2D,he,_e,Z.width,Z.height)}ne&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,te,me,Q)}else n.texImage2D(e.TEXTURE_2D,0,_e,te,me,Q);f(m)&&p(Y),ve.__version=k.version,m.onUpdate&&m.onUpdate(m)}S.__version=m.version}function $(S,m,I){if(m.image.length!==6)return;const Y=Ve(S,m),K=m.source;n.bindTexture(e.TEXTURE_CUBE_MAP,S.__webglTexture,e.TEXTURE0+I);const k=i.get(K);if(K.version!==k.__version||Y===!0){n.activeTexture(e.TEXTURE0+I);const ve=st.getPrimaries(st.workingColorSpace),ee=m.colorSpace===wn?null:st.getPrimaries(m.colorSpace),Ee=m.colorSpace===wn||ve===ee?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,m.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,m.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const we=m.isCompressedTexture||m.image[0].isCompressedTexture,Q=m.image[0]&&m.image[0].isDataTexture,te=[];for(let G=0;G<6;G++)!we&&!Q?te[G]=x(m.image[G],!0,r.maxCubemapSize):te[G]=Q?m.image[G].image:m.image[G],te[G]=He(m,te[G]);const me=te[0],_e=o.convert(m.format,m.colorSpace),ae=o.convert(m.type),Ue=A(m.internalFormat,_e,ae,m.colorSpace),L=m.isVideoTexture!==!0,re=k.__version===void 0||Y===!0,ne=K.dataReady;let he=C(m,me);ge(e.TEXTURE_CUBE_MAP,m);let Z;if(we){L&&re&&n.texStorage2D(e.TEXTURE_CUBE_MAP,he,Ue,me.width,me.height);for(let G=0;G<6;G++){Z=te[G].mipmaps;for(let Me=0;Me<Z.length;Me++){const Ie=Z[Me];m.format!==Yt?_e!==null?L?ne&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,Me,0,0,Ie.width,Ie.height,_e,Ie.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,Me,Ue,Ie.width,Ie.height,0,Ie.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ne&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,Me,0,0,Ie.width,Ie.height,_e,ae,Ie.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,Me,Ue,Ie.width,Ie.height,0,_e,ae,Ie.data)}}}else{if(Z=m.mipmaps,L&&re){Z.length>0&&he++;const G=fe(te[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,he,Ue,G.width,G.height)}for(let G=0;G<6;G++)if(Q){L?ne&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,te[G].width,te[G].height,_e,ae,te[G].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,Ue,te[G].width,te[G].height,0,_e,ae,te[G].data);for(let Me=0;Me<Z.length;Me++){const $e=Z[Me].image[G].image;L?ne&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,Me+1,0,0,$e.width,$e.height,_e,ae,$e.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,Me+1,Ue,$e.width,$e.height,0,_e,ae,$e.data)}}else{L?ne&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,_e,ae,te[G]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,Ue,_e,ae,te[G]);for(let Me=0;Me<Z.length;Me++){const Ie=Z[Me];L?ne&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,Me+1,0,0,_e,ae,Ie.image[G]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,Me+1,Ue,_e,ae,Ie.image[G])}}}f(m)&&p(e.TEXTURE_CUBE_MAP),k.__version=K.version,m.onUpdate&&m.onUpdate(m)}S.__version=m.version}function J(S,m,I,Y,K,k){const ve=o.convert(I.format,I.colorSpace),ee=o.convert(I.type),Ee=A(I.internalFormat,ve,ee,I.colorSpace),we=i.get(m),Q=i.get(I);if(Q.__renderTarget=m,!we.__hasExternalTextures){const te=Math.max(1,m.width>>k),me=Math.max(1,m.height>>k);K===e.TEXTURE_3D||K===e.TEXTURE_2D_ARRAY?n.texImage3D(K,k,Ee,te,me,m.depth,0,ve,ee,null):n.texImage2D(K,k,Ee,te,me,0,ve,ee,null)}n.bindFramebuffer(e.FRAMEBUFFER,S),Ze(m)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Y,K,Q.__webglTexture,0,w(m)):(K===e.TEXTURE_2D||K>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,Y,K,Q.__webglTexture,k),n.bindFramebuffer(e.FRAMEBUFFER,null)}function ye(S,m,I){if(e.bindRenderbuffer(e.RENDERBUFFER,S),m.depthBuffer){const Y=m.depthTexture,K=Y&&Y.isDepthTexture?Y.type:null,k=R(m.stencilBuffer,K),ve=m.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Ze(m)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,w(m),k,m.width,m.height):I?e.renderbufferStorageMultisample(e.RENDERBUFFER,w(m),k,m.width,m.height):e.renderbufferStorage(e.RENDERBUFFER,k,m.width,m.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ve,e.RENDERBUFFER,S)}else{const Y=m.textures;for(let K=0;K<Y.length;K++){const k=Y[K],ve=o.convert(k.format,k.colorSpace),ee=o.convert(k.type),Ee=A(k.internalFormat,ve,ee,k.colorSpace);Ze(m)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,w(m),Ee,m.width,m.height):I?e.renderbufferStorageMultisample(e.RENDERBUFFER,w(m),Ee,m.width,m.height):e.renderbufferStorage(e.RENDERBUFFER,Ee,m.width,m.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ae(S,m,I){const Y=m.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,S),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(m.depthTexture);if(K.__renderTarget=m,(!K.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),Y){if(K.__webglInit===void 0&&(K.__webglInit=!0,m.depthTexture.addEventListener("dispose",b)),K.__webglTexture===void 0){K.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,K.__webglTexture),ge(e.TEXTURE_CUBE_MAP,m.depthTexture);const we=o.convert(m.depthTexture.format),Q=o.convert(m.depthTexture.type);let te;m.depthTexture.format===Dn?te=e.DEPTH_COMPONENT24:m.depthTexture.format===Ln&&(te=e.DEPTH24_STENCIL8);for(let me=0;me<6;me++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,te,m.width,m.height,0,we,Q,null)}}else q(m.depthTexture,0);const k=K.__webglTexture,ve=w(m),ee=Y?e.TEXTURE_CUBE_MAP_POSITIVE_X+I:e.TEXTURE_2D,Ee=m.depthTexture.format===Ln?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(m.depthTexture.format===Dn)Ze(m)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Ee,ee,k,0,ve):e.framebufferTexture2D(e.FRAMEBUFFER,Ee,ee,k,0);else if(m.depthTexture.format===Ln)Ze(m)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Ee,ee,k,0,ve):e.framebufferTexture2D(e.FRAMEBUFFER,Ee,ee,k,0);else throw new Error("Unknown depthTexture format")}function Le(S){const m=i.get(S),I=S.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==S.depthTexture){const Y=S.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),Y){const K=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,Y.removeEventListener("dispose",K)};Y.addEventListener("dispose",K),m.__depthDisposeCallback=K}m.__boundDepthTexture=Y}if(S.depthTexture&&!m.__autoAllocateDepthBuffer)if(I)for(let Y=0;Y<6;Y++)Ae(m.__webglFramebuffer[Y],S,Y);else{const Y=S.texture.mipmaps;Y&&Y.length>0?Ae(m.__webglFramebuffer[0],S,0):Ae(m.__webglFramebuffer,S,0)}else if(I){m.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(n.bindFramebuffer(e.FRAMEBUFFER,m.__webglFramebuffer[Y]),m.__webglDepthbuffer[Y]===void 0)m.__webglDepthbuffer[Y]=e.createRenderbuffer(),ye(m.__webglDepthbuffer[Y],S,!1);else{const K=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,k=m.__webglDepthbuffer[Y];e.bindRenderbuffer(e.RENDERBUFFER,k),e.framebufferRenderbuffer(e.FRAMEBUFFER,K,e.RENDERBUFFER,k)}}else{const Y=S.texture.mipmaps;if(Y&&Y.length>0?n.bindFramebuffer(e.FRAMEBUFFER,m.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=e.createRenderbuffer(),ye(m.__webglDepthbuffer,S,!1);else{const K=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,k=m.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,k),e.framebufferRenderbuffer(e.FRAMEBUFFER,K,e.RENDERBUFFER,k)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ot(S,m,I){const Y=i.get(S);m!==void 0&&J(Y.__webglFramebuffer,S,S.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),I!==void 0&&Le(S)}function Be(S){const m=S.texture,I=i.get(S),Y=i.get(m);S.addEventListener("dispose",y);const K=S.textures,k=S.isWebGLCubeRenderTarget===!0,ve=K.length>1;if(ve||(Y.__webglTexture===void 0&&(Y.__webglTexture=e.createTexture()),Y.__version=m.version,a.memory.textures++),k){I.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(m.mipmaps&&m.mipmaps.length>0){I.__webglFramebuffer[ee]=[];for(let Ee=0;Ee<m.mipmaps.length;Ee++)I.__webglFramebuffer[ee][Ee]=e.createFramebuffer()}else I.__webglFramebuffer[ee]=e.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){I.__webglFramebuffer=[];for(let ee=0;ee<m.mipmaps.length;ee++)I.__webglFramebuffer[ee]=e.createFramebuffer()}else I.__webglFramebuffer=e.createFramebuffer();if(ve)for(let ee=0,Ee=K.length;ee<Ee;ee++){const we=i.get(K[ee]);we.__webglTexture===void 0&&(we.__webglTexture=e.createTexture(),a.memory.textures++)}if(S.samples>0&&Ze(S)===!1){I.__webglMultisampledFramebuffer=e.createFramebuffer(),I.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let ee=0;ee<K.length;ee++){const Ee=K[ee];I.__webglColorRenderbuffer[ee]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,I.__webglColorRenderbuffer[ee]);const we=o.convert(Ee.format,Ee.colorSpace),Q=o.convert(Ee.type),te=A(Ee.internalFormat,we,Q,Ee.colorSpace,S.isXRRenderTarget===!0),me=w(S);e.renderbufferStorageMultisample(e.RENDERBUFFER,me,te,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ee,e.RENDERBUFFER,I.__webglColorRenderbuffer[ee])}e.bindRenderbuffer(e.RENDERBUFFER,null),S.depthBuffer&&(I.__webglDepthRenderbuffer=e.createRenderbuffer(),ye(I.__webglDepthRenderbuffer,S,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(k){n.bindTexture(e.TEXTURE_CUBE_MAP,Y.__webglTexture),ge(e.TEXTURE_CUBE_MAP,m);for(let ee=0;ee<6;ee++)if(m.mipmaps&&m.mipmaps.length>0)for(let Ee=0;Ee<m.mipmaps.length;Ee++)J(I.__webglFramebuffer[ee][Ee],S,m,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee);else J(I.__webglFramebuffer[ee],S,m,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);f(m)&&p(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ve){for(let ee=0,Ee=K.length;ee<Ee;ee++){const we=K[ee],Q=i.get(we);let te=e.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(te=S.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(te,Q.__webglTexture),ge(te,we),J(I.__webglFramebuffer,S,we,e.COLOR_ATTACHMENT0+ee,te,0),f(we)&&p(te)}n.unbindTexture()}else{let ee=e.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ee=S.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ee,Y.__webglTexture),ge(ee,m),m.mipmaps&&m.mipmaps.length>0)for(let Ee=0;Ee<m.mipmaps.length;Ee++)J(I.__webglFramebuffer[Ee],S,m,e.COLOR_ATTACHMENT0,ee,Ee);else J(I.__webglFramebuffer,S,m,e.COLOR_ATTACHMENT0,ee,0);f(m)&&p(ee),n.unbindTexture()}S.depthBuffer&&Le(S)}function ze(S){const m=S.textures;for(let I=0,Y=m.length;I<Y;I++){const K=m[I];if(f(K)){const k=T(S),ve=i.get(K).__webglTexture;n.bindTexture(k,ve),p(k),n.unbindTexture()}}}const Ye=[],Ce=[];function nt(S){if(S.samples>0){if(Ze(S)===!1){const m=S.textures,I=S.width,Y=S.height;let K=e.COLOR_BUFFER_BIT;const k=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ve=i.get(S),ee=m.length>1;if(ee)for(let we=0;we<m.length;we++)n.bindFramebuffer(e.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+we,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,ve.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+we,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const Ee=S.texture.mipmaps;Ee&&Ee.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let we=0;we<m.length;we++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(K|=e.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(K|=e.STENCIL_BUFFER_BIT)),ee){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ve.__webglColorRenderbuffer[we]);const Q=i.get(m[we]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Q,0)}e.blitFramebuffer(0,0,I,Y,0,0,I,Y,K,e.NEAREST),l===!0&&(Ye.length=0,Ce.length=0,Ye.push(e.COLOR_ATTACHMENT0+we),S.depthBuffer&&S.resolveDepthBuffer===!1&&(Ye.push(k),Ce.push(k),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ce)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ye))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ee)for(let we=0;we<m.length;we++){n.bindFramebuffer(e.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+we,e.RENDERBUFFER,ve.__webglColorRenderbuffer[we]);const Q=i.get(m[we]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,ve.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+we,e.TEXTURE_2D,Q,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const m=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[m])}}}function w(S){return Math.min(r.maxSamples,S.samples)}function Ze(S){const m=i.get(S);return S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function Ne(S){const m=a.render.frame;h.get(S)!==m&&(h.set(S,m),S.update())}function He(S,m){const I=S.colorSpace,Y=S.format,K=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||I!==At&&I!==wn&&(st.getTransfer(I)===it?(Y!==Yt||K!==Ht)&&tt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rt("WebGLTextures: Unsupported texture color space:",I)),m}function fe(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=V,this.setTexture2D=q,this.setTexture2DArray=B,this.setTexture3D=D,this.setTextureCube=ie,this.rebindTextures=ot,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Ze,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Up(e,t){function n(i,r=wn){let o;const a=st.getTransfer(r);if(i===Ht)return e.UNSIGNED_BYTE;if(i===ls)return e.UNSIGNED_SHORT_4_4_4_4;if(i===cs)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Wl)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===zl)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===Xl)return e.BYTE;if(i===Yl)return e.SHORT;if(i===Di)return e.UNSIGNED_SHORT;if(i===fs)return e.INT;if(i===gn)return e.UNSIGNED_INT;if(i===nn)return e.FLOAT;if(i===an)return e.HALF_FLOAT;if(i===ql)return e.ALPHA;if(i===Kl)return e.RGB;if(i===Yt)return e.RGBA;if(i===Dn)return e.DEPTH_COMPONENT;if(i===Ln)return e.DEPTH_STENCIL;if(i===jl)return e.RED;if(i===ss)return e.RED_INTEGER;if(i===oi)return e.RG;if(i===as)return e.RG_INTEGER;if(i===os)return e.RGBA_INTEGER;if(i===Qi||i===Ji||i===er||i===tr)if(a===it)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Qi)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ji)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===er)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===tr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Qi)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ji)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===er)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===tr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===to||i===no||i===io||i===ro)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===to)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===no)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===io)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ro)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===oo||i===ao||i===so||i===lo||i===co||i===uo||i===fo)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===oo||i===ao)return a===it?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===so)return a===it?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===lo)return o.COMPRESSED_R11_EAC;if(i===co)return o.COMPRESSED_SIGNED_R11_EAC;if(i===uo)return o.COMPRESSED_RG11_EAC;if(i===fo)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ho||i===po||i===mo||i===_o||i===go||i===vo||i===Mo||i===xo||i===So||i===Eo||i===To||i===Ro||i===Ao||i===bo)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===ho)return a===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===po)return a===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===mo)return a===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===_o)return a===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===go)return a===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===vo)return a===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Mo)return a===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===xo)return a===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===So)return a===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Eo)return a===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===To)return a===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ro)return a===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ao)return a===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===bo)return a===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===wo||i===Po||i===Co)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===wo)return a===it?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Po)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Co)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Lo||i===yo||i===Io||i===Uo)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===Lo)return o.COMPRESSED_RED_RGTC1_EXT;if(i===yo)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Io)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Uo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ri?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}const Np=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Op{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const i=new us(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new Wt({vertexShader:Np,fragmentShader:Dp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new bt(new ds(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Fp extends dl{constructor(t,n){super();const i=this;let r=null,o=1,a=null,s="local-floor",l=1,c=null,h=null,d=null,u=null,_=null,M=null;const x=typeof XRWebGLBinding<"u",f=new Op,p={},T=n.getContextAttributes();let A=null,R=null;const C=[],b=[],y=new dt;let v=null;const E=new yn;E.viewport=new St;const z=new yn;z.viewport=new St;const P=[E,z],V=new fl;let W=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let $=C[O];return $===void 0&&($=new Zi,C[O]=$),$.getTargetRaySpace()},this.getControllerGrip=function(O){let $=C[O];return $===void 0&&($=new Zi,C[O]=$),$.getGripSpace()},this.getHand=function(O){let $=C[O];return $===void 0&&($=new Zi,C[O]=$),$.getHandSpace()};function q(O){const $=b.indexOf(O.inputSource);if($===-1)return;const J=C[$];J!==void 0&&(J.update(O.inputSource,O.frame,c||a),J.dispatchEvent({type:O.type,data:O.inputSource}))}function B(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",D);for(let O=0;O<C.length;O++){const $=b[O];$!==null&&(b[O]=null,C[O].disconnect($))}W=null,X=null,f.reset();for(const O in p)delete p[O];t.setRenderTarget(A),_=null,u=null,d=null,r=null,R=null,pe.stop(),i.isPresenting=!1,t.setPixelRatio(v),t.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){o=O,i.isPresenting===!0&&tt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){s=O,i.isPresenting===!0&&tt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return u!==null?u:_},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(r,n)),d},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(O){if(r=O,r!==null){if(A=t.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",B),r.addEventListener("inputsourceschange",D),T.xrCompatible!==!0&&await n.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(y),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let J=null,ye=null,Ae=null;T.depth&&(Ae=T.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,J=T.stencil?Ln:Dn,ye=T.stencil?ri:gn);const Le={colorFormat:n.RGBA8,depthFormat:Ae,scaleFactor:o};d=this.getBinding(),u=d.createProjectionLayer(Le),r.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),R=new kt(u.textureWidth,u.textureHeight,{format:Yt,type:Ht,depthTexture:new Ii(u.textureWidth,u.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const J={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:o};_=new XRWebGLLayer(r,n,J),r.updateRenderState({baseLayer:_}),t.setPixelRatio(1),t.setSize(_.framebufferWidth,_.framebufferHeight,!1),R=new kt(_.framebufferWidth,_.framebufferHeight,{format:Yt,type:Ht,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(s),pe.setContext(r),pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function D(O){for(let $=0;$<O.removed.length;$++){const J=O.removed[$],ye=b.indexOf(J);ye>=0&&(b[ye]=null,C[ye].disconnect(J))}for(let $=0;$<O.added.length;$++){const J=O.added[$];let ye=b.indexOf(J);if(ye===-1){for(let Le=0;Le<C.length;Le++)if(Le>=b.length){b.push(J),ye=Le;break}else if(b[Le]===null){b[Le]=J,ye=Le;break}if(ye===-1)break}const Ae=C[ye];Ae&&Ae.connect(J)}}const ie=new j,oe=new j;function de(O,$,J){ie.setFromMatrixPosition($.matrixWorld),oe.setFromMatrixPosition(J.matrixWorld);const ye=ie.distanceTo(oe),Ae=$.projectionMatrix.elements,Le=J.projectionMatrix.elements,ot=Ae[14]/(Ae[10]-1),Be=Ae[14]/(Ae[10]+1),ze=(Ae[9]+1)/Ae[5],Ye=(Ae[9]-1)/Ae[5],Ce=(Ae[8]-1)/Ae[0],nt=(Le[8]+1)/Le[0],w=ot*Ce,Ze=ot*nt,Ne=ye/(-Ce+nt),He=Ne*-Ce;if($.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(He),O.translateZ(Ne),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),Ae[10]===-1)O.projectionMatrix.copy($.projectionMatrix),O.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const fe=ot+Ne,S=Be+Ne,m=w-He,I=Ze+(ye-He),Y=ze*Be/S*fe,K=Ye*Be/S*fe;O.projectionMatrix.makePerspective(m,I,Y,K,fe,S),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function Pe(O,$){$===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices($.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(r===null)return;let $=O.near,J=O.far;f.texture!==null&&(f.depthNear>0&&($=f.depthNear),f.depthFar>0&&(J=f.depthFar)),V.near=z.near=E.near=$,V.far=z.far=E.far=J,(W!==V.near||X!==V.far)&&(r.updateRenderState({depthNear:V.near,depthFar:V.far}),W=V.near,X=V.far),V.layers.mask=O.layers.mask|6,E.layers.mask=V.layers.mask&-5,z.layers.mask=V.layers.mask&-3;const ye=O.parent,Ae=V.cameras;Pe(V,ye);for(let Le=0;Le<Ae.length;Le++)Pe(Ae[Le],ye);Ae.length===2?de(V,E,z):V.projectionMatrix.copy(E.projectionMatrix),ge(O,V,ye)};function ge(O,$,J){J===null?O.matrix.copy($.matrixWorld):(O.matrix.copy(J.matrixWorld),O.matrix.invert(),O.matrix.multiply($.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy($.projectionMatrix),O.projectionMatrixInverse.copy($.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=hl*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(u===null&&_===null))return l},this.setFoveation=function(O){l=O,u!==null&&(u.fixedFoveation=O),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=O)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(V)},this.getCameraTexture=function(O){return p[O]};let Ve=null;function ue(O,$){if(h=$.getViewerPose(c||a),M=$,h!==null){const J=h.views;_!==null&&(t.setRenderTargetFramebuffer(R,_.framebuffer),t.setRenderTarget(R));let ye=!1;J.length!==V.cameras.length&&(V.cameras.length=0,ye=!0);for(let Be=0;Be<J.length;Be++){const ze=J[Be];let Ye=null;if(_!==null)Ye=_.getViewport(ze);else{const nt=d.getViewSubImage(u,ze);Ye=nt.viewport,Be===0&&(t.setRenderTargetTextures(R,nt.colorTexture,nt.depthStencilTexture),t.setRenderTarget(R))}let Ce=P[Be];Ce===void 0&&(Ce=new yn,Ce.layers.enable(Be),Ce.viewport=new St,P[Be]=Ce),Ce.matrix.fromArray(ze.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(ze.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),Be===0&&(V.matrix.copy(Ce.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),ye===!0&&V.cameras.push(Ce)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){d=i.getBinding();const Be=d.getDepthInformation(J[0]);Be&&Be.isValid&&Be.texture&&f.init(Be,r.renderState)}if(Ae&&Ae.includes("camera-access")&&x){t.state.unbindTexture(),d=i.getBinding();for(let Be=0;Be<J.length;Be++){const ze=J[Be].camera;if(ze){let Ye=p[ze];Ye||(Ye=new us,p[ze]=Ye);const Ce=d.getCameraImage(ze);Ye.sourceTexture=Ce}}}}for(let J=0;J<C.length;J++){const ye=b[J],Ae=C[J];ye!==null&&Ae!==void 0&&Ae.update(ye,$,c||a)}Ve&&Ve(O,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),M=null}const pe=new ys;pe.setAnimationLoop(ue),this.setAnimationLoop=function(O){Ve=O},this.dispose=function(){}}}const un=new si,Bp=new ht;function Vp(e,t){function n(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function i(f,p){p.color.getRGB(f.fogColor.value,_s(e)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function r(f,p,T,A,R){p.isMeshBasicMaterial?o(f,p):p.isMeshLambertMaterial?(o(f,p),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(o(f,p),d(f,p)):p.isMeshPhongMaterial?(o(f,p),h(f,p),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(o(f,p),u(f,p),p.isMeshPhysicalMaterial&&_(f,p,R)):p.isMeshMatcapMaterial?(o(f,p),M(f,p)):p.isMeshDepthMaterial?o(f,p):p.isMeshDistanceMaterial?(o(f,p),x(f,p)):p.isMeshNormalMaterial?o(f,p):p.isLineBasicMaterial?(a(f,p),p.isLineDashedMaterial&&s(f,p)):p.isPointsMaterial?l(f,p,T,A):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,n(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,n(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,n(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Et&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,n(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Et&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,n(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,n(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const T=t.get(p),A=T.envMap,R=T.envMapRotation;A&&(f.envMap.value=A,un.copy(R),un.x*=-1,un.y*=-1,un.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(un.y*=-1,un.z*=-1),f.envMapRotation.value.setFromMatrix4(Bp.makeRotationFromEuler(un)),f.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,f.aoMapTransform))}function a(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,n(p.map,f.mapTransform))}function s(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,T,A){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*T,f.scale.value=A*.5,p.map&&(f.map.value=p.map,n(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,n(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,n(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,n(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function h(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function d(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function u(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function _(f,p,T){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Et&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=T.texture,f.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,f.specularIntensityMapTransform))}function M(f,p){p.matcap&&(f.matcap.value=p.matcap)}function x(f,p){const T=t.get(p).light;f.referencePosition.value.setFromMatrixPosition(T.matrixWorld),f.nearDistance.value=T.shadow.camera.near,f.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Hp(e,t,n,i){let r={},o={},a=[];const s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,A){const R=A.program;i.uniformBlockBinding(T,R)}function c(T,A){let R=r[T.id];R===void 0&&(M(T),R=h(T),r[T.id]=R,T.addEventListener("dispose",f));const C=A.program;i.updateUBOMapping(T,C);const b=t.render.frame;o[T.id]!==b&&(u(T),o[T.id]=b)}function h(T){const A=d();T.__bindingPointIndex=A;const R=e.createBuffer(),C=T.__size,b=T.usage;return e.bindBuffer(e.UNIFORM_BUFFER,R),e.bufferData(e.UNIFORM_BUFFER,C,b),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,A,R),R}function d(){for(let T=0;T<s;T++)if(a.indexOf(T)===-1)return a.push(T),T;return rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(T){const A=r[T.id],R=T.uniforms,C=T.__cache;e.bindBuffer(e.UNIFORM_BUFFER,A);for(let b=0,y=R.length;b<y;b++){const v=Array.isArray(R[b])?R[b]:[R[b]];for(let E=0,z=v.length;E<z;E++){const P=v[E];if(_(P,b,E,C)===!0){const V=P.__offset,W=Array.isArray(P.value)?P.value:[P.value];let X=0;for(let q=0;q<W.length;q++){const B=W[q],D=x(B);typeof B=="number"||typeof B=="boolean"?(P.__data[0]=B,e.bufferSubData(e.UNIFORM_BUFFER,V+X,P.__data)):B.isMatrix3?(P.__data[0]=B.elements[0],P.__data[1]=B.elements[1],P.__data[2]=B.elements[2],P.__data[3]=0,P.__data[4]=B.elements[3],P.__data[5]=B.elements[4],P.__data[6]=B.elements[5],P.__data[7]=0,P.__data[8]=B.elements[6],P.__data[9]=B.elements[7],P.__data[10]=B.elements[8],P.__data[11]=0):(B.toArray(P.__data,X),X+=D.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,V,P.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function _(T,A,R,C){const b=T.value,y=A+"_"+R;if(C[y]===void 0)return typeof b=="number"||typeof b=="boolean"?C[y]=b:C[y]=b.clone(),!0;{const v=C[y];if(typeof b=="number"||typeof b=="boolean"){if(v!==b)return C[y]=b,!0}else if(v.equals(b)===!1)return v.copy(b),!0}return!1}function M(T){const A=T.uniforms;let R=0;const C=16;for(let y=0,v=A.length;y<v;y++){const E=Array.isArray(A[y])?A[y]:[A[y]];for(let z=0,P=E.length;z<P;z++){const V=E[z],W=Array.isArray(V.value)?V.value:[V.value];for(let X=0,q=W.length;X<q;X++){const B=W[X],D=x(B),ie=R%C,oe=ie%D.boundary,de=ie+oe;R+=oe,de!==0&&C-de<D.storage&&(R+=C-de),V.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=R,R+=D.storage}}}const b=R%C;return b>0&&(R+=C-b),T.__size=R,T.__cache={},this}function x(T){const A={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(A.boundary=4,A.storage=4):T.isVector2?(A.boundary=8,A.storage=8):T.isVector3||T.isColor?(A.boundary=16,A.storage=12):T.isVector4?(A.boundary=16,A.storage=16):T.isMatrix3?(A.boundary=48,A.storage=48):T.isMatrix4?(A.boundary=64,A.storage=64):T.isTexture?tt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):tt("WebGLRenderer: Unsupported uniform value type.",T),A}function f(T){const A=T.target;A.removeEventListener("dispose",f);const R=a.indexOf(A.__bindingPointIndex);a.splice(R,1),e.deleteBuffer(r[A.id]),delete r[A.id],delete o[A.id]}function p(){for(const T in r)e.deleteBuffer(r[T]);a=[],r={},o={}}return{bind:l,update:c,dispose:p}}const Gp=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Nt=null;function kp(){return Nt===null&&(Nt=new pl(Gp,16,16,oi,an),Nt.name="DFG_LUT",Nt.minFilter=Mt,Nt.magFilter=Mt,Nt.wrapS=Ui,Nt.wrapT=Ui,Nt.generateMipmaps=!1,Nt.needsUpdate=!0),Nt}class Wp{constructor(t={}){const{canvas:n=ll(),context:i=null,depth:r=!0,stencil:o=!1,alpha:a=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:_=Ht}=t;this.isWebGLRenderer=!0;let M;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=i.getContextAttributes().alpha}else M=a;const x=_,f=new Set([os,as,ss]),p=new Set([Ht,gn,Di,ri,ls,cs]),T=new Uint32Array(4),A=new Int32Array(4);let R=null,C=null;const b=[],y=[];let v=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gt,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let z=!1;this._outputColorSpace=Un;let P=0,V=0,W=null,X=-1,q=null;const B=new St,D=new St;let ie=null;const oe=new Fe(0);let de=0,Pe=n.width,ge=n.height,Ve=1,ue=null,pe=null;const O=new St(0,0,Pe,ge),$=new St(0,0,Pe,ge);let J=!1;const ye=new ts;let Ae=!1,Le=!1;const ot=new ht,Be=new j,ze=new St,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ce=!1;function nt(){return W===null?Ve:1}let w=i;function Ze(g,U){return n.getContext(g,U)}try{const g={alpha:!0,depth:r,stencil:o,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ii}`),n.addEventListener("webglcontextlost",Me,!1),n.addEventListener("webglcontextrestored",Ie,!1),n.addEventListener("webglcontextcreationerror",$e,!1),w===null){const U="webgl2";if(w=Ze(U,g),w===null)throw Ze(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(g){throw rt("WebGLRenderer: "+g.message),g}let Ne,He,fe,S,m,I,Y,K,k,ve,ee,Ee,we,Q,te,me,_e,ae,Ue,L,re,ne,he;function Z(){Ne=new Wf(w),Ne.init(),re=new Up(w,Ne),He=new Df(w,Ne,t,re),fe=new yp(w,Ne),He.reversedDepthBuffer&&u&&fe.buffers.depth.setReversed(!0),S=new Yf(w),m=new gp,I=new Ip(w,Ne,fe,m,He,re,S),Y=new kf(E),K=new $c(w),ne=new Uf(w,K),k=new zf(w,K,S,ne),ve=new Kf(w,k,K,ne,S),ae=new qf(w,He,I),te=new Of(m),ee=new _p(E,Y,Ne,He,ne,te),Ee=new Vp(E,m),we=new Mp,Q=new Ap(Ne),_e=new If(E,Y,fe,ve,M,l),me=new Lp(E,ve,He),he=new Hp(w,S,He,fe),Ue=new Nf(w,Ne,S),L=new Xf(w,Ne,S),S.programs=ee.programs,E.capabilities=He,E.extensions=Ne,E.properties=m,E.renderLists=we,E.shadowMap=me,E.state=fe,E.info=S}Z(),x!==Ht&&(v=new $f(x,n.width,n.height,r,o));const G=new Fp(E,w);this.xr=G,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const g=Ne.get("WEBGL_lose_context");g&&g.loseContext()},this.forceContextRestore=function(){const g=Ne.get("WEBGL_lose_context");g&&g.restoreContext()},this.getPixelRatio=function(){return Ve},this.setPixelRatio=function(g){g!==void 0&&(Ve=g,this.setSize(Pe,ge,!1))},this.getSize=function(g){return g.set(Pe,ge)},this.setSize=function(g,U,H=!0){if(G.isPresenting){tt("WebGLRenderer: Can't change size while VR device is presenting.");return}Pe=g,ge=U,n.width=Math.floor(g*Ve),n.height=Math.floor(U*Ve),H===!0&&(n.style.width=g+"px",n.style.height=U+"px"),v!==null&&v.setSize(n.width,n.height),this.setViewport(0,0,g,U)},this.getDrawingBufferSize=function(g){return g.set(Pe*Ve,ge*Ve).floor()},this.setDrawingBufferSize=function(g,U,H){Pe=g,ge=U,Ve=H,n.width=Math.floor(g*H),n.height=Math.floor(U*H),this.setViewport(0,0,g,U)},this.setEffects=function(g){if(x===Ht){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(g){for(let U=0;U<g.length;U++)if(g[U].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(g||[])},this.getCurrentViewport=function(g){return g.copy(B)},this.getViewport=function(g){return g.copy(O)},this.setViewport=function(g,U,H,F){g.isVector4?O.set(g.x,g.y,g.z,g.w):O.set(g,U,H,F),fe.viewport(B.copy(O).multiplyScalar(Ve).round())},this.getScissor=function(g){return g.copy($)},this.setScissor=function(g,U,H,F){g.isVector4?$.set(g.x,g.y,g.z,g.w):$.set(g,U,H,F),fe.scissor(D.copy($).multiplyScalar(Ve).round())},this.getScissorTest=function(){return J},this.setScissorTest=function(g){fe.setScissorTest(J=g)},this.setOpaqueSort=function(g){ue=g},this.setTransparentSort=function(g){pe=g},this.getClearColor=function(g){return g.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(g=!0,U=!0,H=!0){let F=0;if(g){let N=!1;if(W!==null){const le=W.texture.format;N=f.has(le)}if(N){const le=W.texture.type,xe=p.has(le),ce=_e.getClearColor(),Se=_e.getClearAlpha(),Re=ce.r,De=ce.g,ke=ce.b;xe?(T[0]=Re,T[1]=De,T[2]=ke,T[3]=Se,w.clearBufferuiv(w.COLOR,0,T)):(A[0]=Re,A[1]=De,A[2]=ke,A[3]=Se,w.clearBufferiv(w.COLOR,0,A))}else F|=w.COLOR_BUFFER_BIT}U&&(F|=w.DEPTH_BUFFER_BIT),H&&(F|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&w.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Me,!1),n.removeEventListener("webglcontextrestored",Ie,!1),n.removeEventListener("webglcontextcreationerror",$e,!1),_e.dispose(),we.dispose(),Q.dispose(),m.dispose(),Y.dispose(),ve.dispose(),ne.dispose(),he.dispose(),ee.dispose(),G.dispose(),G.removeEventListener("sessionstart",ci),G.removeEventListener("sessionend",ui),Xt.stop()};function Me(g){g.preventDefault(),Zr("WebGLRenderer: Context Lost."),z=!0}function Ie(){Zr("WebGLRenderer: Context Restored."),z=!1;const g=S.autoReset,U=me.enabled,H=me.autoUpdate,F=me.needsUpdate,N=me.type;Z(),S.autoReset=g,me.enabled=U,me.autoUpdate=H,me.needsUpdate=F,me.type=N}function $e(g){rt("WebGLRenderer: A WebGL context could not be created. Reason: ",g.statusMessage)}function je(g){const U=g.target;U.removeEventListener("dispose",je),Lt(U)}function Lt(g){yt(g),m.remove(g)}function yt(g){const U=m.get(g).programs;U!==void 0&&(U.forEach(function(H){ee.releaseProgram(H)}),g.isShaderMaterial&&ee.releaseShaderCache(g))}this.renderBufferDirect=function(g,U,H,F,N,le){U===null&&(U=Ye);const xe=N.isMesh&&N.matrixWorld.determinant()<0,ce=qi(g,U,H,F,N);fe.setMaterial(F,xe);let Se=H.index,Re=1;if(F.wireframe===!0){if(Se=k.getWireframeAttribute(H),Se===void 0)return;Re=2}const De=H.drawRange,ke=H.attributes.position;let be=De.start*Re,Qe=(De.start+De.count)*Re;le!==null&&(be=Math.max(be,le.start*Re),Qe=Math.min(Qe,(le.start+le.count)*Re)),Se!==null?(be=Math.max(be,0),Qe=Math.min(Qe,Se.count)):ke!=null&&(be=Math.max(be,0),Qe=Math.min(Qe,ke.count));const ut=Qe-be;if(ut<0||ut===1/0)return;ne.setup(N,F,ce,H,Se);let lt,Je=Ue;if(Se!==null&&(lt=K.get(Se),Je=L,Je.setIndex(lt)),N.isMesh)F.wireframe===!0?(fe.setLineWidth(F.wireframeLinewidth*nt()),Je.setMode(w.LINES)):Je.setMode(w.TRIANGLES);else if(N.isLine){let vt=F.linewidth;vt===void 0&&(vt=1),fe.setLineWidth(vt*nt()),N.isLineSegments?Je.setMode(w.LINES):N.isLineLoop?Je.setMode(w.LINE_LOOP):Je.setMode(w.LINE_STRIP)}else N.isPoints?Je.setMode(w.POINTS):N.isSprite&&Je.setMode(w.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ns("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Je.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ne.get("WEBGL_multi_draw"))Je.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const vt=N._multiDrawStarts,Te=N._multiDrawCounts,Rt=N._multiDrawCount,qe=Se?K.get(Se).bytesPerElement:1,It=m.get(F).currentProgram.getUniforms();for(let Ut=0;Ut<Rt;Ut++)It.setValue(w,"_gl_DrawID",Ut),Je.render(vt[Ut]/qe,Te[Ut])}else if(N.isInstancedMesh)Je.renderInstances(be,ut,N.count);else if(H.isInstancedBufferGeometry){const vt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Te=Math.min(H.instanceCount,vt);Je.renderInstances(be,ut,Te)}else Je.render(be,ut)};function Vn(g,U,H){g.transparent===!0&&g.side===Ct&&g.forceSinglePass===!1?(g.side=Et,g.needsUpdate=!0,Mn(g,U,H),g.side=Nn,g.needsUpdate=!0,Mn(g,U,H),g.side=Ct):Mn(g,U,H)}this.compile=function(g,U,H=null){H===null&&(H=g),C=Q.get(H),C.init(U),y.push(C),H.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(C.pushLight(N),N.castShadow&&C.pushShadow(N))}),g!==H&&g.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(C.pushLight(N),N.castShadow&&C.pushShadow(N))}),C.setupLights();const F=new Set;return g.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const le=N.material;if(le)if(Array.isArray(le))for(let xe=0;xe<le.length;xe++){const ce=le[xe];Vn(ce,H,N),F.add(ce)}else Vn(le,H,N),F.add(le)}),C=y.pop(),F},this.compileAsync=function(g,U,H=null){const F=this.compile(g,U,H);return new Promise(N=>{function le(){if(F.forEach(function(xe){m.get(xe).currentProgram.isReady()&&F.delete(xe)}),F.size===0){N(g);return}setTimeout(le,10)}Ne.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Hn=null;function Xi(g){Hn&&Hn(g)}function ci(){Xt.stop()}function ui(){Xt.start()}const Xt=new ys;Xt.setAnimationLoop(Xi),typeof self<"u"&&Xt.setContext(self),this.setAnimationLoop=function(g){Hn=g,G.setAnimationLoop(g),g===null?Xt.stop():Xt.start()},G.addEventListener("sessionstart",ci),G.addEventListener("sessionend",ui),this.render=function(g,U){if(U!==void 0&&U.isCamera!==!0){rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;const H=G.enabled===!0&&G.isPresenting===!0,F=v!==null&&(W===null||H)&&v.begin(E,W);if(g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(G.cameraAutoUpdate===!0&&G.updateCamera(U),U=G.getCamera()),g.isScene===!0&&g.onBeforeRender(E,g,U,W),C=Q.get(g,y.length),C.init(U),y.push(C),ot.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ye.setFromProjectionMatrix(ot,Qr,U.reversedDepth),Le=this.localClippingEnabled,Ae=te.init(this.clippingPlanes,Le),R=we.get(g,b.length),R.init(),b.push(R),G.enabled===!0&&G.isPresenting===!0){const xe=E.xr.getDepthSensingMesh();xe!==null&&sn(xe,U,-1/0,E.sortObjects)}sn(g,U,0,E.sortObjects),R.finish(),E.sortObjects===!0&&R.sort(ue,pe),Ce=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,Ce&&_e.addToRenderList(R,g),this.info.render.frame++,Ae===!0&&te.beginShadows();const N=C.state.shadowsArray;if(me.render(N,g,U),Ae===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset(),(F&&v.hasRenderPass())===!1){const xe=R.opaque,ce=R.transmissive;if(C.setupLights(),U.isArrayCamera){const Se=U.cameras;if(ce.length>0)for(let Re=0,De=Se.length;Re<De;Re++){const ke=Se[Re];di(xe,ce,g,ke)}Ce&&_e.render(g);for(let Re=0,De=Se.length;Re<De;Re++){const ke=Se[Re];Gn(R,g,ke,ke.viewport)}}else ce.length>0&&di(xe,ce,g,U),Ce&&_e.render(g),Gn(R,g,U)}W!==null&&V===0&&(I.updateMultisampleRenderTarget(W),I.updateRenderTargetMipmap(W)),F&&v.end(E),g.isScene===!0&&g.onAfterRender(E,g,U),ne.resetDefaultState(),X=-1,q=null,y.pop(),y.length>0?(C=y[y.length-1],Ae===!0&&te.setGlobalState(E.clippingPlanes,C.state.camera)):C=null,b.pop(),b.length>0?R=b[b.length-1]:R=null};function sn(g,U,H,F){if(g.visible===!1)return;if(g.layers.test(U.layers)){if(g.isGroup)H=g.renderOrder;else if(g.isLOD)g.autoUpdate===!0&&g.update(U);else if(g.isLight)C.pushLight(g),g.castShadow&&C.pushShadow(g);else if(g.isSprite){if(!g.frustumCulled||ye.intersectsSprite(g)){F&&ze.setFromMatrixPosition(g.matrixWorld).applyMatrix4(ot);const xe=ve.update(g),ce=g.material;ce.visible&&R.push(g,xe,ce,H,ze.z,null)}}else if((g.isMesh||g.isLine||g.isPoints)&&(!g.frustumCulled||ye.intersectsObject(g))){const xe=ve.update(g),ce=g.material;if(F&&(g.boundingSphere!==void 0?(g.boundingSphere===null&&g.computeBoundingSphere(),ze.copy(g.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),ze.copy(xe.boundingSphere.center)),ze.applyMatrix4(g.matrixWorld).applyMatrix4(ot)),Array.isArray(ce)){const Se=xe.groups;for(let Re=0,De=Se.length;Re<De;Re++){const ke=Se[Re],be=ce[ke.materialIndex];be&&be.visible&&R.push(g,xe,be,H,ze.z,ke)}}else ce.visible&&R.push(g,xe,ce,H,ze.z,null)}}const le=g.children;for(let xe=0,ce=le.length;xe<ce;xe++)sn(le[xe],U,H,F)}function Gn(g,U,H,F){const{opaque:N,transmissive:le,transparent:xe}=g;C.setupLightsView(H),Ae===!0&&te.setGlobalState(E.clippingPlanes,H),F&&fe.viewport(B.copy(F)),N.length>0&&vn(N,U,H),le.length>0&&vn(le,U,H),xe.length>0&&vn(xe,U,H),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function di(g,U,H,F){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[F.id]===void 0){const be=Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[F.id]=new kt(1,1,{generateMipmaps:!0,type:be?an:Ht,minFilter:tn,samples:Math.max(4,He.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace})}const le=C.state.transmissionRenderTarget[F.id],xe=F.viewport||B;le.setSize(xe.z*E.transmissionResolutionScale,xe.w*E.transmissionResolutionScale);const ce=E.getRenderTarget(),Se=E.getActiveCubeFace(),Re=E.getActiveMipmapLevel();E.setRenderTarget(le),E.getClearColor(oe),de=E.getClearAlpha(),de<1&&E.setClearColor(16777215,.5),E.clear(),Ce&&_e.render(H);const De=E.toneMapping;E.toneMapping=Gt;const ke=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),C.setupLightsView(F),Ae===!0&&te.setGlobalState(E.clippingPlanes,F),vn(g,H,F),I.updateMultisampleRenderTarget(le),I.updateRenderTargetMipmap(le),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let Qe=0,ut=U.length;Qe<ut;Qe++){const lt=U[Qe],{object:Je,geometry:vt,material:Te,group:Rt}=lt;if(Te.side===Ct&&Je.layers.test(F.layers)){const qe=Te.side;Te.side=Et,Te.needsUpdate=!0,Yi(Je,H,F,vt,Te,Rt),Te.side=qe,Te.needsUpdate=!0,be=!0}}be===!0&&(I.updateMultisampleRenderTarget(le),I.updateRenderTargetMipmap(le))}E.setRenderTarget(ce,Se,Re),E.setClearColor(oe,de),ke!==void 0&&(F.viewport=ke),E.toneMapping=De}function vn(g,U,H){const F=U.isScene===!0?U.overrideMaterial:null;for(let N=0,le=g.length;N<le;N++){const xe=g[N],{object:ce,geometry:Se,group:Re}=xe;let De=xe.material;De.allowOverride===!0&&F!==null&&(De=F),ce.layers.test(H.layers)&&Yi(ce,U,H,Se,De,Re)}}function Yi(g,U,H,F,N,le){g.onBeforeRender(E,U,H,F,N,le),g.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,g.matrixWorld),g.normalMatrix.getNormalMatrix(g.modelViewMatrix),N.onBeforeRender(E,U,H,F,g,le),N.transparent===!0&&N.side===Ct&&N.forceSinglePass===!1?(N.side=Et,N.needsUpdate=!0,E.renderBufferDirect(H,U,F,N,g,le),N.side=Nn,N.needsUpdate=!0,E.renderBufferDirect(H,U,F,N,g,le),N.side=Ct):E.renderBufferDirect(H,U,F,N,g,le),g.onAfterRender(E,U,H,F,N,le)}function Mn(g,U,H){U.isScene!==!0&&(U=Ye);const F=m.get(g),N=C.state.lights,le=C.state.shadowsArray,xe=N.state.version,ce=ee.getParameters(g,N.state,le,U,H),Se=ee.getProgramCacheKey(ce);let Re=F.programs;F.environment=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?U.environment:null,F.fog=U.fog;const De=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap;F.envMap=Y.get(g.envMap||F.environment,De),F.envMapRotation=F.environment!==null&&g.envMap===null?U.environmentRotation:g.envMapRotation,Re===void 0&&(g.addEventListener("dispose",je),Re=new Map,F.programs=Re);let ke=Re.get(Se);if(ke!==void 0){if(F.currentProgram===ke&&F.lightsStateVersion===xe)return fi(g,ce),ke}else ce.uniforms=ee.getUniforms(g),g.onBeforeCompile(ce,E),ke=ee.acquireProgram(ce,Se),Re.set(Se,ke),F.uniforms=ce.uniforms;const be=F.uniforms;return(!g.isShaderMaterial&&!g.isRawShaderMaterial||g.clipping===!0)&&(be.clippingPlanes=te.uniform),fi(g,ce),F.needsLights=Ki(g),F.lightsStateVersion=xe,F.needsLights&&(be.ambientLightColor.value=N.state.ambient,be.lightProbe.value=N.state.probe,be.directionalLights.value=N.state.directional,be.directionalLightShadows.value=N.state.directionalShadow,be.spotLights.value=N.state.spot,be.spotLightShadows.value=N.state.spotShadow,be.rectAreaLights.value=N.state.rectArea,be.ltc_1.value=N.state.rectAreaLTC1,be.ltc_2.value=N.state.rectAreaLTC2,be.pointLights.value=N.state.point,be.pointLightShadows.value=N.state.pointShadow,be.hemisphereLights.value=N.state.hemi,be.directionalShadowMatrix.value=N.state.directionalShadowMatrix,be.spotLightMatrix.value=N.state.spotLightMatrix,be.spotLightMap.value=N.state.spotLightMap,be.pointShadowMatrix.value=N.state.pointShadowMatrix),F.currentProgram=ke,F.uniformsList=null,ke}function kn(g){if(g.uniformsList===null){const U=g.currentProgram.getUniforms();g.uniformsList=Pi.seqWithValue(U.seq,g.uniforms)}return g.uniformsList}function fi(g,U){const H=m.get(g);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function qi(g,U,H,F,N){U.isScene!==!0&&(U=Ye),I.resetTextureUnits();const le=U.fog,xe=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?U.environment:null,ce=W===null?E.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:At,Se=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,Re=Y.get(F.envMap||xe,Se),De=F.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,ke=!!H.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),be=!!H.morphAttributes.position,Qe=!!H.morphAttributes.normal,ut=!!H.morphAttributes.color;let lt=Gt;F.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(lt=E.toneMapping);const Je=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,vt=Je!==void 0?Je.length:0,Te=m.get(F),Rt=C.state.lights;if(Ae===!0&&(Le===!0||g!==q)){const _t=g===q&&F.id===X;te.setState(F,g,_t)}let qe=!1;F.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==Rt.state.version||Te.outputColorSpace!==ce||N.isBatchedMesh&&Te.batching===!1||!N.isBatchedMesh&&Te.batching===!0||N.isBatchedMesh&&Te.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Te.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Te.instancing===!1||!N.isInstancedMesh&&Te.instancing===!0||N.isSkinnedMesh&&Te.skinning===!1||!N.isSkinnedMesh&&Te.skinning===!0||N.isInstancedMesh&&Te.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Te.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Te.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Te.instancingMorph===!1&&N.morphTexture!==null||Te.envMap!==Re||F.fog===!0&&Te.fog!==le||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==te.numPlanes||Te.numIntersection!==te.numIntersection)||Te.vertexAlphas!==De||Te.vertexTangents!==ke||Te.morphTargets!==be||Te.morphNormals!==Qe||Te.morphColors!==ut||Te.toneMapping!==lt||Te.morphTargetsCount!==vt)&&(qe=!0):(qe=!0,Te.__version=F.version);let It=Te.currentProgram;qe===!0&&(It=Mn(F,U,N));let Ut=!1,ln=!1,Sn=!1;const et=It.getUniforms(),gt=Te.uniforms;if(fe.useProgram(It.program)&&(Ut=!0,ln=!0,Sn=!0),F.id!==X&&(X=F.id,ln=!0),Ut||q!==g){fe.buffers.depth.getReversed()&&g.reversedDepth!==!0&&(g._reversedDepth=!0,g.updateProjectionMatrix()),et.setValue(w,"projectionMatrix",g.projectionMatrix),et.setValue(w,"viewMatrix",g.matrixWorldInverse);const Qt=et.map.cameraPosition;Qt!==void 0&&Qt.setValue(w,Be.setFromMatrixPosition(g.matrixWorld)),He.logarithmicDepthBuffer&&et.setValue(w,"logDepthBufFC",2/(Math.log(g.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&et.setValue(w,"isOrthographic",g.isOrthographicCamera===!0),q!==g&&(q=g,ln=!0,Sn=!0)}if(Te.needsLights&&(Rt.state.directionalShadowMap.length>0&&et.setValue(w,"directionalShadowMap",Rt.state.directionalShadowMap,I),Rt.state.spotShadowMap.length>0&&et.setValue(w,"spotShadowMap",Rt.state.spotShadowMap,I),Rt.state.pointShadowMap.length>0&&et.setValue(w,"pointShadowMap",Rt.state.pointShadowMap,I)),N.isSkinnedMesh){et.setOptional(w,N,"bindMatrix"),et.setOptional(w,N,"bindMatrixInverse");const _t=N.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),et.setValue(w,"boneTexture",_t.boneTexture,I))}N.isBatchedMesh&&(et.setOptional(w,N,"batchingTexture"),et.setValue(w,"batchingTexture",N._matricesTexture,I),et.setOptional(w,N,"batchingIdTexture"),et.setValue(w,"batchingIdTexture",N._indirectTexture,I),et.setOptional(w,N,"batchingColorTexture"),N._colorsTexture!==null&&et.setValue(w,"batchingColorTexture",N._colorsTexture,I));const Zt=H.morphAttributes;if((Zt.position!==void 0||Zt.normal!==void 0||Zt.color!==void 0)&&ae.update(N,H,It),(ln||Te.receiveShadow!==N.receiveShadow)&&(Te.receiveShadow=N.receiveShadow,et.setValue(w,"receiveShadow",N.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&U.environment!==null&&(gt.envMapIntensity.value=U.environmentIntensity),gt.dfgLUT!==void 0&&(gt.dfgLUT.value=kp()),ln&&(et.setValue(w,"toneMappingExposure",E.toneMappingExposure),Te.needsLights&&xn(gt,Sn),le&&F.fog===!0&&Ee.refreshFogUniforms(gt,le),Ee.refreshMaterialUniforms(gt,F,Ve,ge,C.state.transmissionRenderTarget[g.id]),Pi.upload(w,kn(Te),gt,I)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Pi.upload(w,kn(Te),gt,I),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&et.setValue(w,"center",N.center),et.setValue(w,"modelViewMatrix",N.modelViewMatrix),et.setValue(w,"normalMatrix",N.normalMatrix),et.setValue(w,"modelMatrix",N.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const _t=F.uniformsGroups;for(let Qt=0,En=_t.length;Qt<En;Qt++){const $r=_t[Qt];he.update($r,It),he.bind($r,It)}}return It}function xn(g,U){g.ambientLightColor.needsUpdate=U,g.lightProbe.needsUpdate=U,g.directionalLights.needsUpdate=U,g.directionalLightShadows.needsUpdate=U,g.pointLights.needsUpdate=U,g.pointLightShadows.needsUpdate=U,g.spotLights.needsUpdate=U,g.spotLightShadows.needsUpdate=U,g.rectAreaLights.needsUpdate=U,g.hemisphereLights.needsUpdate=U}function Ki(g){return g.isMeshLambertMaterial||g.isMeshToonMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isShadowMaterial||g.isShaderMaterial&&g.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(g,U,H){const F=m.get(g);F.__autoAllocateDepthBuffer=g.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),m.get(g.texture).__webglTexture=U,m.get(g.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:H,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(g,U){const H=m.get(g);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0};const ji=w.createFramebuffer();this.setRenderTarget=function(g,U=0,H=0){W=g,P=U,V=H;let F=null,N=!1,le=!1;if(g){const ce=m.get(g);if(ce.__useDefaultFramebuffer!==void 0){fe.bindFramebuffer(w.FRAMEBUFFER,ce.__webglFramebuffer),B.copy(g.viewport),D.copy(g.scissor),ie=g.scissorTest,fe.viewport(B),fe.scissor(D),fe.setScissorTest(ie),X=-1;return}else if(ce.__webglFramebuffer===void 0)I.setupRenderTarget(g);else if(ce.__hasExternalTextures)I.rebindTextures(g,m.get(g.texture).__webglTexture,m.get(g.depthTexture).__webglTexture);else if(g.depthBuffer){const De=g.depthTexture;if(ce.__boundDepthTexture!==De){if(De!==null&&m.has(De)&&(g.width!==De.image.width||g.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(g)}}const Se=g.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(le=!0);const Re=m.get(g).__webglFramebuffer;g.isWebGLCubeRenderTarget?(Array.isArray(Re[U])?F=Re[U][H]:F=Re[U],N=!0):g.samples>0&&I.useMultisampledRTT(g)===!1?F=m.get(g).__webglMultisampledFramebuffer:Array.isArray(Re)?F=Re[H]:F=Re,B.copy(g.viewport),D.copy(g.scissor),ie=g.scissorTest}else B.copy(O).multiplyScalar(Ve).floor(),D.copy($).multiplyScalar(Ve).floor(),ie=J;if(H!==0&&(F=ji),fe.bindFramebuffer(w.FRAMEBUFFER,F)&&fe.drawBuffers(g,F),fe.viewport(B),fe.scissor(D),fe.setScissorTest(ie),N){const ce=m.get(g.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+U,ce.__webglTexture,H)}else if(le){const ce=U;for(let Se=0;Se<g.textures.length;Se++){const Re=m.get(g.textures[Se]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+Se,Re.__webglTexture,H,ce)}}else if(g!==null&&H!==0){const ce=m.get(g.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,ce.__webglTexture,H)}X=-1},this.readRenderTargetPixels=function(g,U,H,F,N,le,xe,ce=0){if(!(g&&g.isWebGLRenderTarget)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=m.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&xe!==void 0&&(Se=Se[xe]),Se){fe.bindFramebuffer(w.FRAMEBUFFER,Se);try{const Re=g.textures[ce],De=Re.format,ke=Re.type;if(g.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+ce),!He.textureFormatReadable(De)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(ke)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=g.width-F&&H>=0&&H<=g.height-N&&w.readPixels(U,H,F,N,re.convert(De),re.convert(ke),le)}finally{const Re=W!==null?m.get(W).__webglFramebuffer:null;fe.bindFramebuffer(w.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(g,U,H,F,N,le,xe,ce=0){if(!(g&&g.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=m.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&xe!==void 0&&(Se=Se[xe]),Se)if(U>=0&&U<=g.width-F&&H>=0&&H<=g.height-N){fe.bindFramebuffer(w.FRAMEBUFFER,Se);const Re=g.textures[ce],De=Re.format,ke=Re.type;if(g.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+ce),!He.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const be=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,be),w.bufferData(w.PIXEL_PACK_BUFFER,le.byteLength,w.STREAM_READ),w.readPixels(U,H,F,N,re.convert(De),re.convert(ke),0);const Qe=W!==null?m.get(W).__webglFramebuffer:null;fe.bindFramebuffer(w.FRAMEBUFFER,Qe);const ut=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await cl(w,ut,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,be),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,le),w.deleteBuffer(be),w.deleteSync(ut),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(g,U=null,H=0){const F=Math.pow(2,-H),N=Math.floor(g.image.width*F),le=Math.floor(g.image.height*F),xe=U!==null?U.x:0,ce=U!==null?U.y:0;I.setTexture2D(g,0),w.copyTexSubImage2D(w.TEXTURE_2D,H,0,0,xe,ce,N,le),fe.unbindTexture()};const hi=w.createFramebuffer(),$i=w.createFramebuffer();this.copyTextureToTexture=function(g,U,H=null,F=null,N=0,le=0){let xe,ce,Se,Re,De,ke,be,Qe,ut;const lt=g.isCompressedTexture?g.mipmaps[le]:g.image;if(H!==null)xe=H.max.x-H.min.x,ce=H.max.y-H.min.y,Se=H.isBox3?H.max.z-H.min.z:1,Re=H.min.x,De=H.min.y,ke=H.isBox3?H.min.z:0;else{const gt=Math.pow(2,-N);xe=Math.floor(lt.width*gt),ce=Math.floor(lt.height*gt),g.isDataArrayTexture?Se=lt.depth:g.isData3DTexture?Se=Math.floor(lt.depth*gt):Se=1,Re=0,De=0,ke=0}F!==null?(be=F.x,Qe=F.y,ut=F.z):(be=0,Qe=0,ut=0);const Je=re.convert(U.format),vt=re.convert(U.type);let Te;U.isData3DTexture?(I.setTexture3D(U,0),Te=w.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(I.setTexture2DArray(U,0),Te=w.TEXTURE_2D_ARRAY):(I.setTexture2D(U,0),Te=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,U.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,U.unpackAlignment);const Rt=w.getParameter(w.UNPACK_ROW_LENGTH),qe=w.getParameter(w.UNPACK_IMAGE_HEIGHT),It=w.getParameter(w.UNPACK_SKIP_PIXELS),Ut=w.getParameter(w.UNPACK_SKIP_ROWS),ln=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,lt.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,lt.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Re),w.pixelStorei(w.UNPACK_SKIP_ROWS,De),w.pixelStorei(w.UNPACK_SKIP_IMAGES,ke);const Sn=g.isDataArrayTexture||g.isData3DTexture,et=U.isDataArrayTexture||U.isData3DTexture;if(g.isDepthTexture){const gt=m.get(g),Zt=m.get(U),_t=m.get(gt.__renderTarget),Qt=m.get(Zt.__renderTarget);fe.bindFramebuffer(w.READ_FRAMEBUFFER,_t.__webglFramebuffer),fe.bindFramebuffer(w.DRAW_FRAMEBUFFER,Qt.__webglFramebuffer);for(let En=0;En<Se;En++)Sn&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,m.get(g).__webglTexture,N,ke+En),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,m.get(U).__webglTexture,le,ut+En)),w.blitFramebuffer(Re,De,xe,ce,be,Qe,xe,ce,w.DEPTH_BUFFER_BIT,w.NEAREST);fe.bindFramebuffer(w.READ_FRAMEBUFFER,null),fe.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(N!==0||g.isRenderTargetTexture||m.has(g)){const gt=m.get(g),Zt=m.get(U);fe.bindFramebuffer(w.READ_FRAMEBUFFER,hi),fe.bindFramebuffer(w.DRAW_FRAMEBUFFER,$i);for(let _t=0;_t<Se;_t++)Sn?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,gt.__webglTexture,N,ke+_t):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,gt.__webglTexture,N),et?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Zt.__webglTexture,le,ut+_t):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Zt.__webglTexture,le),N!==0?w.blitFramebuffer(Re,De,xe,ce,be,Qe,xe,ce,w.COLOR_BUFFER_BIT,w.NEAREST):et?w.copyTexSubImage3D(Te,le,be,Qe,ut+_t,Re,De,xe,ce):w.copyTexSubImage2D(Te,le,be,Qe,Re,De,xe,ce);fe.bindFramebuffer(w.READ_FRAMEBUFFER,null),fe.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else et?g.isDataTexture||g.isData3DTexture?w.texSubImage3D(Te,le,be,Qe,ut,xe,ce,Se,Je,vt,lt.data):U.isCompressedArrayTexture?w.compressedTexSubImage3D(Te,le,be,Qe,ut,xe,ce,Se,Je,lt.data):w.texSubImage3D(Te,le,be,Qe,ut,xe,ce,Se,Je,vt,lt):g.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,le,be,Qe,xe,ce,Je,vt,lt.data):g.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,le,be,Qe,lt.width,lt.height,Je,lt.data):w.texSubImage2D(w.TEXTURE_2D,le,be,Qe,xe,ce,Je,vt,lt);w.pixelStorei(w.UNPACK_ROW_LENGTH,Rt),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,qe),w.pixelStorei(w.UNPACK_SKIP_PIXELS,It),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ut),w.pixelStorei(w.UNPACK_SKIP_IMAGES,ln),le===0&&U.generateMipmaps&&w.generateMipmap(Te),fe.unbindTexture()},this.initRenderTarget=function(g){m.get(g).__webglFramebuffer===void 0&&I.setupRenderTarget(g)},this.initTexture=function(g){g.isCubeTexture?I.setTextureCube(g,0):g.isData3DTexture?I.setTexture3D(g,0):g.isDataArrayTexture||g.isCompressedArrayTexture?I.setTexture2DArray(g,0):I.setTexture2D(g,0),fe.unbindTexture()},this.resetState=function(){P=0,V=0,W=null,fe.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=st._getDrawingBufferColorSpace(t),n.unpackColorSpace=st._getUnpackColorSpace()}}function ha(e,t){if(t===Mc)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),e;if(t===Cr||t===bs){let n=e.getIndex();if(n===null){const a=[],s=e.getAttribute("position");if(s!==void 0){for(let l=0;l<s.count;l++)a.push(l);e.setIndex(a),n=e.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),e}const i=n.count-2,r=[];if(t===Cr)for(let a=1;a<=i;a++)r.push(n.getX(0)),r.push(n.getX(a)),r.push(n.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(r.push(n.getX(a)),r.push(n.getX(a+1)),r.push(n.getX(a+2))):(r.push(n.getX(a+2)),r.push(n.getX(a+1)),r.push(n.getX(a)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const o=e.clone();return o.setIndex(r),o.clearGroups(),o}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),e}function zp(e){const t=new Map,n=new Map,i=e.clone();return Fs(e,i,function(r,o){t.set(o,r),n.set(r,o)}),i.traverse(function(r){if(!r.isSkinnedMesh)return;const o=r,a=t.get(r),s=a.skeleton.bones;o.skeleton=a.skeleton.clone(),o.bindMatrix.copy(a.bindMatrix),o.skeleton.bones=s.map(function(l){return n.get(l)}),o.bind(o.skeleton,o.bindMatrix)}),i}function Fs(e,t,n){n(e,t);for(let i=0;i<e.children.length;i++)Fs(e.children[i],t.children[i],n)}class Xp extends xc{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(n){return new $p(n)}),this.register(function(n){return new Zp(n)}),this.register(function(n){return new am(n)}),this.register(function(n){return new sm(n)}),this.register(function(n){return new lm(n)}),this.register(function(n){return new Jp(n)}),this.register(function(n){return new em(n)}),this.register(function(n){return new tm(n)}),this.register(function(n){return new nm(n)}),this.register(function(n){return new jp(n)}),this.register(function(n){return new im(n)}),this.register(function(n){return new Qp(n)}),this.register(function(n){return new om(n)}),this.register(function(n){return new rm(n)}),this.register(function(n){return new qp(n)}),this.register(function(n){return new pa(n,We.EXT_MESHOPT_COMPRESSION)}),this.register(function(n){return new pa(n,We.KHR_MESHOPT_COMPRESSION)}),this.register(function(n){return new cm(n)})}load(t,n,i,r){const o=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=ni.extractUrlBase(t);a=ni.resolveURL(c,this.path)}else a=ni.extractUrlBase(t);this.manager.itemStart(t);const s=function(c){r?r(c):console.error(c),o.manager.itemError(t),o.manager.itemEnd(t)},l=new ws(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{o.parse(c,a,function(h){n(h),o.manager.itemEnd(t)},s)}catch(h){s(h)}},i,s)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,n,i,r){let o;const a={},s={},l=new TextDecoder;if(typeof t=="string")o=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===Bs){try{a[We.KHR_BINARY_GLTF]=new um(t)}catch(d){r&&r(d);return}o=JSON.parse(a[We.KHR_BINARY_GLTF].content)}else o=JSON.parse(l.decode(t));else o=t;if(o.asset===void 0||o.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Tm(o,{path:n||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),s[d.name]=d,a[d.name]=!0}if(o.extensionsUsed)for(let h=0;h<o.extensionsUsed.length;++h){const d=o.extensionsUsed[h],u=o.extensionsRequired||[];switch(d){case We.KHR_MATERIALS_UNLIT:a[d]=new Kp;break;case We.KHR_DRACO_MESH_COMPRESSION:a[d]=new dm(o,this.dracoLoader);break;case We.KHR_TEXTURE_TRANSFORM:a[d]=new fm;break;case We.KHR_MESH_QUANTIZATION:a[d]=new hm;break;default:u.indexOf(d)>=0&&s[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(a),c.setPlugins(s),c.parse(i,r)}parseAsync(t,n){const i=this;return new Promise(function(r,o){i.parse(t,n,r,o)})}}function Yp(){let e={};return{get:function(t){return e[t]},add:function(t,n){e[t]=n},remove:function(t){delete e[t]},removeAll:function(){e={}}}}function ft(e,t,n){const i=e.json.materials[t];return i.extensions&&i.extensions[n]?i.extensions[n]:null}const We={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class qp{constructor(t){this.parser=t,this.name=We.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,n=this.parser.json.nodes||[];for(let i=0,r=n.length;i<r;i++){const o=n[i];o.extensions&&o.extensions[this.name]&&o.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,o.extensions[this.name].light)}}_loadLight(t){const n=this.parser,i="light:"+t;let r=n.cache.get(i);if(r)return r;const o=n.json,l=((o.extensions&&o.extensions[this.name]||{}).lights||[])[t];let c;const h=new Fe(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],At);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new bi(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ec(h),c.distance=d;break;case"spot":c=new Sc(h),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Bt(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=n.createUniqueName(l.name||"light_"+t),r=Promise.resolve(c),n.cache.add(i,r),r}getDependency(t,n){if(t==="light")return this._loadLight(n)}createNodeAttachment(t){const n=this,i=this.parser,o=i.json.nodes[t],s=(o.extensions&&o.extensions[this.name]||{}).light;return s===void 0?null:this._loadLight(s).then(function(l){return i._getNodeRef(n.cache,s,l)})}}class Kp{constructor(){this.name=We.KHR_MATERIALS_UNLIT}getMaterialType(){return rn}extendParams(t,n,i){const r=[];t.color=new Fe(1,1,1),t.opacity=1;const o=n.pbrMetallicRoughness;if(o){if(Array.isArray(o.baseColorFactor)){const a=o.baseColorFactor;t.color.setRGB(a[0],a[1],a[2],At),t.opacity=a[3]}o.baseColorTexture!==void 0&&r.push(i.assignTexture(t,"map",o.baseColorTexture,Un))}return Promise.all(r)}}class jp{constructor(t){this.parser=t,this.name=We.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,n){const i=ft(this.parser,t,this.name);return i===null||i.emissiveStrength!==void 0&&(n.emissiveIntensity=i.emissiveStrength),Promise.resolve()}}class $p{constructor(t){this.parser=t,this.name=We.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){return ft(this.parser,t,this.name)!==null?zt:null}extendMaterialParams(t,n){const i=ft(this.parser,t,this.name);if(i===null)return Promise.resolve();const r=[];if(i.clearcoatFactor!==void 0&&(n.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(n,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(n.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(n,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(n,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){const o=i.clearcoatNormalTexture.scale;n.clearcoatNormalScale=new dt(o,o)}return Promise.all(r)}}class Zp{constructor(t){this.parser=t,this.name=We.KHR_MATERIALS_DISPERSION}getMaterialType(t){return ft(this.parser,t,this.name)!==null?zt:null}extendMaterialParams(t,n){const i=ft(this.parser,t,this.name);return i===null||(n.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}}class Qp{constructor(t){this.parser=t,this.name=We.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){return ft(this.parser,t,this.name)!==null?zt:null}extendMaterialParams(t,n){const i=ft(this.parser,t,this.name);if(i===null)return Promise.resolve();const r=[];return i.iridescenceFactor!==void 0&&(n.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(n,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(n.iridescenceIOR=i.iridescenceIor),n.iridescenceThicknessRange===void 0&&(n.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(n,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(r)}}class Jp{constructor(t){this.parser=t,this.name=We.KHR_MATERIALS_SHEEN}getMaterialType(t){return ft(this.parser,t,this.name)!==null?zt:null}extendMaterialParams(t,n){const i=ft(this.parser,t,this.name);if(i===null)return Promise.resolve();const r=[];if(n.sheenColor=new Fe(0,0,0),n.sheenRoughness=0,n.sheen=1,i.sheenColorFactor!==void 0){const o=i.sheenColorFactor;n.sheenColor.setRGB(o[0],o[1],o[2],At)}return i.sheenRoughnessFactor!==void 0&&(n.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(n,"sheenColorMap",i.sheenColorTexture,Un)),i.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(n,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(r)}}class em{constructor(t){this.parser=t,this.name=We.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){return ft(this.parser,t,this.name)!==null?zt:null}extendMaterialParams(t,n){const i=ft(this.parser,t,this.name);if(i===null)return Promise.resolve();const r=[];return i.transmissionFactor!==void 0&&(n.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(n,"transmissionMap",i.transmissionTexture)),Promise.all(r)}}class tm{constructor(t){this.parser=t,this.name=We.KHR_MATERIALS_VOLUME}getMaterialType(t){return ft(this.parser,t,this.name)!==null?zt:null}extendMaterialParams(t,n){const i=ft(this.parser,t,this.name);if(i===null)return Promise.resolve();const r=[];n.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(n,"thicknessMap",i.thicknessTexture)),n.attenuationDistance=i.attenuationDistance||1/0;const o=i.attenuationColor||[1,1,1];return n.attenuationColor=new Fe().setRGB(o[0],o[1],o[2],At),Promise.all(r)}}class nm{constructor(t){this.parser=t,this.name=We.KHR_MATERIALS_IOR}getMaterialType(t){return ft(this.parser,t,this.name)!==null?zt:null}extendMaterialParams(t,n){const i=ft(this.parser,t,this.name);return i===null||(n.ior=i.ior!==void 0?i.ior:1.5),Promise.resolve()}}class im{constructor(t){this.parser=t,this.name=We.KHR_MATERIALS_SPECULAR}getMaterialType(t){return ft(this.parser,t,this.name)!==null?zt:null}extendMaterialParams(t,n){const i=ft(this.parser,t,this.name);if(i===null)return Promise.resolve();const r=[];n.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&r.push(this.parser.assignTexture(n,"specularIntensityMap",i.specularTexture));const o=i.specularColorFactor||[1,1,1];return n.specularColor=new Fe().setRGB(o[0],o[1],o[2],At),i.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(n,"specularColorMap",i.specularColorTexture,Un)),Promise.all(r)}}class rm{constructor(t){this.parser=t,this.name=We.EXT_MATERIALS_BUMP}getMaterialType(t){return ft(this.parser,t,this.name)!==null?zt:null}extendMaterialParams(t,n){const i=ft(this.parser,t,this.name);if(i===null)return Promise.resolve();const r=[];return n.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&r.push(this.parser.assignTexture(n,"bumpMap",i.bumpTexture)),Promise.all(r)}}class om{constructor(t){this.parser=t,this.name=We.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){return ft(this.parser,t,this.name)!==null?zt:null}extendMaterialParams(t,n){const i=ft(this.parser,t,this.name);if(i===null)return Promise.resolve();const r=[];return i.anisotropyStrength!==void 0&&(n.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(n.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(n,"anisotropyMap",i.anisotropyTexture)),Promise.all(r)}}class am{constructor(t){this.parser=t,this.name=We.KHR_TEXTURE_BASISU}loadTexture(t){const n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[this.name])return null;const o=r.extensions[this.name],a=n.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return n.loadTextureImage(t,o.source,a)}}class sm{constructor(t){this.parser=t,this.name=We.EXT_TEXTURE_WEBP}loadTexture(t){const n=this.name,i=this.parser,r=i.json,o=r.textures[t];if(!o.extensions||!o.extensions[n])return null;const a=o.extensions[n],s=r.images[a.source];let l=i.textureLoader;if(s.uri){const c=i.options.manager.getHandler(s.uri);c!==null&&(l=c)}return i.loadTextureImage(t,a.source,l)}}class lm{constructor(t){this.parser=t,this.name=We.EXT_TEXTURE_AVIF}loadTexture(t){const n=this.name,i=this.parser,r=i.json,o=r.textures[t];if(!o.extensions||!o.extensions[n])return null;const a=o.extensions[n],s=r.images[a.source];let l=i.textureLoader;if(s.uri){const c=i.options.manager.getHandler(s.uri);c!==null&&(l=c)}return i.loadTextureImage(t,a.source,l)}}class pa{constructor(t,n){this.name=n,this.parser=t}loadBufferView(t){const n=this.parser.json,i=n.bufferViews[t];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],o=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return o.then(function(s){const l=r.byteOffset||0,c=r.byteLength||0,h=r.count,d=r.byteStride,u=new Uint8Array(s,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,d,u,r.mode,r.filter).then(function(_){return _.buffer}):a.ready.then(function(){const _=new ArrayBuffer(h*d);return a.decodeGltfBuffer(new Uint8Array(_),h,d,u,r.mode,r.filter),_})})}else return null}}class cm{constructor(t){this.name=We.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const n=this.parser.json,i=n.nodes[t];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=n.meshes[i.mesh];for(const c of r.primitives)if(c.mode!==Pt.TRIANGLES&&c.mode!==Pt.TRIANGLE_STRIP&&c.mode!==Pt.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=i.extensions[this.name].attributes,s=[],l={};for(const c in a)s.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return s.length<1?null:(s.push(this.parser.createNodeMesh(t)),Promise.all(s).then(c=>{const h=c.pop(),d=h.isGroup?h.children:[h],u=c[0].count,_=[];for(const M of d){const x=new ht,f=new j,p=new Xe,T=new j(1,1,1),A=new Tc(M.geometry,M.material,u);for(let R=0;R<u;R++)l.TRANSLATION&&f.fromBufferAttribute(l.TRANSLATION,R),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,R),l.SCALE&&T.fromBufferAttribute(l.SCALE,R),A.setMatrixAt(R,x.compose(f,p,T));for(const R in l)if(R==="_COLOR_0"){const C=l[R];A.instanceColor=new Rc(C.array,C.itemSize,C.normalized)}else R!=="TRANSLATION"&&R!=="ROTATION"&&R!=="SCALE"&&M.geometry.setAttribute(R,l[R]);Fn.prototype.copy.call(A,M),this.parser.assignFinalMaterial(A),_.push(A)}return h.isGroup?(h.clear(),h.add(..._),h):_[0]}))}}const Bs="glTF",Yn=12,ma={JSON:1313821514,BIN:5130562};class um{constructor(t){this.name=We.KHR_BINARY_GLTF,this.content=null,this.body=null;const n=new DataView(t,0,Yn),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(t.slice(0,4))),version:n.getUint32(4,!0),length:n.getUint32(8,!0)},this.header.magic!==Bs)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Yn,o=new DataView(t,Yn);let a=0;for(;a<r;){const s=o.getUint32(a,!0);a+=4;const l=o.getUint32(a,!0);if(a+=4,l===ma.JSON){const c=new Uint8Array(t,Yn+a,s);this.content=i.decode(c)}else if(l===ma.BIN){const c=Yn+a;this.body=t.slice(c,c+s)}a+=s}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class dm{constructor(t,n){if(!n)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=We.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=n,this.dracoLoader.preload()}decodePrimitive(t,n){const i=this.json,r=this.dracoLoader,o=t.extensions[this.name].bufferView,a=t.extensions[this.name].attributes,s={},l={},c={};for(const h in a){const d=Ir[h]||h.toLowerCase();s[d]=a[h]}for(const h in t.attributes){const d=Ir[h]||h.toLowerCase();if(a[h]!==void 0){const u=i.accessors[t.attributes[h]],_=In[u.componentType];c[d]=_.name,l[d]=u.normalized===!0}}return n.getDependency("bufferView",o).then(function(h){return new Promise(function(d,u){r.decodeDracoFile(h,function(_){for(const M in _.attributes){const x=_.attributes[M],f=l[M];f!==void 0&&(x.normalized=f)}d(_)},s,c,At,u)})})}}class fm{constructor(){this.name=We.KHR_TEXTURE_TRANSFORM}extendTexture(t,n){return(n.texCoord===void 0||n.texCoord===t.channel)&&n.offset===void 0&&n.rotation===void 0&&n.scale===void 0||(t=t.clone(),n.texCoord!==void 0&&(t.channel=n.texCoord),n.offset!==void 0&&t.offset.fromArray(n.offset),n.rotation!==void 0&&(t.rotation=n.rotation),n.scale!==void 0&&t.repeat.fromArray(n.scale),t.needsUpdate=!0),t}}class hm{constructor(){this.name=We.KHR_MESH_QUANTIZATION}}class Vs extends Nc{constructor(t,n,i,r){super(t,n,i,r)}copySampleValue_(t){const n=this.resultBuffer,i=this.sampleValues,r=this.valueSize,o=t*r*3+r;for(let a=0;a!==r;a++)n[a]=i[o+a];return n}interpolate_(t,n,i,r){const o=this.resultBuffer,a=this.sampleValues,s=this.valueSize,l=s*2,c=s*3,h=r-n,d=(i-n)/h,u=d*d,_=u*d,M=t*c,x=M-c,f=-2*_+3*u,p=_-u,T=1-f,A=p-u+d;for(let R=0;R!==s;R++){const C=a[x+R+s],b=a[x+R+l]*h,y=a[M+R+s],v=a[M+R]*h;o[R]=T*C+A*b+f*y+p*v}return o}}const pm=new Xe;class mm extends Vs{interpolate_(t,n,i,r){const o=super.interpolate_(t,n,i,r);return pm.fromArray(o).normalize().toArray(o),o}}const Pt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},In={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},_a={9728:qt,9729:Mt,9984:rs,9985:Ti,9986:Qn,9987:tn},ga={33071:Ui,33648:is,10497:Ni},fr={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ir={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Jt={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},_m={CUBICSPLINE:void 0,LINEAR:Ls,STEP:Uc},hr={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function gm(e){return e.DefaultMaterial===void 0&&(e.DefaultMaterial=new Xr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Nn})),e.DefaultMaterial}function dn(e,t,n){for(const i in n.extensions)e[i]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[i]=n.extensions[i])}function Bt(e,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(e.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function vm(e,t,n){let i=!1,r=!1,o=!1;for(let c=0,h=t.length;c<h;c++){const d=t[c];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(r=!0),d.COLOR_0!==void 0&&(o=!0),i&&r&&o)break}if(!i&&!r&&!o)return Promise.resolve(e);const a=[],s=[],l=[];for(let c=0,h=t.length;c<h;c++){const d=t[c];if(i){const u=d.POSITION!==void 0?n.getDependency("accessor",d.POSITION):e.attributes.position;a.push(u)}if(r){const u=d.NORMAL!==void 0?n.getDependency("accessor",d.NORMAL):e.attributes.normal;s.push(u)}if(o){const u=d.COLOR_0!==void 0?n.getDependency("accessor",d.COLOR_0):e.attributes.color;l.push(u)}}return Promise.all([Promise.all(a),Promise.all(s),Promise.all(l)]).then(function(c){const h=c[0],d=c[1],u=c[2];return i&&(e.morphAttributes.position=h),r&&(e.morphAttributes.normal=d),o&&(e.morphAttributes.color=u),e.morphTargetsRelative=!0,e})}function Mm(e,t){if(e.updateMorphTargets(),t.weights!==void 0)for(let n=0,i=t.weights.length;n<i;n++)e.morphTargetInfluences[n]=t.weights[n];if(t.extras&&Array.isArray(t.extras.targetNames)){const n=t.extras.targetNames;if(e.morphTargetInfluences.length===n.length){e.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++)e.morphTargetDictionary[n[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function xm(e){let t;const n=e.extensions&&e.extensions[We.KHR_DRACO_MESH_COMPRESSION];if(n?t="draco:"+n.bufferView+":"+n.indices+":"+pr(n.attributes):t=e.indices+":"+pr(e.attributes)+":"+e.mode,e.targets!==void 0)for(let i=0,r=e.targets.length;i<r;i++)t+=":"+pr(e.targets[i]);return t}function pr(e){let t="";const n=Object.keys(e).sort();for(let i=0,r=n.length;i<r;i++)t+=n[i]+":"+e[n[i]]+";";return t}function Ur(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Sm(e){return e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0?"image/jpeg":e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0?"image/webp":e.search(/\.ktx2($|\?)/i)>0||e.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Em=new ht;class Tm{constructor(t={},n={}){this.json=t,this.extensions={},this.plugins={},this.options=n,this.cache=new Yp,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,o=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const s=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(s)===!0;const l=s.match(/Version\/(\d+)/);r=i&&l?parseInt(l[1],10):-1,o=s.indexOf("Firefox")>-1,a=o?s.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||o&&a<98?this.textureLoader=new Ac(this.options.manager):this.textureLoader=new bc(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ws(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,n){const i=this,r=this.json,o=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){const s={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:i,userData:{}};return dn(o,s,r),Bt(s,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(s)})).then(function(){for(const l of s.scenes)l.updateMatrixWorld();t(s)})}).catch(n)}_markDefs(){const t=this.json.nodes||[],n=this.json.skins||[],i=this.json.meshes||[];for(let r=0,o=n.length;r<o;r++){const a=n[r].joints;for(let s=0,l=a.length;s<l;s++)t[a[s]].isBone=!0}for(let r=0,o=t.length;r<o;r++){const a=t[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(t,n){n!==void 0&&(t.refs[n]===void 0&&(t.refs[n]=t.uses[n]=0),t.refs[n]++)}_getNodeRef(t,n,i){if(t.refs[n]<=1)return i;const r=i.clone(),o=(a,s)=>{const l=this.associations.get(a);l!=null&&this.associations.set(s,l);for(const[c,h]of a.children.entries())o(h,s.children[c])};return o(i,r),r.name+="_instance_"+t.uses[n]++,r}_invokeOne(t){const n=Object.values(this.plugins);n.push(this);for(let i=0;i<n.length;i++){const r=t(n[i]);if(r)return r}return null}_invokeAll(t){const n=Object.values(this.plugins);n.unshift(this);const i=[];for(let r=0;r<n.length;r++){const o=t(n[r]);o&&i.push(o)}return i}getDependency(t,n){const i=t+":"+n;let r=this.cache.get(i);if(!r){switch(t){case"scene":r=this.loadScene(n);break;case"node":r=this._invokeOne(function(o){return o.loadNode&&o.loadNode(n)});break;case"mesh":r=this._invokeOne(function(o){return o.loadMesh&&o.loadMesh(n)});break;case"accessor":r=this.loadAccessor(n);break;case"bufferView":r=this._invokeOne(function(o){return o.loadBufferView&&o.loadBufferView(n)});break;case"buffer":r=this.loadBuffer(n);break;case"material":r=this._invokeOne(function(o){return o.loadMaterial&&o.loadMaterial(n)});break;case"texture":r=this._invokeOne(function(o){return o.loadTexture&&o.loadTexture(n)});break;case"skin":r=this.loadSkin(n);break;case"animation":r=this._invokeOne(function(o){return o.loadAnimation&&o.loadAnimation(n)});break;case"camera":r=this.loadCamera(n);break;default:if(r=this._invokeOne(function(o){return o!=this&&o.getDependency&&o.getDependency(t,n)}),!r)throw new Error("Unknown type: "+t);break}this.cache.add(i,r)}return r}getDependencies(t){let n=this.cache.get(t);if(!n){const i=this,r=this.json[t+(t==="mesh"?"es":"s")]||[];n=Promise.all(r.map(function(o,a){return i.getDependency(t,a)})),this.cache.add(t,n)}return n}loadBuffer(t){const n=this.json.buffers[t],i=this.fileLoader;if(n.type&&n.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+n.type+" buffer type is not supported.");if(n.uri===void 0&&t===0)return Promise.resolve(this.extensions[We.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(o,a){i.load(ni.resolveURL(n.uri,r.path),o,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+n.uri+'".'))})})}loadBufferView(t){const n=this.json.bufferViews[t];return this.getDependency("buffer",n.buffer).then(function(i){const r=n.byteLength||0,o=n.byteOffset||0;return i.slice(o,o+r)})}loadAccessor(t){const n=this,i=this.json,r=this.json.accessors[t];if(r.bufferView===void 0&&r.sparse===void 0){const a=fr[r.type],s=In[r.componentType],l=r.normalized===!0,c=new s(r.count*a);return Promise.resolve(new at(c,a,l))}const o=[];return r.bufferView!==void 0?o.push(this.getDependency("bufferView",r.bufferView)):o.push(null),r.sparse!==void 0&&(o.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),o.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(o).then(function(a){const s=a[0],l=fr[r.type],c=In[r.componentType],h=c.BYTES_PER_ELEMENT,d=h*l,u=r.byteOffset||0,_=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,M=r.normalized===!0;let x,f;if(_&&_!==d){const p=Math.floor(u/_),T="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count;let A=n.cache.get(T);A||(x=new c(s,p*_,r.count*_/h),A=new zr(x,_/h),n.cache.add(T,A)),f=new Yr(A,l,u%_/h,M)}else s===null?x=new c(r.count*l):x=new c(s,u,r.count*l),f=new at(x,l,M);if(r.sparse!==void 0){const p=fr.SCALAR,T=In[r.sparse.indices.componentType],A=r.sparse.indices.byteOffset||0,R=r.sparse.values.byteOffset||0,C=new T(a[1],A,r.sparse.count*p),b=new c(a[2],R,r.sparse.count*l);s!==null&&(f=new at(f.array.slice(),f.itemSize,f.normalized)),f.normalized=!1;for(let y=0,v=C.length;y<v;y++){const E=C[y];if(f.setX(E,b[y*l]),l>=2&&f.setY(E,b[y*l+1]),l>=3&&f.setZ(E,b[y*l+2]),l>=4&&f.setW(E,b[y*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}f.normalized=M}return f})}loadTexture(t){const n=this.json,i=this.options,o=n.textures[t].source,a=n.images[o];let s=this.textureLoader;if(a.uri){const l=i.manager.getHandler(a.uri);l!==null&&(s=l)}return this.loadTextureImage(t,o,s)}loadTextureImage(t,n,i){const r=this,o=this.json,a=o.textures[t],s=o.images[n],l=(s.uri||s.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(n,i).then(function(h){h.flipY=!1,h.name=a.name||s.name||"",h.name===""&&typeof s.uri=="string"&&s.uri.startsWith("data:image/")===!1&&(h.name=s.uri);const u=(o.samplers||{})[a.sampler]||{};return h.magFilter=_a[u.magFilter]||Mt,h.minFilter=_a[u.minFilter]||tn,h.wrapS=ga[u.wrapS]||Ni,h.wrapT=ga[u.wrapT]||Ni,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==qt&&h.minFilter!==Mt,r.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,n){const i=this,r=this.json,o=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(d=>d.clone());const a=r.images[t],s=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(d){c=!0;const u=new Blob([d],{type:a.mimeType});return l=s.createObjectURL(u),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(d){return new Promise(function(u,_){let M=u;n.isImageBitmapLoader===!0&&(M=function(x){const f=new Pr(x);f.needsUpdate=!0,u(f)}),n.load(ni.resolveURL(d,o.path),M,void 0,_)})}).then(function(d){return c===!0&&s.revokeObjectURL(l),Bt(d,a),d.userData.mimeType=a.mimeType||Sm(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[t]=h,h}assignTexture(t,n,i,r){const o=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),o.extensions[We.KHR_TEXTURE_TRANSFORM]){const s=i.extensions!==void 0?i.extensions[We.KHR_TEXTURE_TRANSFORM]:void 0;if(s){const l=o.associations.get(a);a=o.extensions[We.KHR_TEXTURE_TRANSFORM].extendTexture(a,s),o.associations.set(a,l)}}return r!==void 0&&(a.colorSpace=r),t[n]=a,a})}assignFinalMaterial(t){const n=t.geometry;let i=t.material;const r=n.attributes.tangent===void 0,o=n.attributes.color!==void 0,a=n.attributes.normal===void 0;if(t.isPoints){const s="PointsMaterial:"+i.uuid;let l=this.cache.get(s);l||(l=new wc,wi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(s,l)),i=l}else if(t.isLine){const s="LineBasicMaterial:"+i.uuid;let l=this.cache.get(s);l||(l=new li,wi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(s,l)),i=l}if(r||o||a){let s="ClonedMaterial:"+i.uuid+":";r&&(s+="derivative-tangents:"),o&&(s+="vertex-colors:"),a&&(s+="flat-shading:");let l=this.cache.get(s);l||(l=i.clone(),o&&(l.vertexColors=!0),a&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(s,l),this.associations.set(l,this.associations.get(i))),i=l}t.material=i}getMaterialType(){return Xr}loadMaterial(t){const n=this,i=this.json,r=this.extensions,o=i.materials[t];let a;const s={},l=o.extensions||{},c=[];if(l[We.KHR_MATERIALS_UNLIT]){const d=r[We.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),c.push(d.extendParams(s,o,n))}else{const d=o.pbrMetallicRoughness||{};if(s.color=new Fe(1,1,1),s.opacity=1,Array.isArray(d.baseColorFactor)){const u=d.baseColorFactor;s.color.setRGB(u[0],u[1],u[2],At),s.opacity=u[3]}d.baseColorTexture!==void 0&&c.push(n.assignTexture(s,"map",d.baseColorTexture,Un)),s.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,s.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(n.assignTexture(s,"metalnessMap",d.metallicRoughnessTexture)),c.push(n.assignTexture(s,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(t,s)})))}o.doubleSided===!0&&(s.side=Ct);const h=o.alphaMode||hr.OPAQUE;if(h===hr.BLEND?(s.transparent=!0,s.depthWrite=!1):(s.transparent=!1,h===hr.MASK&&(s.alphaTest=o.alphaCutoff!==void 0?o.alphaCutoff:.5)),o.normalTexture!==void 0&&a!==rn&&(c.push(n.assignTexture(s,"normalMap",o.normalTexture)),s.normalScale=new dt(1,1),o.normalTexture.scale!==void 0)){const d=o.normalTexture.scale;s.normalScale.set(d,d)}if(o.occlusionTexture!==void 0&&a!==rn&&(c.push(n.assignTexture(s,"aoMap",o.occlusionTexture)),o.occlusionTexture.strength!==void 0&&(s.aoMapIntensity=o.occlusionTexture.strength)),o.emissiveFactor!==void 0&&a!==rn){const d=o.emissiveFactor;s.emissive=new Fe().setRGB(d[0],d[1],d[2],At)}return o.emissiveTexture!==void 0&&a!==rn&&c.push(n.assignTexture(s,"emissiveMap",o.emissiveTexture,Un)),Promise.all(c).then(function(){const d=new a(s);return o.name&&(d.name=o.name),Bt(d,o),n.associations.set(d,{materials:t}),o.extensions&&dn(r,d,o),d})}createUniqueName(t){const n=Pc.sanitizeNodeName(t||"");return n in this.nodeNamesUsed?n+"_"+ ++this.nodeNamesUsed[n]:(this.nodeNamesUsed[n]=0,n)}loadGeometries(t){const n=this,i=this.extensions,r=this.primitiveCache;function o(s){return i[We.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(s,n).then(function(l){return va(l,s,n)})}const a=[];for(let s=0,l=t.length;s<l;s++){const c=t[s],h=xm(c),d=r[h];if(d)a.push(d.promise);else{let u;c.extensions&&c.extensions[We.KHR_DRACO_MESH_COMPRESSION]?u=o(c):u=va(new Tt,c,n),r[h]={primitive:c,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(t){const n=this,i=this.json,r=this.extensions,o=i.meshes[t],a=o.primitives,s=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?gm(this.cache):this.getDependency("material",a[l].material);s.push(h)}return s.push(n.loadGeometries(a)),Promise.all(s).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],d=[];for(let _=0,M=h.length;_<M;_++){const x=h[_],f=a[_];let p;const T=c[_];if(f.mode===Pt.TRIANGLES||f.mode===Pt.TRIANGLE_STRIP||f.mode===Pt.TRIANGLE_FAN||f.mode===void 0)p=o.isSkinnedMesh===!0?new Ps(x,T):new bt(x,T),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),f.mode===Pt.TRIANGLE_STRIP?p.geometry=ha(p.geometry,bs):f.mode===Pt.TRIANGLE_FAN&&(p.geometry=ha(p.geometry,Cr));else if(f.mode===Pt.LINES)p=new Gi(x,T);else if(f.mode===Pt.LINE_STRIP)p=new Cs(x,T);else if(f.mode===Pt.LINE_LOOP)p=new Cc(x,T);else if(f.mode===Pt.POINTS)p=new Lc(x,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+f.mode);Object.keys(p.geometry.morphAttributes).length>0&&Mm(p,o),p.name=n.createUniqueName(o.name||"mesh_"+t),Bt(p,o),f.extensions&&dn(r,p,f),n.assignFinalMaterial(p),d.push(p)}for(let _=0,M=d.length;_<M;_++)n.associations.set(d[_],{meshes:t,primitives:_});if(d.length===1)return o.extensions&&dn(r,d[0],o),d[0];const u=new jt;o.extensions&&dn(r,u,o),n.associations.set(u,{meshes:t});for(let _=0,M=d.length;_<M;_++)u.add(d[_]);return u})}loadCamera(t){let n;const i=this.json.cameras[t],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?n=new yn(ct.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(n=new Hr(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(n.name=this.createUniqueName(i.name)),Bt(n,i),Promise.resolve(n)}loadSkin(t){const n=this.json.skins[t],i=[];for(let r=0,o=n.joints.length;r<o;r++)i.push(this._loadNodeShallow(n.joints[r]));return n.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",n.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const o=r.pop(),a=r,s=[],l=[];for(let c=0,h=a.length;c<h;c++){const d=a[c];if(d){s.push(d);const u=new ht;o!==null&&u.fromArray(o.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',n.joints[c])}return new ki(s,l)})}loadAnimation(t){const n=this.json,i=this,r=n.animations[t],o=r.name?r.name:"animation_"+t,a=[],s=[],l=[],c=[],h=[];for(let d=0,u=r.channels.length;d<u;d++){const _=r.channels[d],M=r.samplers[_.sampler],x=_.target,f=x.node,p=r.parameters!==void 0?r.parameters[M.input]:M.input,T=r.parameters!==void 0?r.parameters[M.output]:M.output;x.node!==void 0&&(a.push(this.getDependency("node",f)),s.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",T)),c.push(M),h.push(x))}return Promise.all([Promise.all(a),Promise.all(s),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(d){const u=d[0],_=d[1],M=d[2],x=d[3],f=d[4],p=[];for(let A=0,R=u.length;A<R;A++){const C=u[A],b=_[A],y=M[A],v=x[A],E=f[A];if(C===void 0)continue;C.updateMatrix&&C.updateMatrix();const z=i._createAnimationTracks(C,b,y,v,E);if(z)for(let P=0;P<z.length;P++)p.push(z[P])}const T=new yc(o,void 0,p);return Bt(T,r),T})}createNodeMesh(t){const n=this.json,i=this,r=n.nodes[t];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(o){const a=i._getNodeRef(i.meshCache,r.mesh,o);return r.weights!==void 0&&a.traverse(function(s){if(s.isMesh)for(let l=0,c=r.weights.length;l<c;l++)s.morphTargetInfluences[l]=r.weights[l]}),a})}loadNode(t){const n=this.json,i=this,r=n.nodes[t],o=i._loadNodeShallow(t),a=[],s=r.children||[];for(let c=0,h=s.length;c<h;c++)a.push(i.getDependency("node",s[c]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([o,Promise.all(a),l]).then(function(c){const h=c[0],d=c[1],u=c[2];u!==null&&h.traverse(function(_){_.isSkinnedMesh&&_.bind(u,Em)});for(let _=0,M=d.length;_<M;_++)h.add(d[_]);if(h.userData.pivot!==void 0&&d.length>0){const _=h.userData.pivot,M=d[0];h.pivot=new j().fromArray(_),h.position.x-=_[0],h.position.y-=_[1],h.position.z-=_[2],M.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(t){const n=this.json,i=this.extensions,r=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const o=n.nodes[t],a=o.name?r.createUniqueName(o.name):"",s=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&s.push(l),o.camera!==void 0&&s.push(r.getDependency("camera",o.camera).then(function(c){return r._getNodeRef(r.cameraCache,o.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){s.push(c)}),this.nodeCache[t]=Promise.all(s).then(function(c){let h;if(o.isBone===!0?h=new Ic:c.length>1?h=new jt:c.length===1?h=c[0]:h=new Fn,h!==c[0])for(let d=0,u=c.length;d<u;d++)h.add(c[d]);if(o.name&&(h.userData.name=o.name,h.name=a),Bt(h,o),o.extensions&&dn(i,h,o),o.matrix!==void 0){const d=new ht;d.fromArray(o.matrix),h.applyMatrix4(d)}else o.translation!==void 0&&h.position.fromArray(o.translation),o.rotation!==void 0&&h.quaternion.fromArray(o.rotation),o.scale!==void 0&&h.scale.fromArray(o.scale);if(!r.associations.has(h))r.associations.set(h,{});else if(o.mesh!==void 0&&r.meshCache.refs[o.mesh]>1){const d=r.associations.get(h);r.associations.set(h,{...d})}return r.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const n=this.extensions,i=this.json.scenes[t],r=this,o=new jt;i.name&&(o.name=r.createUniqueName(i.name)),Bt(o,i),i.extensions&&dn(n,o,i);const a=i.nodes||[],s=[];for(let l=0,c=a.length;l<c;l++)s.push(r.getDependency("node",a[l]));return Promise.all(s).then(function(l){for(let h=0,d=l.length;h<d;h++){const u=l[h];u.parent!==null?o.add(zp(u)):o.add(u)}const c=h=>{const d=new Map;for(const[u,_]of r.associations)(u instanceof wi||u instanceof Pr)&&d.set(u,_);return h.traverse(u=>{const _=r.associations.get(u);_!=null&&d.set(u,_)}),d};return r.associations=c(o),o})}_createAnimationTracks(t,n,i,r,o){const a=[],s=t.name?t.name:t.uuid,l=[];Jt[o.path]===Jt.weights?t.traverse(function(u){u.morphTargetInfluences&&l.push(u.name?u.name:u.uuid)}):l.push(s);let c;switch(Jt[o.path]){case Jt.weights:c=Go;break;case Jt.rotation:c=ko;break;case Jt.translation:case Jt.scale:c=Ho;break;default:switch(i.itemSize){case 1:c=Go;break;case 2:case 3:default:c=Ho;break}break}const h=r.interpolation!==void 0?_m[r.interpolation]:Ls,d=this._getArrayFromAccessor(i);for(let u=0,_=l.length;u<_;u++){const M=new c(l[u]+"."+Jt[o.path],n.array,d,h);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),a.push(M)}return a}_getArrayFromAccessor(t){let n=t.array;if(t.normalized){const i=Ur(n.constructor),r=new Float32Array(n.length);for(let o=0,a=n.length;o<a;o++)r[o]=n[o]*i;n=r}return n}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(i){const r=this instanceof ko?mm:Vs;return new r(this.times,this.values,this.getValueSize()/3,i)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Rm(e,t,n){const i=t.attributes,r=new Dc;if(i.POSITION!==void 0){const s=n.json.accessors[i.POSITION],l=s.min,c=s.max;if(l!==void 0&&c!==void 0){if(r.set(new j(l[0],l[1],l[2]),new j(c[0],c[1],c[2])),s.normalized){const h=Ur(In[s.componentType]);r.min.multiplyScalar(h),r.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const o=t.targets;if(o!==void 0){const s=new j,l=new j;for(let c=0,h=o.length;c<h;c++){const d=o[c];if(d.POSITION!==void 0){const u=n.json.accessors[d.POSITION],_=u.min,M=u.max;if(_!==void 0&&M!==void 0){if(l.setX(Math.max(Math.abs(_[0]),Math.abs(M[0]))),l.setY(Math.max(Math.abs(_[1]),Math.abs(M[1]))),l.setZ(Math.max(Math.abs(_[2]),Math.abs(M[2]))),u.normalized){const x=Ur(In[u.componentType]);l.multiplyScalar(x)}s.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(s)}e.boundingBox=r;const a=new Oc;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,e.boundingSphere=a}function va(e,t,n){const i=t.attributes,r=[];function o(a,s){return n.getDependency("accessor",a).then(function(l){e.setAttribute(s,l)})}for(const a in i){const s=Ir[a]||a.toLowerCase();s in e.attributes||r.push(o(i[a],s))}if(t.indices!==void 0&&!e.index){const a=n.getDependency("accessor",t.indices).then(function(s){e.setIndex(s)});r.push(a)}return st.workingColorSpace!==At&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${st.workingColorSpace}" not supported.`),Bt(e,t),Rm(e,t,n),Promise.all(r).then(function(){return t.targets!==void 0?vm(e,t.targets,n):e})}/*!
 * @pixiv/three-vrm v3.5.1
 * VRM file loader for three.js.
 *
 * Copyright (c) 2019-2026 pixiv Inc.
 * @pixiv/three-vrm is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 */var Mi=(e,t,n)=>new Promise((i,r)=>{var o=l=>{try{s(n.next(l))}catch(c){r(c)}},a=l=>{try{s(n.throw(l))}catch(c){r(c)}},s=l=>l.done?i(l.value):Promise.resolve(l.value).then(o,a);s((n=n.apply(e,t)).next())}),Ke=(e,t,n)=>new Promise((i,r)=>{var o=l=>{try{s(n.next(l))}catch(c){r(c)}},a=l=>{try{s(n.throw(l))}catch(c){r(c)}},s=l=>l.done?i(l.value):Promise.resolve(l.value).then(o,a);s((n=n.apply(e,t)).next())}),Ma=class extends Fn{constructor(e){super(),this.weight=0,this.isBinary=!1,this.overrideBlink="none",this.overrideLookAt="none",this.overrideMouth="none",this._binds=[],this.name=`VRMExpression_${e}`,this.expressionName=e,this.type="VRMExpression",this.visible=!1}get binds(){return this._binds}get overrideBlinkAmount(){return this.overrideBlink==="block"?0<this.outputWeight?1:0:this.overrideBlink==="blend"?this.outputWeight:0}get overrideLookAtAmount(){return this.overrideLookAt==="block"?0<this.outputWeight?1:0:this.overrideLookAt==="blend"?this.outputWeight:0}get overrideMouthAmount(){return this.overrideMouth==="block"?0<this.outputWeight?1:0:this.overrideMouth==="blend"?this.outputWeight:0}get outputWeight(){return this.isBinary?this.weight>.5?1:0:this.weight}addBind(e){this._binds.push(e)}deleteBind(e){const t=this._binds.indexOf(e);t>=0&&this._binds.splice(t,1)}applyWeight(e){var t;let n=this.outputWeight;n*=(t=e?.multiplier)!=null?t:1,this.isBinary&&n<1&&(n=0),this._binds.forEach(i=>i.applyWeight(n))}clearAppliedWeight(){this._binds.forEach(e=>e.clearAppliedWeight())}};function Hs(e,t,n){var i,r;const o=e.parser.json,a=(i=o.nodes)==null?void 0:i[t];if(a==null)return console.warn(`extractPrimitivesInternal: Attempt to use nodes[${t}] of glTF but the node doesn't exist`),null;const s=a.mesh;if(s==null)return null;const l=(r=o.meshes)==null?void 0:r[s];if(l==null)return console.warn(`extractPrimitivesInternal: Attempt to use meshes[${s}] of glTF but the mesh doesn't exist`),null;const c=l.primitives.length,h=[];return n.traverse(d=>{h.length<c&&d.isMesh&&h.push(d)}),h}function xa(e,t){return Ke(this,null,function*(){const n=yield e.parser.getDependency("node",t);return Hs(e,t,n)})}function Sa(e){return Ke(this,null,function*(){const t=yield e.parser.getDependencies("node"),n=new Map;return t.forEach((i,r)=>{const o=Hs(e,r,i);o!=null&&n.set(r,o)}),n})}var Nr={Aa:"aa",Ih:"ih",Ou:"ou",Ee:"ee",Oh:"oh",Blink:"blink",Happy:"happy",Angry:"angry",Sad:"sad",Relaxed:"relaxed",LookUp:"lookUp",Surprised:"surprised",LookDown:"lookDown",LookLeft:"lookLeft",LookRight:"lookRight",BlinkLeft:"blinkLeft",BlinkRight:"blinkRight",Neutral:"neutral"};function Gs(e){return Math.max(Math.min(e,1),0)}var Ea=class ks{constructor(){this.blinkExpressionNames=["blink","blinkLeft","blinkRight"],this.lookAtExpressionNames=["lookLeft","lookRight","lookUp","lookDown"],this.mouthExpressionNames=["aa","ee","ih","oh","ou"],this._expressions=[],this._expressionMap={}}get expressions(){return this._expressions.concat()}get expressionMap(){return Object.assign({},this._expressionMap)}get presetExpressionMap(){const t={},n=new Set(Object.values(Nr));return Object.entries(this._expressionMap).forEach(([i,r])=>{n.has(i)&&(t[i]=r)}),t}get customExpressionMap(){const t={},n=new Set(Object.values(Nr));return Object.entries(this._expressionMap).forEach(([i,r])=>{n.has(i)||(t[i]=r)}),t}copy(t){return this._expressions.concat().forEach(i=>{this.unregisterExpression(i)}),t._expressions.forEach(i=>{this.registerExpression(i)}),this.blinkExpressionNames=t.blinkExpressionNames.concat(),this.lookAtExpressionNames=t.lookAtExpressionNames.concat(),this.mouthExpressionNames=t.mouthExpressionNames.concat(),this}clone(){return new ks().copy(this)}getExpression(t){var n;return(n=this._expressionMap[t])!=null?n:null}registerExpression(t){this._expressions.push(t),this._expressionMap[t.expressionName]=t}unregisterExpression(t){const n=this._expressions.indexOf(t);n===-1&&console.warn("VRMExpressionManager: The specified expressions is not registered"),this._expressions.splice(n,1),delete this._expressionMap[t.expressionName]}getValue(t){var n;const i=this.getExpression(t);return(n=i?.weight)!=null?n:null}setValue(t,n){const i=this.getExpression(t);i&&(i.weight=Gs(n))}resetValues(){this._expressions.forEach(t=>{t.weight=0})}getExpressionTrackName(t){const n=this.getExpression(t);return n?`${n.name}.weight`:null}update(){const t=this._calculateWeightMultipliers();this._expressions.forEach(n=>{n.clearAppliedWeight()}),this._expressions.forEach(n=>{let i=1;const r=n.expressionName;this.blinkExpressionNames.indexOf(r)!==-1&&(i*=t.blink),this.lookAtExpressionNames.indexOf(r)!==-1&&(i*=t.lookAt),this.mouthExpressionNames.indexOf(r)!==-1&&(i*=t.mouth),n.applyWeight({multiplier:i})})}_calculateWeightMultipliers(){let t=1,n=1,i=1;return this._expressions.forEach(r=>{t-=r.overrideBlinkAmount,n-=r.overrideLookAtAmount,i-=r.overrideMouthAmount}),t=Math.max(0,t),n=Math.max(0,n),i=Math.max(0,i),{blink:t,lookAt:n,mouth:i}}},qn={Color:"color",EmissionColor:"emissionColor",ShadeColor:"shadeColor",RimColor:"rimColor",OutlineColor:"outlineColor"},Am={_Color:qn.Color,_EmissionColor:qn.EmissionColor,_ShadeColor:qn.ShadeColor,_RimColor:qn.RimColor,_OutlineColor:qn.OutlineColor},bm=new Fe,Ws=class zs{constructor({material:t,type:n,targetValue:i,targetAlpha:r}){this.material=t,this.type=n,this.targetValue=i,this.targetAlpha=r??1;const o=this._initColorBindState(),a=this._initAlphaBindState();this._state={color:o,alpha:a}}applyWeight(t){const{color:n,alpha:i}=this._state;if(n!=null){const{propertyName:r,deltaValue:o}=n,a=this.material[r];a?.add(bm.copy(o).multiplyScalar(t))}if(i!=null){const{propertyName:r,deltaValue:o}=i;this.material[r]!=null&&(this.material[r]+=o*t)}}clearAppliedWeight(){const{color:t,alpha:n}=this._state;if(t!=null){const{propertyName:i,initialValue:r}=t,o=this.material[i];o?.copy(r)}if(n!=null){const{propertyName:i,initialValue:r}=n;this.material[i]!=null&&(this.material[i]=r)}}_initColorBindState(){var t,n,i;const{material:r,type:o,targetValue:a}=this,s=this._getPropertyNameMap(),l=(n=(t=s?.[o])==null?void 0:t[0])!=null?n:null;if(l==null)return console.warn(`Tried to add a material color bind to the material ${(i=r.name)!=null?i:"(no name)"}, the type ${o} but the material or the type is not supported.`),null;const h=r[l].clone(),d=new Fe(a.r-h.r,a.g-h.g,a.b-h.b);return{propertyName:l,initialValue:h,deltaValue:d}}_initAlphaBindState(){var t,n,i;const{material:r,type:o,targetAlpha:a}=this,s=this._getPropertyNameMap(),l=(n=(t=s?.[o])==null?void 0:t[1])!=null?n:null;if(l==null&&a!==1)return console.warn(`Tried to add a material alpha bind to the material ${(i=r.name)!=null?i:"(no name)"}, the type ${o} but the material or the type does not support alpha.`),null;if(l==null)return null;const c=r[l],h=a-c;return{propertyName:l,initialValue:c,deltaValue:h}}_getPropertyNameMap(){var t,n;return(n=(t=Object.entries(zs._propertyNameMapMap).find(([i])=>this.material[i]===!0))==null?void 0:t[1])!=null?n:null}};Ws._propertyNameMapMap={isMeshStandardMaterial:{color:["color","opacity"],emissionColor:["emissive",null]},isMeshBasicMaterial:{color:["color","opacity"]},isMToonMaterial:{color:["color","opacity"],emissionColor:["emissive",null],outlineColor:["outlineColorFactor",null],matcapColor:["matcapFactor",null],rimColor:["parametricRimColorFactor",null],shadeColor:["shadeColorFactor",null]}};var Ta=Ws,Oi=class{constructor({primitives:e,index:t,weight:n}){this.primitives=e,this.index=t,this.weight=n}applyWeight(e){this.primitives.forEach(t=>{var n;((n=t.morphTargetInfluences)==null?void 0:n[this.index])!=null&&(t.morphTargetInfluences[this.index]+=this.weight*e)})}clearAppliedWeight(){this.primitives.forEach(e=>{var t;((t=e.morphTargetInfluences)==null?void 0:t[this.index])!=null&&(e.morphTargetInfluences[this.index]=0)})}},Ra=new dt,Xs=class Ys{constructor({material:t,scale:n,offset:i}){var r,o;this.material=t,this.scale=n,this.offset=i;const a=(r=Object.entries(Ys._propertyNamesMap).find(([s])=>t[s]===!0))==null?void 0:r[1];a==null?(console.warn(`Tried to add a texture transform bind to the material ${(o=t.name)!=null?o:"(no name)"} but the material is not supported.`),this._properties=[]):(this._properties=[],a.forEach(s=>{var l;const c=(l=t[s])==null?void 0:l.clone();if(!c)return null;t[s]=c;const h=c.offset.clone(),d=c.repeat.clone(),u=i.clone().sub(h),_=n.clone().sub(d);this._properties.push({name:s,initialOffset:h,deltaOffset:u,initialScale:d,deltaScale:_})}))}applyWeight(t){this._properties.forEach(n=>{const i=this.material[n.name];i!==void 0&&(i.offset.add(Ra.copy(n.deltaOffset).multiplyScalar(t)),i.repeat.add(Ra.copy(n.deltaScale).multiplyScalar(t)))})}clearAppliedWeight(){this._properties.forEach(t=>{const n=this.material[t.name];n!==void 0&&(n.offset.copy(t.initialOffset),n.repeat.copy(t.initialScale))})}};Xs._propertyNamesMap={isMeshStandardMaterial:["map","emissiveMap","bumpMap","normalMap","displacementMap","roughnessMap","metalnessMap","alphaMap"],isMeshBasicMaterial:["map","specularMap","alphaMap"],isMToonMaterial:["map","normalMap","emissiveMap","shadeMultiplyTexture","rimMultiplyTexture","outlineWidthMultiplyTexture","uvAnimationMaskTexture"]};var Aa=Xs,wm=new Set(["1.0","1.0-beta"]),qs=class Ks{get name(){return"VRMExpressionLoaderPlugin"}constructor(t){this.parser=t}afterRoot(t){return Ke(this,null,function*(){t.userData.vrmExpressionManager=yield this._import(t)})}_import(t){return Ke(this,null,function*(){const n=yield this._v1Import(t);if(n)return n;const i=yield this._v0Import(t);return i||null})}_v1Import(t){return Ke(this,null,function*(){var n,i;const r=this.parser.json;if(!(((n=r.extensionsUsed)==null?void 0:n.indexOf("VRMC_vrm"))!==-1))return null;const a=(i=r.extensions)==null?void 0:i.VRMC_vrm;if(!a)return null;const s=a.specVersion;if(!wm.has(s))return console.warn(`VRMExpressionLoaderPlugin: Unknown VRMC_vrm specVersion "${s}"`),null;const l=a.expressions;if(!l)return null;const c=new Set(Object.values(Nr)),h=new Map;l.preset!=null&&Object.entries(l.preset).forEach(([u,_])=>{if(_!=null){if(!c.has(u)){console.warn(`VRMExpressionLoaderPlugin: Unknown preset name "${u}" detected. Ignoring the expression`);return}h.set(u,_)}}),l.custom!=null&&Object.entries(l.custom).forEach(([u,_])=>{if(c.has(u)){console.warn(`VRMExpressionLoaderPlugin: Custom expression cannot have preset name "${u}". Ignoring the expression`);return}h.set(u,_)});const d=new Ea;return yield Promise.all(Array.from(h.entries()).map(u=>Ke(this,[u],function*([_,M]){var x,f,p,T,A,R,C;const b=new Ma(_);if(t.scene.add(b),b.isBinary=(x=M.isBinary)!=null?x:!1,b.overrideBlink=(f=M.overrideBlink)!=null?f:"none",b.overrideLookAt=(p=M.overrideLookAt)!=null?p:"none",b.overrideMouth=(T=M.overrideMouth)!=null?T:"none",(A=M.morphTargetBinds)==null||A.forEach(y=>Ke(this,null,function*(){var v;if(y.node===void 0||y.index===void 0)return;const E=yield xa(t,y.node),z=y.index;if(!E.every(P=>Array.isArray(P.morphTargetInfluences)&&z<P.morphTargetInfluences.length)){console.warn(`VRMExpressionLoaderPlugin: ${M.name} attempts to index morph #${z} but not found.`);return}b.addBind(new Oi({primitives:E,index:z,weight:(v=y.weight)!=null?v:1}))})),M.materialColorBinds||M.textureTransformBinds){const y=[];t.scene.traverse(v=>{const E=v.material;E&&(Array.isArray(E)?y.push(...E):y.push(E))}),(R=M.materialColorBinds)==null||R.forEach(v=>Ke(this,null,function*(){y.filter(z=>{var P;const V=(P=this.parser.associations.get(z))==null?void 0:P.materials;return v.material===V}).forEach(z=>{b.addBind(new Ta({material:z,type:v.type,targetValue:new Fe().fromArray(v.targetValue),targetAlpha:v.targetValue[3]}))})})),(C=M.textureTransformBinds)==null||C.forEach(v=>Ke(this,null,function*(){y.filter(z=>{var P;const V=(P=this.parser.associations.get(z))==null?void 0:P.materials;return v.material===V}).forEach(z=>{var P,V;b.addBind(new Aa({material:z,offset:new dt().fromArray((P=v.offset)!=null?P:[0,0]),scale:new dt().fromArray((V=v.scale)!=null?V:[1,1])}))})}))}d.registerExpression(b)}))),d})}_v0Import(t){return Ke(this,null,function*(){var n;const i=this.parser.json,r=(n=i.extensions)==null?void 0:n.VRM;if(!r)return null;const o=r.blendShapeMaster;if(!o)return null;const a=new Ea,s=o.blendShapeGroups;if(!s)return a;const l=new Set;return yield Promise.all(s.map(c=>Ke(this,null,function*(){var h;const d=c.presetName,u=d!=null&&Ks.v0v1PresetNameMap[d]||null,_=u??c.name;if(_==null){console.warn("VRMExpressionLoaderPlugin: One of custom expressions has no name. Ignoring the expression");return}if(l.has(_)){console.warn(`VRMExpressionLoaderPlugin: An expression preset ${d} has duplicated entries. Ignoring the expression`);return}l.add(_);const M=new Ma(_);t.scene.add(M),M.isBinary=(h=c.isBinary)!=null?h:!1,c.binds&&c.binds.forEach(f=>Ke(this,null,function*(){var p;if(f.mesh===void 0||f.index===void 0)return;const T=[];(p=i.nodes)==null||p.forEach((R,C)=>{R.mesh===f.mesh&&T.push(C)});const A=f.index;yield Promise.all(T.map(R=>Ke(this,null,function*(){var C;const b=yield xa(t,R);if(!b.every(y=>Array.isArray(y.morphTargetInfluences)&&A<y.morphTargetInfluences.length)){console.warn(`VRMExpressionLoaderPlugin: ${c.name} attempts to index ${A}th morph but not found.`);return}M.addBind(new Oi({primitives:b,index:A,weight:.01*((C=f.weight)!=null?C:100)}))})))}));const x=c.materialValues;x&&x.length!==0&&x.forEach(f=>{if(f.materialName===void 0||f.propertyName===void 0||f.targetValue===void 0)return;const p=[];t.scene.traverse(A=>{if(A.material){const R=A.material;Array.isArray(R)?p.push(...R.filter(C=>(C.name===f.materialName||C.name===f.materialName+" (Outline)")&&p.indexOf(C)===-1)):R.name===f.materialName&&p.indexOf(R)===-1&&p.push(R)}});const T=f.propertyName;p.forEach(A=>{if(T==="_MainTex_ST"){const C=new dt(f.targetValue[0],f.targetValue[1]),b=new dt(f.targetValue[2],f.targetValue[3]);b.y=1-b.y-C.y,M.addBind(new Aa({material:A,scale:C,offset:b}));return}const R=Am[T];if(R){M.addBind(new Ta({material:A,type:R,targetValue:new Fe().fromArray(f.targetValue),targetAlpha:f.targetValue[3]}));return}console.warn(T+" is not supported")})}),a.registerExpression(M)}))),a})}};qs.v0v1PresetNameMap={a:"aa",e:"ee",i:"ih",o:"oh",u:"ou",blink:"blink",joy:"happy",angry:"angry",sorrow:"sad",fun:"relaxed",lookup:"lookUp",lookdown:"lookDown",lookleft:"lookLeft",lookright:"lookRight",blink_l:"blinkLeft",blink_r:"blinkRight",neutral:"neutral"};var Pm=qs,qr=class Pn{constructor(t,n){this._firstPersonOnlyLayer=Pn.DEFAULT_FIRSTPERSON_ONLY_LAYER,this._thirdPersonOnlyLayer=Pn.DEFAULT_THIRDPERSON_ONLY_LAYER,this._initializedLayers=!1,this.humanoid=t,this.meshAnnotations=n}copy(t){if(this.humanoid!==t.humanoid)throw new Error("VRMFirstPerson: humanoid must be same in order to copy");return this.meshAnnotations=t.meshAnnotations.map(n=>({meshes:n.meshes.concat(),type:n.type})),this}clone(){return new Pn(this.humanoid,this.meshAnnotations).copy(this)}get firstPersonOnlyLayer(){return this._firstPersonOnlyLayer}get thirdPersonOnlyLayer(){return this._thirdPersonOnlyLayer}setup({firstPersonOnlyLayer:t=Pn.DEFAULT_FIRSTPERSON_ONLY_LAYER,thirdPersonOnlyLayer:n=Pn.DEFAULT_THIRDPERSON_ONLY_LAYER}={}){this._initializedLayers||(this._firstPersonOnlyLayer=t,this._thirdPersonOnlyLayer=n,this.meshAnnotations.forEach(i=>{i.meshes.forEach(r=>{i.type==="firstPersonOnly"?(r.layers.set(this._firstPersonOnlyLayer),r.traverse(o=>o.layers.set(this._firstPersonOnlyLayer))):i.type==="thirdPersonOnly"?(r.layers.set(this._thirdPersonOnlyLayer),r.traverse(o=>o.layers.set(this._thirdPersonOnlyLayer))):i.type==="auto"&&this._createHeadlessModel(r)})}),this._initializedLayers=!0)}_excludeTriangles(t,n,i,r){let o=0;if(n!=null&&n.length>0)for(let a=0;a<t.length;a+=3){const s=t[a],l=t[a+1],c=t[a+2],h=n[s],d=i[s];if(h[0]>0&&r.includes(d[0])||h[1]>0&&r.includes(d[1])||h[2]>0&&r.includes(d[2])||h[3]>0&&r.includes(d[3]))continue;const u=n[l],_=i[l];if(u[0]>0&&r.includes(_[0])||u[1]>0&&r.includes(_[1])||u[2]>0&&r.includes(_[2])||u[3]>0&&r.includes(_[3]))continue;const M=n[c],x=i[c];M[0]>0&&r.includes(x[0])||M[1]>0&&r.includes(x[1])||M[2]>0&&r.includes(x[2])||M[3]>0&&r.includes(x[3])||(t[o++]=s,t[o++]=l,t[o++]=c)}return o}_createErasedMesh(t,n){const i=new Ps(t.geometry.clone(),t.material);i.name=`${t.name}(erase)`,i.frustumCulled=t.frustumCulled,i.layers.set(this._firstPersonOnlyLayer);const r=i.geometry,o=r.getAttribute("skinIndex"),a=o instanceof Wo?[]:o.array,s=[];for(let x=0;x<a.length;x+=4)s.push([a[x],a[x+1],a[x+2],a[x+3]]);const l=r.getAttribute("skinWeight"),c=l instanceof Wo?[]:l.array,h=[];for(let x=0;x<c.length;x+=4)h.push([c[x],c[x+1],c[x+2],c[x+3]]);const d=r.getIndex();if(!d)throw new Error("The geometry doesn't have an index buffer");const u=Array.from(d.array),_=this._excludeTriangles(u,h,s,n),M=[];for(let x=0;x<_;x++)M[x]=u[x];return r.setIndex(M),t.onBeforeRender&&(i.onBeforeRender=t.onBeforeRender),i.bind(new ki(t.skeleton.bones,t.skeleton.boneInverses),new ht),i}_createHeadlessModelForSkinnedMesh(t,n){const i=[];if(n.skeleton.bones.forEach((o,a)=>{this._isEraseTarget(o)&&i.push(a)}),!i.length){n.layers.enable(this._thirdPersonOnlyLayer),n.layers.enable(this._firstPersonOnlyLayer);return}n.layers.set(this._thirdPersonOnlyLayer);const r=this._createErasedMesh(n,i);t.add(r)}_createHeadlessModel(t){if(t.type==="Group")if(t.layers.set(this._thirdPersonOnlyLayer),this._isEraseTarget(t))t.traverse(n=>n.layers.set(this._thirdPersonOnlyLayer));else{const n=new jt;n.name=`_headless_${t.name}`,n.layers.set(this._firstPersonOnlyLayer),t.parent.add(n),t.children.filter(i=>i.type==="SkinnedMesh").forEach(i=>{const r=i;this._createHeadlessModelForSkinnedMesh(n,r)})}else if(t.type==="SkinnedMesh"){const n=t;this._createHeadlessModelForSkinnedMesh(t.parent,n)}else this._isEraseTarget(t)&&(t.layers.set(this._thirdPersonOnlyLayer),t.traverse(n=>n.layers.set(this._thirdPersonOnlyLayer)))}_isEraseTarget(t){return t===this.humanoid.getRawBoneNode("head")?!0:t.parent?this._isEraseTarget(t.parent):!1}};qr.DEFAULT_FIRSTPERSON_ONLY_LAYER=9;qr.DEFAULT_THIRDPERSON_ONLY_LAYER=10;var ba=qr,Cm=new Set(["1.0","1.0-beta"]),Lm=class{get name(){return"VRMFirstPersonLoaderPlugin"}constructor(e){this.parser=e}afterRoot(e){return Ke(this,null,function*(){const t=e.userData.vrmHumanoid;if(t!==null){if(t===void 0)throw new Error("VRMFirstPersonLoaderPlugin: vrmHumanoid is undefined. VRMHumanoidLoaderPlugin have to be used first");e.userData.vrmFirstPerson=yield this._import(e,t)}})}_import(e,t){return Ke(this,null,function*(){if(t==null)return null;const n=yield this._v1Import(e,t);if(n)return n;const i=yield this._v0Import(e,t);return i||null})}_v1Import(e,t){return Ke(this,null,function*(){var n,i;const r=this.parser.json;if(!(((n=r.extensionsUsed)==null?void 0:n.indexOf("VRMC_vrm"))!==-1))return null;const a=(i=r.extensions)==null?void 0:i.VRMC_vrm;if(!a)return null;const s=a.specVersion;if(!Cm.has(s))return console.warn(`VRMFirstPersonLoaderPlugin: Unknown VRMC_vrm specVersion "${s}"`),null;const l=a.firstPerson,c=[],h=yield Sa(e);return Array.from(h.entries()).forEach(([d,u])=>{var _,M;const x=(_=l?.meshAnnotations)==null?void 0:_.find(f=>f.node===d);c.push({meshes:u,type:(M=x?.type)!=null?M:"auto"})}),new ba(t,c)})}_v0Import(e,t){return Ke(this,null,function*(){var n;const i=this.parser.json,r=(n=i.extensions)==null?void 0:n.VRM;if(!r)return null;const o=r.firstPerson;if(!o)return null;const a=[],s=yield Sa(e);return Array.from(s.entries()).forEach(([l,c])=>{const h=i.nodes[l],d=o.meshAnnotations?o.meshAnnotations.find(u=>u.mesh===h.mesh):void 0;a.push({meshes:c,type:this._convertV0FlagToV1Type(d?.firstPersonFlag)})}),new ba(t,a)})}_convertV0FlagToV1Type(e){return e==="FirstPersonOnly"?"firstPersonOnly":e==="ThirdPersonOnly"?"thirdPersonOnly":e==="Both"?"both":"auto"}},wa=new j,Pa=new j,ym=new Xe,Ca=class extends jt{constructor(e){super(),this.vrmHumanoid=e,this._boneAxesMap=new Map,Object.values(e.humanBones).forEach(t=>{const n=new Vc(1);n.matrixAutoUpdate=!1,n.material.depthTest=!1,n.material.depthWrite=!1,this.add(n),this._boneAxesMap.set(t,n)})}dispose(){Array.from(this._boneAxesMap.values()).forEach(e=>{e.geometry.dispose(),e.material.dispose()})}updateMatrixWorld(e){Array.from(this._boneAxesMap.entries()).forEach(([t,n])=>{t.node.updateWorldMatrix(!0,!1),t.node.matrixWorld.decompose(wa,ym,Pa);const i=wa.set(.1,.1,.1).divide(Pa);n.matrix.copy(t.node.matrixWorld).scale(i)}),super.updateMatrixWorld(e)}},mr=["hips","spine","chest","upperChest","neck","head","leftEye","rightEye","jaw","leftUpperLeg","leftLowerLeg","leftFoot","leftToes","rightUpperLeg","rightLowerLeg","rightFoot","rightToes","leftShoulder","leftUpperArm","leftLowerArm","leftHand","rightShoulder","rightUpperArm","rightLowerArm","rightHand","leftThumbMetacarpal","leftThumbProximal","leftThumbDistal","leftIndexProximal","leftIndexIntermediate","leftIndexDistal","leftMiddleProximal","leftMiddleIntermediate","leftMiddleDistal","leftRingProximal","leftRingIntermediate","leftRingDistal","leftLittleProximal","leftLittleIntermediate","leftLittleDistal","rightThumbMetacarpal","rightThumbProximal","rightThumbDistal","rightIndexProximal","rightIndexIntermediate","rightIndexDistal","rightMiddleProximal","rightMiddleIntermediate","rightMiddleDistal","rightRingProximal","rightRingIntermediate","rightRingDistal","rightLittleProximal","rightLittleIntermediate","rightLittleDistal"],Im={hips:null,spine:"hips",chest:"spine",upperChest:"chest",neck:"upperChest",head:"neck",leftEye:"head",rightEye:"head",jaw:"head",leftUpperLeg:"hips",leftLowerLeg:"leftUpperLeg",leftFoot:"leftLowerLeg",leftToes:"leftFoot",rightUpperLeg:"hips",rightLowerLeg:"rightUpperLeg",rightFoot:"rightLowerLeg",rightToes:"rightFoot",leftShoulder:"upperChest",leftUpperArm:"leftShoulder",leftLowerArm:"leftUpperArm",leftHand:"leftLowerArm",rightShoulder:"upperChest",rightUpperArm:"rightShoulder",rightLowerArm:"rightUpperArm",rightHand:"rightLowerArm",leftThumbMetacarpal:"leftHand",leftThumbProximal:"leftThumbMetacarpal",leftThumbDistal:"leftThumbProximal",leftIndexProximal:"leftHand",leftIndexIntermediate:"leftIndexProximal",leftIndexDistal:"leftIndexIntermediate",leftMiddleProximal:"leftHand",leftMiddleIntermediate:"leftMiddleProximal",leftMiddleDistal:"leftMiddleIntermediate",leftRingProximal:"leftHand",leftRingIntermediate:"leftRingProximal",leftRingDistal:"leftRingIntermediate",leftLittleProximal:"leftHand",leftLittleIntermediate:"leftLittleProximal",leftLittleDistal:"leftLittleIntermediate",rightThumbMetacarpal:"rightHand",rightThumbProximal:"rightThumbMetacarpal",rightThumbDistal:"rightThumbProximal",rightIndexProximal:"rightHand",rightIndexIntermediate:"rightIndexProximal",rightIndexDistal:"rightIndexIntermediate",rightMiddleProximal:"rightHand",rightMiddleIntermediate:"rightMiddleProximal",rightMiddleDistal:"rightMiddleIntermediate",rightRingProximal:"rightHand",rightRingIntermediate:"rightRingProximal",rightRingDistal:"rightRingIntermediate",rightLittleProximal:"rightHand",rightLittleIntermediate:"rightLittleProximal",rightLittleDistal:"rightLittleIntermediate"};function js(e){return e.invert?e.invert():e.inverse(),e}var fn=new j,hn=new Xe,Dr=class{constructor(e){this.humanBones=e,this.restPose=this.getAbsolutePose()}getAbsolutePose(){const e={};return Object.keys(this.humanBones).forEach(t=>{const n=t,i=this.getBoneNode(n);i&&(fn.copy(i.position),hn.copy(i.quaternion),e[n]={position:fn.toArray(),rotation:hn.toArray()})}),e}getPose(){const e={};return Object.keys(this.humanBones).forEach(t=>{const n=t,i=this.getBoneNode(n);if(!i)return;fn.set(0,0,0),hn.identity();const r=this.restPose[n];r?.position&&fn.fromArray(r.position).negate(),r?.rotation&&js(hn.fromArray(r.rotation)),fn.add(i.position),hn.premultiply(i.quaternion),e[n]={position:fn.toArray(),rotation:hn.toArray()}}),e}setPose(e){Object.entries(e).forEach(([t,n])=>{const i=t,r=this.getBoneNode(i);if(!r)return;const o=this.restPose[i];o&&(n?.position&&(r.position.fromArray(n.position),o.position&&r.position.add(fn.fromArray(o.position))),n?.rotation&&(r.quaternion.fromArray(n.rotation),o.rotation&&r.quaternion.multiply(hn.fromArray(o.rotation))))})}resetPose(){Object.entries(this.restPose).forEach(([e,t])=>{const n=this.getBoneNode(e);n&&(t?.position&&n.position.fromArray(t.position),t?.rotation&&n.quaternion.fromArray(t.rotation))})}getBone(e){var t;return(t=this.humanBones[e])!=null?t:void 0}getBoneNode(e){var t,n;return(n=(t=this.humanBones[e])==null?void 0:t.node)!=null?n:null}},_r=new j,Um=new Xe,Nm=new j,La=class $s extends Dr{static _setupTransforms(t){const n=new Fn;n.name="VRMHumanoidRig";const i={},r={},o={};mr.forEach(s=>{var l;const c=t.getBoneNode(s);if(c){const h=new j,d=new Xe;c.updateWorldMatrix(!0,!1),c.matrixWorld.decompose(h,d,_r),i[s]=h,r[s]=c.quaternion.clone();const u=new Xe;(l=c.parent)==null||l.matrixWorld.decompose(_r,u,_r),o[s]=u}});const a={};return mr.forEach(s=>{var l;const c=t.getBoneNode(s);if(c){const h=i[s];let d=s,u;for(;u==null&&(d=Im[d],d!=null);)u=i[d];const _=new Fn;_.name="Normalized_"+c.name,(d?(l=a[d])==null?void 0:l.node:n).add(_),_.position.copy(h),u&&_.position.sub(u),a[s]={node:_}}}),{rigBones:a,root:n,parentWorldRotations:o,boneRotations:r}}constructor(t){const{rigBones:n,root:i,parentWorldRotations:r,boneRotations:o}=$s._setupTransforms(t);super(n),this.original=t,this.root=i,this._parentWorldRotations=r,this._boneRotations=o}update(){mr.forEach(t=>{const n=this.original.getBoneNode(t);if(n!=null){const i=this.getBoneNode(t),r=this._parentWorldRotations[t],o=Um.copy(r).invert(),a=this._boneRotations[t];if(n.quaternion.copy(i.quaternion).multiply(r).premultiply(o).multiply(a),t==="hips"){const s=i.getWorldPosition(Nm);n.parent.updateWorldMatrix(!0,!1);const l=n.parent.matrixWorld,c=s.applyMatrix4(l.invert());n.position.copy(c)}}})}},ya=class Zs{get restPose(){return console.warn("VRMHumanoid: restPose is deprecated. Use either rawRestPose or normalizedRestPose instead."),this.rawRestPose}get rawRestPose(){return this._rawHumanBones.restPose}get normalizedRestPose(){return this._normalizedHumanBones.restPose}get humanBones(){return this._rawHumanBones.humanBones}get rawHumanBones(){return this._rawHumanBones.humanBones}get normalizedHumanBones(){return this._normalizedHumanBones.humanBones}get normalizedHumanBonesRoot(){return this._normalizedHumanBones.root}constructor(t,n){var i;this.autoUpdateHumanBones=(i=n?.autoUpdateHumanBones)!=null?i:!0,this._rawHumanBones=new Dr(t),this._normalizedHumanBones=new La(this._rawHumanBones)}copy(t){return this.autoUpdateHumanBones=t.autoUpdateHumanBones,this._rawHumanBones=new Dr(t.humanBones),this._normalizedHumanBones=new La(this._rawHumanBones),this}clone(){return new Zs(this.humanBones,{autoUpdateHumanBones:this.autoUpdateHumanBones}).copy(this)}getAbsolutePose(){return console.warn("VRMHumanoid: getAbsolutePose() is deprecated. Use either getRawAbsolutePose() or getNormalizedAbsolutePose() instead."),this.getRawAbsolutePose()}getRawAbsolutePose(){return this._rawHumanBones.getAbsolutePose()}getNormalizedAbsolutePose(){return this._normalizedHumanBones.getAbsolutePose()}getPose(){return console.warn("VRMHumanoid: getPose() is deprecated. Use either getRawPose() or getNormalizedPose() instead."),this.getRawPose()}getRawPose(){return this._rawHumanBones.getPose()}getNormalizedPose(){return this._normalizedHumanBones.getPose()}setPose(t){return console.warn("VRMHumanoid: setPose() is deprecated. Use either setRawPose() or setNormalizedPose() instead."),this.setRawPose(t)}setRawPose(t){return this._rawHumanBones.setPose(t)}setNormalizedPose(t){return this._normalizedHumanBones.setPose(t)}resetPose(){return console.warn("VRMHumanoid: resetPose() is deprecated. Use either resetRawPose() or resetNormalizedPose() instead."),this.resetRawPose()}resetRawPose(){return this._rawHumanBones.resetPose()}resetNormalizedPose(){return this._normalizedHumanBones.resetPose()}getBone(t){return console.warn("VRMHumanoid: getBone() is deprecated. Use either getRawBone() or getNormalizedBone() instead."),this.getRawBone(t)}getRawBone(t){return this._rawHumanBones.getBone(t)}getNormalizedBone(t){return this._normalizedHumanBones.getBone(t)}getBoneNode(t){return console.warn("VRMHumanoid: getBoneNode() is deprecated. Use either getRawBoneNode() or getNormalizedBoneNode() instead."),this.getRawBoneNode(t)}getRawBoneNode(t){return this._rawHumanBones.getBoneNode(t)}getNormalizedBoneNode(t){return this._normalizedHumanBones.getBoneNode(t)}update(){this.autoUpdateHumanBones&&this._normalizedHumanBones.update()}},Dm={Hips:"hips",Spine:"spine",Head:"head",LeftUpperLeg:"leftUpperLeg",LeftLowerLeg:"leftLowerLeg",LeftFoot:"leftFoot",RightUpperLeg:"rightUpperLeg",RightLowerLeg:"rightLowerLeg",RightFoot:"rightFoot",LeftUpperArm:"leftUpperArm",LeftLowerArm:"leftLowerArm",LeftHand:"leftHand",RightUpperArm:"rightUpperArm",RightLowerArm:"rightLowerArm",RightHand:"rightHand"},Om=new Set(["1.0","1.0-beta"]),Ia={leftThumbProximal:"leftThumbMetacarpal",leftThumbIntermediate:"leftThumbProximal",rightThumbProximal:"rightThumbMetacarpal",rightThumbIntermediate:"rightThumbProximal"},Fm=class{get name(){return"VRMHumanoidLoaderPlugin"}constructor(e,t){this.parser=e,this.helperRoot=t?.helperRoot,this.autoUpdateHumanBones=t?.autoUpdateHumanBones}afterRoot(e){return Ke(this,null,function*(){e.userData.vrmHumanoid=yield this._import(e)})}_import(e){return Ke(this,null,function*(){const t=yield this._v1Import(e);if(t)return t;const n=yield this._v0Import(e);return n||null})}_v1Import(e){return Ke(this,null,function*(){var t,n;const i=this.parser.json;if(!(((t=i.extensionsUsed)==null?void 0:t.indexOf("VRMC_vrm"))!==-1))return null;const o=(n=i.extensions)==null?void 0:n.VRMC_vrm;if(!o)return null;const a=o.specVersion;if(!Om.has(a))return console.warn(`VRMHumanoidLoaderPlugin: Unknown VRMC_vrm specVersion "${a}"`),null;const s=o.humanoid;if(!s)return null;const l=s.humanBones.leftThumbIntermediate!=null||s.humanBones.rightThumbIntermediate!=null,c={};s.humanBones!=null&&(yield Promise.all(Object.entries(s.humanBones).map(d=>Ke(this,[d],function*([u,_]){let M=u;const x=_.node;if(l){const p=Ia[M];p!=null&&(M=p)}const f=yield this.parser.getDependency("node",x);if(f==null){console.warn(`A glTF node bound to the humanoid bone ${M} (index = ${x}) does not exist`);return}c[M]={node:f}}))));const h=new ya(this._ensureRequiredBonesExist(c),{autoUpdateHumanBones:this.autoUpdateHumanBones});if(e.scene.add(h.normalizedHumanBonesRoot),this.helperRoot){const d=new Ca(h);this.helperRoot.add(d),d.renderOrder=this.helperRoot.renderOrder}return h})}_v0Import(e){return Ke(this,null,function*(){var t;const i=(t=this.parser.json.extensions)==null?void 0:t.VRM;if(!i)return null;const r=i.humanoid;if(!r)return null;const o={};r.humanBones!=null&&(yield Promise.all(r.humanBones.map(s=>Ke(this,null,function*(){const l=s.bone,c=s.node;if(l==null||c==null)return;const h=yield this.parser.getDependency("node",c);if(h==null){console.warn(`A glTF node bound to the humanoid bone ${l} (index = ${c}) does not exist`);return}const d=Ia[l],u=d??l;if(o[u]!=null){console.warn(`Multiple bone entries for ${u} detected (index = ${c}), ignoring duplicated entries.`);return}o[u]={node:h}}))));const a=new ya(this._ensureRequiredBonesExist(o),{autoUpdateHumanBones:this.autoUpdateHumanBones});if(e.scene.add(a.normalizedHumanBonesRoot),this.helperRoot){const s=new Ca(a);this.helperRoot.add(s),s.renderOrder=this.helperRoot.renderOrder}return a})}_ensureRequiredBonesExist(e){const t=Object.values(Dm).filter(n=>e[n]==null);if(t.length>0)throw new Error(`VRMHumanoidLoaderPlugin: These humanoid bones are required but not exist: ${t.join(", ")}`);return e}},Ua=class extends Tt{constructor(){super(),this._currentTheta=0,this._currentRadius=0,this.theta=0,this.radius=0,this._currentTheta=0,this._currentRadius=0,this._attrPos=new at(new Float32Array(195),3),this.setAttribute("position",this._attrPos),this._attrIndex=new at(new Uint16Array(189),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let e=!1;this._currentTheta!==this.theta&&(this._currentTheta=this.theta,e=!0),this._currentRadius!==this.radius&&(this._currentRadius=this.radius,e=!0),e&&this._buildPosition()}_buildPosition(){this._attrPos.setXYZ(0,0,0,0);for(let e=0;e<64;e++){const t=e/63*this._currentTheta;this._attrPos.setXYZ(e+1,this._currentRadius*Math.sin(t),0,this._currentRadius*Math.cos(t))}this._attrPos.needsUpdate=!0}_buildIndex(){for(let e=0;e<63;e++)this._attrIndex.setXYZ(e*3,0,e+1,e+2);this._attrIndex.needsUpdate=!0}},Bm=class extends Tt{constructor(){super(),this.radius=0,this._currentRadius=0,this.tail=new j,this._currentTail=new j,this._attrPos=new at(new Float32Array(294),3),this.setAttribute("position",this._attrPos),this._attrIndex=new at(new Uint16Array(194),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let e=!1;this._currentRadius!==this.radius&&(this._currentRadius=this.radius,e=!0),this._currentTail.equals(this.tail)||(this._currentTail.copy(this.tail),e=!0),e&&this._buildPosition()}_buildPosition(){for(let e=0;e<32;e++){const t=e/16*Math.PI;this._attrPos.setXYZ(e,Math.cos(t),Math.sin(t),0),this._attrPos.setXYZ(32+e,0,Math.cos(t),Math.sin(t)),this._attrPos.setXYZ(64+e,Math.sin(t),0,Math.cos(t))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.setXYZ(96,0,0,0),this._attrPos.setXYZ(97,this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let e=0;e<32;e++){const t=(e+1)%32;this._attrIndex.setXY(e*2,e,t),this._attrIndex.setXY(64+e*2,32+e,32+t),this._attrIndex.setXY(128+e*2,64+e,64+t)}this._attrIndex.setXY(192,96,97),this._attrIndex.needsUpdate=!0}},xi=new Xe,Na=new Xe,Kn=new j,Da=new j,Oa=Math.sqrt(2)/2,Vm=new Xe(0,0,-Oa,Oa),Hm=new j(0,1,0),Gm=class extends jt{constructor(e){super(),this.matrixAutoUpdate=!1,this.vrmLookAt=e;{const t=new Ua;t.radius=.5;const n=new rn({color:65280,transparent:!0,opacity:.5,side:Ct,depthTest:!1,depthWrite:!1});this._meshPitch=new bt(t,n),this.add(this._meshPitch)}{const t=new Ua;t.radius=.5;const n=new rn({color:16711680,transparent:!0,opacity:.5,side:Ct,depthTest:!1,depthWrite:!1});this._meshYaw=new bt(t,n),this.add(this._meshYaw)}{const t=new Bm;t.radius=.1;const n=new li({color:16777215,depthTest:!1,depthWrite:!1});this._lineTarget=new Gi(t,n),this._lineTarget.frustumCulled=!1,this.add(this._lineTarget)}}dispose(){this._meshYaw.geometry.dispose(),this._meshYaw.material.dispose(),this._meshPitch.geometry.dispose(),this._meshPitch.material.dispose(),this._lineTarget.geometry.dispose(),this._lineTarget.material.dispose()}updateMatrixWorld(e){const t=ct.DEG2RAD*this.vrmLookAt.yaw;this._meshYaw.geometry.theta=t,this._meshYaw.geometry.update();const n=ct.DEG2RAD*this.vrmLookAt.pitch;this._meshPitch.geometry.theta=n,this._meshPitch.geometry.update(),this.vrmLookAt.getLookAtWorldPosition(Kn),this.vrmLookAt.getLookAtWorldQuaternion(xi),xi.multiply(this.vrmLookAt.getFaceFrontQuaternion(Na)),this._meshYaw.position.copy(Kn),this._meshYaw.quaternion.copy(xi),this._meshPitch.position.copy(Kn),this._meshPitch.quaternion.copy(xi),this._meshPitch.quaternion.multiply(Na.setFromAxisAngle(Hm,t)),this._meshPitch.quaternion.multiply(Vm);const{target:i,autoUpdate:r}=this.vrmLookAt;i!=null&&r&&(i.getWorldPosition(Da).sub(Kn),this._lineTarget.geometry.tail.copy(Da),this._lineTarget.geometry.update(),this._lineTarget.position.copy(Kn)),super.updateMatrixWorld(e)}},km=new j,Wm=new j;function Or(e,t){return e.matrixWorld.decompose(km,t,Wm),t}function Ci(e){return[Math.atan2(-e.z,e.x),Math.atan2(e.y,Math.sqrt(e.x*e.x+e.z*e.z))]}function Fa(e){const t=Math.round(e/2/Math.PI);return e-2*Math.PI*t}var Ba=new j(0,0,1),zm=new j,Xm=new j,Ym=new j,qm=new Xe,gr=new Xe,Va=new Xe,Km=new Xe,vr=new si,Qs=class Js{constructor(t,n){this.offsetFromHeadBone=new j,this.autoUpdate=!0,this.faceFront=new j(0,0,1),this.humanoid=t,this.applier=n,this._yaw=0,this._pitch=0,this._needsUpdate=!0,this._restHeadWorldQuaternion=this.getLookAtWorldQuaternion(new Xe)}get yaw(){return this._yaw}set yaw(t){this._yaw=t,this._needsUpdate=!0}get pitch(){return this._pitch}set pitch(t){this._pitch=t,this._needsUpdate=!0}get euler(){return console.warn("VRMLookAt: euler is deprecated. use getEuler() instead."),this.getEuler(new si)}getEuler(t){return t.set(ct.DEG2RAD*this._pitch,ct.DEG2RAD*this._yaw,0,"YXZ")}copy(t){if(this.humanoid!==t.humanoid)throw new Error("VRMLookAt: humanoid must be same in order to copy");return this.offsetFromHeadBone.copy(t.offsetFromHeadBone),this.applier=t.applier,this.autoUpdate=t.autoUpdate,this.target=t.target,this.faceFront.copy(t.faceFront),this}clone(){return new Js(this.humanoid,this.applier).copy(this)}reset(){this._yaw=0,this._pitch=0,this._needsUpdate=!0}getLookAtWorldPosition(t){const n=this.humanoid.getRawBoneNode("head");return t.copy(this.offsetFromHeadBone).applyMatrix4(n.matrixWorld)}getLookAtWorldQuaternion(t){const n=this.humanoid.getRawBoneNode("head");return Or(n,t)}getFaceFrontQuaternion(t){if(this.faceFront.distanceToSquared(Ba)<.01)return t.copy(this._restHeadWorldQuaternion).invert();const[n,i]=Ci(this.faceFront);return vr.set(0,.5*Math.PI+n,i,"YZX"),t.setFromEuler(vr).premultiply(Km.copy(this._restHeadWorldQuaternion).invert())}getLookAtWorldDirection(t){return this.getLookAtWorldQuaternion(gr),this.getFaceFrontQuaternion(Va),t.copy(Ba).applyQuaternion(gr).applyQuaternion(Va).applyEuler(this.getEuler(vr))}lookAt(t){const n=qm.copy(this._restHeadWorldQuaternion).multiply(js(this.getLookAtWorldQuaternion(gr))),i=this.getLookAtWorldPosition(Xm),r=Ym.copy(t).sub(i).applyQuaternion(n).normalize(),[o,a]=Ci(this.faceFront),[s,l]=Ci(r),c=Fa(s-o),h=Fa(a-l);this._yaw=ct.RAD2DEG*c,this._pitch=ct.RAD2DEG*h,this._needsUpdate=!0}update(t){this.target!=null&&this.autoUpdate&&this.lookAt(this.target.getWorldPosition(zm)),this._needsUpdate&&(this._needsUpdate=!1,this.applier.applyYawPitch(this._yaw,this._pitch))}};Qs.EULER_ORDER="YXZ";var jm=Qs,$m=new j(0,0,1),Dt=new Xe,Rn=new Xe,wt=new si(0,0,0,"YXZ"),Li=class{constructor(e,t,n,i,r){this.humanoid=e,this.rangeMapHorizontalInner=t,this.rangeMapHorizontalOuter=n,this.rangeMapVerticalDown=i,this.rangeMapVerticalUp=r,this.faceFront=new j(0,0,1),this._restQuatLeftEye=new Xe,this._restQuatRightEye=new Xe,this._restLeftEyeParentWorldQuat=new Xe,this._restRightEyeParentWorldQuat=new Xe;const o=this.humanoid.getRawBoneNode("leftEye"),a=this.humanoid.getRawBoneNode("rightEye");o&&(this._restQuatLeftEye.copy(o.quaternion),Or(o.parent,this._restLeftEyeParentWorldQuat)),a&&(this._restQuatRightEye.copy(a.quaternion),Or(a.parent,this._restRightEyeParentWorldQuat))}applyYawPitch(e,t){const n=this.humanoid.getRawBoneNode("leftEye"),i=this.humanoid.getRawBoneNode("rightEye"),r=this.humanoid.getNormalizedBoneNode("leftEye"),o=this.humanoid.getNormalizedBoneNode("rightEye");n&&(t<0?wt.x=-ct.DEG2RAD*this.rangeMapVerticalDown.map(-t):wt.x=ct.DEG2RAD*this.rangeMapVerticalUp.map(t),e<0?wt.y=-ct.DEG2RAD*this.rangeMapHorizontalInner.map(-e):wt.y=ct.DEG2RAD*this.rangeMapHorizontalOuter.map(e),Dt.setFromEuler(wt),this._getWorldFaceFrontQuat(Rn),r.quaternion.copy(Rn).multiply(Dt).multiply(Rn.invert()),Dt.copy(this._restLeftEyeParentWorldQuat),n.quaternion.copy(r.quaternion).multiply(Dt).premultiply(Dt.invert()).multiply(this._restQuatLeftEye)),i&&(t<0?wt.x=-ct.DEG2RAD*this.rangeMapVerticalDown.map(-t):wt.x=ct.DEG2RAD*this.rangeMapVerticalUp.map(t),e<0?wt.y=-ct.DEG2RAD*this.rangeMapHorizontalOuter.map(-e):wt.y=ct.DEG2RAD*this.rangeMapHorizontalInner.map(e),Dt.setFromEuler(wt),this._getWorldFaceFrontQuat(Rn),o.quaternion.copy(Rn).multiply(Dt).multiply(Rn.invert()),Dt.copy(this._restRightEyeParentWorldQuat),i.quaternion.copy(o.quaternion).multiply(Dt).premultiply(Dt.invert()).multiply(this._restQuatRightEye))}lookAt(e){console.warn("VRMLookAtBoneApplier: lookAt() is deprecated. use apply() instead.");const t=ct.RAD2DEG*e.y,n=ct.RAD2DEG*e.x;this.applyYawPitch(t,n)}_getWorldFaceFrontQuat(e){if(this.faceFront.distanceToSquared($m)<.01)return e.identity();const[t,n]=Ci(this.faceFront);return wt.set(0,.5*Math.PI+t,n,"YZX"),e.setFromEuler(wt)}};Li.type="bone";var Fr=class{constructor(e,t,n,i,r){this.expressions=e,this.rangeMapHorizontalInner=t,this.rangeMapHorizontalOuter=n,this.rangeMapVerticalDown=i,this.rangeMapVerticalUp=r}applyYawPitch(e,t){t<0?(this.expressions.setValue("lookDown",0),this.expressions.setValue("lookUp",this.rangeMapVerticalUp.map(-t))):(this.expressions.setValue("lookUp",0),this.expressions.setValue("lookDown",this.rangeMapVerticalDown.map(t))),e<0?(this.expressions.setValue("lookLeft",0),this.expressions.setValue("lookRight",this.rangeMapHorizontalOuter.map(-e))):(this.expressions.setValue("lookRight",0),this.expressions.setValue("lookLeft",this.rangeMapHorizontalOuter.map(e)))}lookAt(e){console.warn("VRMLookAtBoneApplier: lookAt() is deprecated. use apply() instead.");const t=ct.RAD2DEG*e.y,n=ct.RAD2DEG*e.x;this.applyYawPitch(t,n)}};Fr.type="expression";var Ha=class{constructor(e,t){this.inputMaxValue=e,this.outputScale=t}map(e){return this.outputScale*Gs(e/this.inputMaxValue)}},Zm=new Set(["1.0","1.0-beta"]),Si=.01,Qm=class{get name(){return"VRMLookAtLoaderPlugin"}constructor(e,t){this.parser=e,this.helperRoot=t?.helperRoot}afterRoot(e){return Ke(this,null,function*(){const t=e.userData.vrmHumanoid;if(t===null)return;if(t===void 0)throw new Error("VRMLookAtLoaderPlugin: vrmHumanoid is undefined. VRMHumanoidLoaderPlugin have to be used first");const n=e.userData.vrmExpressionManager;if(n!==null){if(n===void 0)throw new Error("VRMLookAtLoaderPlugin: vrmExpressionManager is undefined. VRMExpressionLoaderPlugin have to be used first");e.userData.vrmLookAt=yield this._import(e,t,n)}})}_import(e,t,n){return Ke(this,null,function*(){if(t==null||n==null)return null;const i=yield this._v1Import(e,t,n);if(i)return i;const r=yield this._v0Import(e,t,n);return r||null})}_v1Import(e,t,n){return Ke(this,null,function*(){var i,r,o;const a=this.parser.json;if(!(((i=a.extensionsUsed)==null?void 0:i.indexOf("VRMC_vrm"))!==-1))return null;const l=(r=a.extensions)==null?void 0:r.VRMC_vrm;if(!l)return null;const c=l.specVersion;if(!Zm.has(c))return console.warn(`VRMLookAtLoaderPlugin: Unknown VRMC_vrm specVersion "${c}"`),null;const h=l.lookAt;if(!h)return null;const d=h.type==="expression"?1:10,u=this._v1ImportRangeMap(h.rangeMapHorizontalInner,d),_=this._v1ImportRangeMap(h.rangeMapHorizontalOuter,d),M=this._v1ImportRangeMap(h.rangeMapVerticalDown,d),x=this._v1ImportRangeMap(h.rangeMapVerticalUp,d);let f;h.type==="expression"?f=new Fr(n,u,_,M,x):f=new Li(t,u,_,M,x);const p=this._importLookAt(t,f);return p.offsetFromHeadBone.fromArray((o=h.offsetFromHeadBone)!=null?o:[0,.06,0]),p})}_v1ImportRangeMap(e,t){var n,i;let r=(n=e?.inputMaxValue)!=null?n:90;const o=(i=e?.outputScale)!=null?i:t;return r<Si&&(console.warn("VRMLookAtLoaderPlugin: inputMaxValue of a range map is too small. Consider reviewing the range map!"),r=Si),new Ha(r,o)}_v0Import(e,t,n){return Ke(this,null,function*(){var i,r,o,a;const l=(i=this.parser.json.extensions)==null?void 0:i.VRM;if(!l)return null;const c=l.firstPerson;if(!c)return null;const h=c.lookAtTypeName==="BlendShape"?1:10,d=this._v0ImportDegreeMap(c.lookAtHorizontalInner,h),u=this._v0ImportDegreeMap(c.lookAtHorizontalOuter,h),_=this._v0ImportDegreeMap(c.lookAtVerticalDown,h),M=this._v0ImportDegreeMap(c.lookAtVerticalUp,h);let x;c.lookAtTypeName==="BlendShape"?x=new Fr(n,d,u,_,M):x=new Li(t,d,u,_,M);const f=this._importLookAt(t,x);return c.firstPersonBoneOffset?f.offsetFromHeadBone.set((r=c.firstPersonBoneOffset.x)!=null?r:0,(o=c.firstPersonBoneOffset.y)!=null?o:.06,-((a=c.firstPersonBoneOffset.z)!=null?a:0)):f.offsetFromHeadBone.set(0,.06,0),f.faceFront.set(0,0,-1),x instanceof Li&&x.faceFront.set(0,0,-1),f})}_v0ImportDegreeMap(e,t){var n,i;const r=e?.curve;JSON.stringify(r)!=="[0,0,0,1,1,1,1,0]"&&console.warn("Curves of LookAtDegreeMap defined in VRM 0.0 are not supported");let o=(n=e?.xRange)!=null?n:90;const a=(i=e?.yRange)!=null?i:t;return o<Si&&(console.warn("VRMLookAtLoaderPlugin: xRange of a degree map is too small. Consider reviewing the degree map!"),o=Si),new Ha(o,a)}_importLookAt(e,t){const n=new jm(e,t);if(this.helperRoot){const i=new Gm(n);this.helperRoot.add(i),i.renderOrder=this.helperRoot.renderOrder}return n}};function Jm(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}var e_=new Set(["1.0","1.0-beta"]),t_=class{get name(){return"VRMMetaLoaderPlugin"}constructor(e,t){var n,i,r;this.parser=e,this.needThumbnailImage=(n=t?.needThumbnailImage)!=null?n:!1,this.acceptLicenseUrls=(i=t?.acceptLicenseUrls)!=null?i:["https://vrm.dev/licenses/1.0/"],this.acceptV0Meta=(r=t?.acceptV0Meta)!=null?r:!0}afterRoot(e){return Ke(this,null,function*(){e.userData.vrmMeta=yield this._import(e)})}_import(e){return Ke(this,null,function*(){const t=yield this._v1Import(e);if(t!=null)return t;const n=yield this._v0Import(e);return n??null})}_v1Import(e){return Ke(this,null,function*(){var t,n,i;const r=this.parser.json;if(!(((t=r.extensionsUsed)==null?void 0:t.indexOf("VRMC_vrm"))!==-1))return null;const a=(n=r.extensions)==null?void 0:n.VRMC_vrm;if(a==null)return null;const s=a.specVersion;if(!e_.has(s))return console.warn(`VRMMetaLoaderPlugin: Unknown VRMC_vrm specVersion "${s}"`),null;const l=a.meta;if(!l)return null;const c=l.licenseUrl;if(!new Set(this.acceptLicenseUrls).has(c))throw new Error(`VRMMetaLoaderPlugin: The license url "${c}" is not accepted`);let d;return this.needThumbnailImage&&l.thumbnailImage!=null&&(d=(i=yield this._extractGLTFImage(l.thumbnailImage))!=null?i:void 0),{metaVersion:"1",name:l.name,version:l.version,authors:l.authors,copyrightInformation:l.copyrightInformation,contactInformation:l.contactInformation,references:l.references,thirdPartyLicenses:l.thirdPartyLicenses,thumbnailImage:d,licenseUrl:l.licenseUrl,avatarPermission:l.avatarPermission,allowExcessivelyViolentUsage:l.allowExcessivelyViolentUsage,allowExcessivelySexualUsage:l.allowExcessivelySexualUsage,commercialUsage:l.commercialUsage,allowPoliticalOrReligiousUsage:l.allowPoliticalOrReligiousUsage,allowAntisocialOrHateUsage:l.allowAntisocialOrHateUsage,creditNotation:l.creditNotation,allowRedistribution:l.allowRedistribution,modification:l.modification,otherLicenseUrl:l.otherLicenseUrl}})}_v0Import(e){return Ke(this,null,function*(){var t;const i=(t=this.parser.json.extensions)==null?void 0:t.VRM;if(!i)return null;const r=i.meta;if(!r)return null;if(!this.acceptV0Meta)throw new Error("VRMMetaLoaderPlugin: Attempted to load VRM0.0 meta but acceptV0Meta is false");let o;return this.needThumbnailImage&&r.texture!=null&&r.texture!==-1&&(o=yield this.parser.getDependency("texture",r.texture)),{metaVersion:"0",allowedUserName:r.allowedUserName,author:r.author,commercialUssageName:r.commercialUssageName,contactInformation:r.contactInformation,licenseName:r.licenseName,otherLicenseUrl:r.otherLicenseUrl,otherPermissionUrl:r.otherPermissionUrl,reference:r.reference,sexualUssageName:r.sexualUssageName,texture:o??void 0,title:r.title,version:r.version,violentUssageName:r.violentUssageName}})}_extractGLTFImage(e){return Ke(this,null,function*(){var t;const i=(t=this.parser.json.images)==null?void 0:t[e];if(i==null)return console.warn(`VRMMetaLoaderPlugin: Attempt to use images[${e}] of glTF as a thumbnail but the image doesn't exist`),null;let r=i.uri;if(i.bufferView!=null){const a=yield this.parser.getDependency("bufferView",i.bufferView),s=new Blob([a],{type:i.mimeType});r=URL.createObjectURL(s)}return r==null?(console.warn(`VRMMetaLoaderPlugin: Attempt to use images[${e}] of glTF as a thumbnail but the image couldn't load properly`),null):yield new Fc().loadAsync(Jm(r,this.parser.options.path)).catch(a=>(console.error(a),console.warn("VRMMetaLoaderPlugin: Failed to load a thumbnail image"),null))})}},n_=class{constructor(e){this.scene=e.scene,this.meta=e.meta,this.humanoid=e.humanoid,this.expressionManager=e.expressionManager,this.firstPerson=e.firstPerson,this.lookAt=e.lookAt}update(e){this.humanoid.update(),this.lookAt&&this.lookAt.update(e),this.expressionManager&&this.expressionManager.update()}},i_=class extends n_{constructor(e){super(e),this.materials=e.materials,this.springBoneManager=e.springBoneManager,this.nodeConstraintManager=e.nodeConstraintManager}update(e){super.update(e),this.nodeConstraintManager&&this.nodeConstraintManager.update(),this.springBoneManager&&this.springBoneManager.update(e),this.materials&&this.materials.forEach(t=>{t.update&&t.update(e)})}},r_=Object.defineProperty,Ga=Object.getOwnPropertySymbols,o_=Object.prototype.hasOwnProperty,a_=Object.prototype.propertyIsEnumerable,ka=(e,t,n)=>t in e?r_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Wa=(e,t)=>{for(var n in t||(t={}))o_.call(t,n)&&ka(e,n,t[n]);if(Ga)for(var n of Ga(t))a_.call(t,n)&&ka(e,n,t[n]);return e},_n=(e,t,n)=>new Promise((i,r)=>{var o=l=>{try{s(n.next(l))}catch(c){r(c)}},a=l=>{try{s(n.throw(l))}catch(c){r(c)}},s=l=>l.done?i(l.value):Promise.resolve(l.value).then(o,a);s((n=n.apply(e,t)).next())}),s_={"":3e3,srgb:3001};function l_(e,t){parseInt(ii,10)>=152?e.colorSpace=t:e.encoding=s_[t]}var c_=class{get pending(){return Promise.all(this._pendings)}constructor(e,t){this._parser=e,this._materialParams=t,this._pendings=[]}assignPrimitive(e,t){t!=null&&(this._materialParams[e]=t)}assignColor(e,t,n){if(t!=null){const i=new Fe().fromArray(t);n&&i.convertSRGBToLinear(),this._materialParams[e]=i}}assignTexture(e,t,n){return _n(this,null,function*(){const i=_n(this,null,function*(){t!=null&&(yield this._parser.assignTexture(this._materialParams,e,t),n&&l_(this._materialParams[e],"srgb"))});return this._pendings.push(i),i})}assignTextureByIndex(e,t,n){return _n(this,null,function*(){return this.assignTexture(e,t!=null?{index:t}:void 0,n)})}},u_=`// #define PHONG

varying vec3 vViewPosition;

#ifndef FLAT_SHADED
  varying vec3 vNormal;
#endif

#include <common>

// #include <uv_pars_vertex>
#ifdef MTOON_USE_UV
  varying vec2 vUv;

  // COMPAT: pre-r151 uses a common uvTransform
  #if THREE_VRM_THREE_REVISION < 151
    uniform mat3 uvTransform;
  #endif
#endif

// #include <uv2_pars_vertex>
// COMAPT: pre-r151 uses uv2 for lightMap and aoMap
#if THREE_VRM_THREE_REVISION < 151
  #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
    attribute vec2 uv2;
    varying vec2 vUv2;
    uniform mat3 uv2Transform;
  #endif
#endif

// #include <displacementmap_pars_vertex>
// #include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

#ifdef USE_OUTLINEWIDTHMULTIPLYTEXTURE
  uniform sampler2D outlineWidthMultiplyTexture;
  uniform mat3 outlineWidthMultiplyTextureUvTransform;
#endif

uniform float outlineWidthFactor;

void main() {

  // #include <uv_vertex>
  #ifdef MTOON_USE_UV
    // COMPAT: pre-r151 uses a common uvTransform
    #if THREE_VRM_THREE_REVISION >= 151
      vUv = uv;
    #else
      vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
    #endif
  #endif

  // #include <uv2_vertex>
  // COMAPT: pre-r151 uses uv2 for lightMap and aoMap
  #if THREE_VRM_THREE_REVISION < 151
    #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
      vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
    #endif
  #endif

  #include <color_vertex>

  #include <beginnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>

  // we need this to compute the outline properly
  objectNormal = normalize( objectNormal );

  #include <defaultnormal_vertex>

  #ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED
    vNormal = normalize( transformedNormal );
  #endif

  #include <begin_vertex>

  #include <morphtarget_vertex>
  #include <skinning_vertex>
  // #include <displacementmap_vertex>
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>

  vViewPosition = - mvPosition.xyz;

  #ifdef OUTLINE
    float worldNormalLength = length( transformedNormal );
    vec3 outlineOffset = outlineWidthFactor * worldNormalLength * objectNormal;

    #ifdef USE_OUTLINEWIDTHMULTIPLYTEXTURE
      vec2 outlineWidthMultiplyTextureUv = ( outlineWidthMultiplyTextureUvTransform * vec3( vUv, 1 ) ).xy;
      float outlineTex = texture2D( outlineWidthMultiplyTexture, outlineWidthMultiplyTextureUv ).g;
      outlineOffset *= outlineTex;
    #endif

    #ifdef OUTLINE_WIDTH_SCREEN
      outlineOffset *= vViewPosition.z / projectionMatrix[ 1 ].y;
    #endif

    gl_Position = projectionMatrix * modelViewMatrix * vec4( outlineOffset + transformed, 1.0 );

    gl_Position.z += 1E-6 * gl_Position.w; // anti-artifact magic
  #endif

  #include <worldpos_vertex>
  // #include <envmap_vertex>
  #include <shadowmap_vertex>
  #include <fog_vertex>

}`,d_=`// #define PHONG

uniform vec3 litFactor;

uniform float opacity;

uniform vec3 shadeColorFactor;
#ifdef USE_SHADEMULTIPLYTEXTURE
  uniform sampler2D shadeMultiplyTexture;
  uniform mat3 shadeMultiplyTextureUvTransform;
#endif

uniform float shadingShiftFactor;
uniform float shadingToonyFactor;

#ifdef USE_SHADINGSHIFTTEXTURE
  uniform sampler2D shadingShiftTexture;
  uniform mat3 shadingShiftTextureUvTransform;
  uniform float shadingShiftTextureScale;
#endif

uniform float giEqualizationFactor;

uniform vec3 parametricRimColorFactor;
#ifdef USE_RIMMULTIPLYTEXTURE
  uniform sampler2D rimMultiplyTexture;
  uniform mat3 rimMultiplyTextureUvTransform;
#endif
uniform float rimLightingMixFactor;
uniform float parametricRimFresnelPowerFactor;
uniform float parametricRimLiftFactor;

#ifdef USE_MATCAPTEXTURE
  uniform vec3 matcapFactor;
  uniform sampler2D matcapTexture;
  uniform mat3 matcapTextureUvTransform;
#endif

uniform vec3 emissive;
uniform float emissiveIntensity;

uniform vec3 outlineColorFactor;
uniform float outlineLightingMixFactor;

#ifdef USE_UVANIMATIONMASKTEXTURE
  uniform sampler2D uvAnimationMaskTexture;
  uniform mat3 uvAnimationMaskTextureUvTransform;
#endif

uniform float uvAnimationScrollXOffset;
uniform float uvAnimationScrollYOffset;
uniform float uvAnimationRotationPhase;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>

// #include <uv_pars_fragment>
#if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
  varying vec2 vUv;
#endif

// #include <uv2_pars_fragment>
// COMAPT: pre-r151 uses uv2 for lightMap and aoMap
#if THREE_VRM_THREE_REVISION < 151
  #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
    varying vec2 vUv2;
  #endif
#endif

#include <map_pars_fragment>

#ifdef USE_MAP
  uniform mat3 mapUvTransform;
#endif

// #include <alphamap_pars_fragment>

#include <alphatest_pars_fragment>

#include <aomap_pars_fragment>
// #include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>

#ifdef USE_EMISSIVEMAP
  uniform mat3 emissiveMapUvTransform;
#endif

// #include <envmap_common_pars_fragment>
// #include <envmap_pars_fragment>
// #include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>

// #include <bsdfs>
// COMPAT: pre-r151 doesn't have BRDF_Lambert in <common>
#if THREE_VRM_THREE_REVISION < 151
  vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
    return RECIPROCAL_PI * diffuseColor;
  }
#endif

#include <lights_pars_begin>

#include <normal_pars_fragment>

// #include <lights_phong_pars_fragment>
varying vec3 vViewPosition;

struct MToonMaterial {
  vec3 diffuseColor;
  vec3 shadeColor;
  float shadingShift;
};

float linearstep( float a, float b, float t ) {
  return clamp( ( t - a ) / ( b - a ), 0.0, 1.0 );
}

/**
 * Convert NdotL into toon shading factor using shadingShift and shadingToony
 */
float getShading(
  const in float dotNL,
  const in float shadow,
  const in float shadingShift
) {
  float shading = dotNL;
  shading = shading + shadingShift;
  shading = linearstep( -1.0 + shadingToonyFactor, 1.0 - shadingToonyFactor, shading );
  shading *= shadow;
  return shading;
}

/**
 * Mix diffuseColor and shadeColor using shading factor and light color
 */
vec3 getDiffuse(
  const in MToonMaterial material,
  const in float shading,
  in vec3 lightColor
) {
  #ifdef DEBUG_LITSHADERATE
    return vec3( BRDF_Lambert( shading * lightColor ) );
  #endif

  vec3 col = lightColor * BRDF_Lambert( mix( material.shadeColor, material.diffuseColor, shading ) );

  // The "comment out if you want to PBR absolutely" line
  #ifdef V0_COMPAT_SHADE
    col = min( col, material.diffuseColor );
  #endif

  return col;
}

// COMPAT: pre-r156 uses a struct GeometricContext
#if THREE_VRM_THREE_REVISION >= 157
  void RE_Direct_MToon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in MToonMaterial material, const in float shadow, inout ReflectedLight reflectedLight ) {
    float dotNL = clamp( dot( geometryNormal, directLight.direction ), -1.0, 1.0 );
    vec3 irradiance = directLight.color;

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;

    irradiance *= dotNL;

    float shading = getShading( dotNL, shadow, material.shadingShift );

    // toon shaded diffuse
    reflectedLight.directDiffuse += getDiffuse( material, shading, directLight.color );
  }

  void RE_IndirectDiffuse_MToon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in MToonMaterial material, inout ReflectedLight reflectedLight ) {
    // indirect diffuse will use diffuseColor, no shadeColor involved
    reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;
  }
#else
  void RE_Direct_MToon( const in IncidentLight directLight, const in GeometricContext geometry, const in MToonMaterial material, const in float shadow, inout ReflectedLight reflectedLight ) {
    float dotNL = clamp( dot( geometry.normal, directLight.direction ), -1.0, 1.0 );
    vec3 irradiance = directLight.color;

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;

    irradiance *= dotNL;

    float shading = getShading( dotNL, shadow, material.shadingShift );

    // toon shaded diffuse
    reflectedLight.directDiffuse += getDiffuse( material, shading, directLight.color );
  }

  void RE_IndirectDiffuse_MToon( const in vec3 irradiance, const in GeometricContext geometry, const in MToonMaterial material, inout ReflectedLight reflectedLight ) {
    // indirect diffuse will use diffuseColor, no shadeColor involved
    reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;
  }
#endif

#define RE_Direct RE_Direct_MToon
#define RE_IndirectDiffuse RE_IndirectDiffuse_MToon
#define Material_LightProbeLOD( material ) (0)

#include <shadowmap_pars_fragment>
// #include <bumpmap_pars_fragment>

// #include <normalmap_pars_fragment>
#ifdef USE_NORMALMAP

  uniform sampler2D normalMap;
  uniform mat3 normalMapUvTransform;
  uniform vec2 normalScale;

#endif

// COMPAT: pre-r151
// USE_NORMALMAP_OBJECTSPACE used to be OBJECTSPACE_NORMALMAP in pre-r151
#if defined( USE_NORMALMAP_OBJECTSPACE ) || defined( OBJECTSPACE_NORMALMAP )

  uniform mat3 normalMatrix;

#endif

// COMPAT: pre-r151
// USE_NORMALMAP_TANGENTSPACE used to be TANGENTSPACE_NORMALMAP in pre-r151
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( TANGENTSPACE_NORMALMAP ) )

  // Per-Pixel Tangent Space Normal Mapping
  // http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html

  // three-vrm specific change: it requires \`uv\` as an input in order to support uv scrolls

  // Temporary compat against shader change @ Three.js r126, r151
  #if THREE_VRM_THREE_REVISION >= 151

    mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {

      vec3 q0 = dFdx( eye_pos.xyz );
      vec3 q1 = dFdy( eye_pos.xyz );
      vec2 st0 = dFdx( uv.st );
      vec2 st1 = dFdy( uv.st );

      vec3 N = surf_norm;

      vec3 q1perp = cross( q1, N );
      vec3 q0perp = cross( N, q0 );

      vec3 T = q1perp * st0.x + q0perp * st1.x;
      vec3 B = q1perp * st0.y + q0perp * st1.y;

      float det = max( dot( T, T ), dot( B, B ) );
      float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );

      return mat3( T * scale, B * scale, N );

    }

  #else

    vec3 perturbNormal2Arb( vec2 uv, vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {

      vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
      vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
      vec2 st0 = dFdx( uv.st );
      vec2 st1 = dFdy( uv.st );

      vec3 N = normalize( surf_norm );

      vec3 q1perp = cross( q1, N );
      vec3 q0perp = cross( N, q0 );

      vec3 T = q1perp * st0.x + q0perp * st1.x;
      vec3 B = q1perp * st0.y + q0perp * st1.y;

      // three-vrm specific change: Workaround for the issue that happens when delta of uv = 0.0
      // TODO: Is this still required? Or shall I make a PR about it?
      if ( length( T ) == 0.0 || length( B ) == 0.0 ) {
        return surf_norm;
      }

      float det = max( dot( T, T ), dot( B, B ) );
      float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );

      return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );

    }

  #endif

#endif

// #include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

// == post correction ==========================================================
void postCorrection() {
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>
}

// == main procedure ===========================================================
void main() {
  #include <clipping_planes_fragment>

  vec2 uv = vec2(0.5, 0.5);

  #if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
    uv = vUv;

    float uvAnimMask = 1.0;
    #ifdef USE_UVANIMATIONMASKTEXTURE
      vec2 uvAnimationMaskTextureUv = ( uvAnimationMaskTextureUvTransform * vec3( uv, 1 ) ).xy;
      uvAnimMask = texture2D( uvAnimationMaskTexture, uvAnimationMaskTextureUv ).b;
    #endif

    float uvRotCos = cos( uvAnimationRotationPhase * uvAnimMask );
    float uvRotSin = sin( uvAnimationRotationPhase * uvAnimMask );
    uv = mat2( uvRotCos, -uvRotSin, uvRotSin, uvRotCos ) * ( uv - 0.5 ) + 0.5;
    uv = uv + vec2( uvAnimationScrollXOffset, uvAnimationScrollYOffset ) * uvAnimMask;
  #endif

  #ifdef DEBUG_UV
    gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
    #if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
      gl_FragColor = vec4( uv, 0.0, 1.0 );
    #endif
    return;
  #endif

  vec4 diffuseColor = vec4( litFactor, opacity );
  ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
  vec3 totalEmissiveRadiance = emissive * emissiveIntensity;

  #include <logdepthbuf_fragment>

  // #include <map_fragment>
  #ifdef USE_MAP
    vec2 mapUv = ( mapUvTransform * vec3( uv, 1 ) ).xy;
    vec4 sampledDiffuseColor = texture2D( map, mapUv );
    #ifdef DECODE_VIDEO_TEXTURE
      sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
    #endif
    diffuseColor *= sampledDiffuseColor;
  #endif

  // #include <color_fragment>
  #if ( defined( USE_COLOR ) && !defined( IGNORE_VERTEX_COLOR ) )
    diffuseColor.rgb *= vColor;
  #endif

  // #include <alphamap_fragment>

  #include <alphatest_fragment>

  // #include <specularmap_fragment>

  // #include <normal_fragment_begin>
  float faceDirection = gl_FrontFacing ? 1.0 : -1.0;

  #ifdef FLAT_SHADED

    vec3 fdx = dFdx( vViewPosition );
    vec3 fdy = dFdy( vViewPosition );
    vec3 normal = normalize( cross( fdx, fdy ) );

  #else

    vec3 normal = normalize( vNormal );

    #ifdef DOUBLE_SIDED

      normal *= faceDirection;

    #endif

  #endif

  #ifdef USE_NORMALMAP

    vec2 normalMapUv = ( normalMapUvTransform * vec3( uv, 1 ) ).xy;

  #endif

  #ifdef USE_NORMALMAP_TANGENTSPACE

    #ifdef USE_TANGENT

      mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

    #else

      mat3 tbn = getTangentFrame( - vViewPosition, normal, normalMapUv );

    #endif

    #if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

      tbn[0] *= faceDirection;
      tbn[1] *= faceDirection;

    #endif

  #endif

  #ifdef USE_CLEARCOAT_NORMALMAP

    #ifdef USE_TANGENT

      mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

    #else

      mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );

    #endif

    #if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

      tbn2[0] *= faceDirection;
      tbn2[1] *= faceDirection;

    #endif

  #endif

  // non perturbed normal for clearcoat among others

  vec3 nonPerturbedNormal = normal;

  #ifdef OUTLINE
    normal *= -1.0;
  #endif

  // #include <normal_fragment_maps>

  // COMPAT: pre-r151
  // USE_NORMALMAP_OBJECTSPACE used to be OBJECTSPACE_NORMALMAP in pre-r151
  #if defined( USE_NORMALMAP_OBJECTSPACE ) || defined( OBJECTSPACE_NORMALMAP )

    normal = texture2D( normalMap, normalMapUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

    #ifdef FLIP_SIDED

      normal = - normal;

    #endif

    #ifdef DOUBLE_SIDED

      normal = normal * faceDirection;

    #endif

    normal = normalize( normalMatrix * normal );

  // COMPAT: pre-r151
  // USE_NORMALMAP_TANGENTSPACE used to be TANGENTSPACE_NORMALMAP in pre-r151
  #elif defined( USE_NORMALMAP_TANGENTSPACE ) || defined( TANGENTSPACE_NORMALMAP )

    vec3 mapN = texture2D( normalMap, normalMapUv ).xyz * 2.0 - 1.0;
    mapN.xy *= normalScale;

    // COMPAT: pre-r151
    #if THREE_VRM_THREE_REVISION >= 151 || defined( USE_TANGENT )

      normal = normalize( tbn * mapN );

    #else

      normal = perturbNormal2Arb( uv, -vViewPosition, normal, mapN, faceDirection );

    #endif

  #endif

  // #include <emissivemap_fragment>
  #ifdef USE_EMISSIVEMAP
    vec2 emissiveMapUv = ( emissiveMapUvTransform * vec3( uv, 1 ) ).xy;
    totalEmissiveRadiance *= texture2D( emissiveMap, emissiveMapUv ).rgb;
  #endif

  #ifdef DEBUG_NORMAL
    gl_FragColor = vec4( 0.5 + 0.5 * normal, 1.0 );
    return;
  #endif

  // -- MToon: lighting --------------------------------------------------------
  // accumulation
  // #include <lights_phong_fragment>
  MToonMaterial material;

  material.diffuseColor = diffuseColor.rgb;

  material.shadeColor = shadeColorFactor;
  #ifdef USE_SHADEMULTIPLYTEXTURE
    vec2 shadeMultiplyTextureUv = ( shadeMultiplyTextureUvTransform * vec3( uv, 1 ) ).xy;
    material.shadeColor *= texture2D( shadeMultiplyTexture, shadeMultiplyTextureUv ).rgb;
  #endif

  #if ( defined( USE_COLOR ) && !defined( IGNORE_VERTEX_COLOR ) )
    material.shadeColor.rgb *= vColor;
  #endif

  material.shadingShift = shadingShiftFactor;
  #ifdef USE_SHADINGSHIFTTEXTURE
    vec2 shadingShiftTextureUv = ( shadingShiftTextureUvTransform * vec3( uv, 1 ) ).xy;
    material.shadingShift += texture2D( shadingShiftTexture, shadingShiftTextureUv ).r * shadingShiftTextureScale;
  #endif

  // #include <lights_fragment_begin>

  // MToon Specific changes:
  // Since we want to take shadows into account of shading instead of irradiance,
  // we had to modify the codes that multiplies the results of shadowmap into color of direct lights.

  // COMPAT: pre-r156 uses a struct GeometricContext
  #if THREE_VRM_THREE_REVISION >= 157
    vec3 geometryPosition = - vViewPosition;
    vec3 geometryNormal = normal;
    vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

    vec3 geometryClearcoatNormal;

    #ifdef USE_CLEARCOAT

      geometryClearcoatNormal = clearcoatNormal;

    #endif
  #else
    GeometricContext geometry;

    geometry.position = - vViewPosition;
    geometry.normal = normal;
    geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

    #ifdef USE_CLEARCOAT

      geometry.clearcoatNormal = clearcoatNormal;

    #endif
  #endif

  IncidentLight directLight;

  // since these variables will be used in unrolled loop, we have to define in prior
  float shadow;

  #if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

    PointLight pointLight;
    #if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
    PointLightShadow pointLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

      pointLight = pointLights[ i ];

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        getPointLightInfo( pointLight, geometryPosition, directLight );
      #else
        getPointLightInfo( pointLight, geometry, directLight );
      #endif

      shadow = 1.0;
      #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
      pointLightShadow = pointLightShadows[ i ];
      // COMPAT: pre-r166
      // r166 introduced shadowIntensity
      #if THREE_VRM_THREE_REVISION >= 166
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
      #else
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
      #endif
      #endif

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );
      #else
        RE_Direct( directLight, geometry, material, shadow, reflectedLight );
      #endif

    }
    #pragma unroll_loop_end

  #endif

  #if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

    SpotLight spotLight;
    // COMPAT: pre-r144 uses NUM_SPOT_LIGHT_SHADOWS, r144+ uses NUM_SPOT_LIGHT_COORDS
    #if THREE_VRM_THREE_REVISION >= 144
      #if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_COORDS > 0
      SpotLightShadow spotLightShadow;
      #endif
    #elif defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
    SpotLightShadow spotLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

      spotLight = spotLights[ i ];

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        getSpotLightInfo( spotLight, geometryPosition, directLight );
      #else
        getSpotLightInfo( spotLight, geometry, directLight );
      #endif

      shadow = 1.0;
      // COMPAT: pre-r144 uses NUM_SPOT_LIGHT_SHADOWS and vSpotShadowCoord, r144+ uses NUM_SPOT_LIGHT_COORDS and vSpotLightCoord
      // COMPAT: pre-r166 does not have shadowIntensity, r166+ has shadowIntensity
      #if THREE_VRM_THREE_REVISION >= 166
        #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_COORDS )
        spotLightShadow = spotLightShadows[ i ];
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
        #endif
      #elif THREE_VRM_THREE_REVISION >= 144
        #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_COORDS )
        spotLightShadow = spotLightShadows[ i ];
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
        #endif
      #elif defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
      spotLightShadow = spotLightShadows[ i ];
      shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
      #endif

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );
      #else
        RE_Direct( directLight, geometry, material, shadow, reflectedLight );
      #endif

    }
    #pragma unroll_loop_end

  #endif

  #if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

    DirectionalLight directionalLight;
    #if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
    DirectionalLightShadow directionalLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

      directionalLight = directionalLights[ i ];

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        getDirectionalLightInfo( directionalLight, directLight );
      #else
        getDirectionalLightInfo( directionalLight, geometry, directLight );
      #endif

      shadow = 1.0;
      #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
      directionalLightShadow = directionalLightShadows[ i ];
      // COMPAT: pre-r166
      // r166 introduced shadowIntensity
      #if THREE_VRM_THREE_REVISION >= 166
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
      #else
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
      #endif
      #endif

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );
      #else
        RE_Direct( directLight, geometry, material, shadow, reflectedLight );
      #endif

    }
    #pragma unroll_loop_end

  #endif

  // #if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

  //   RectAreaLight rectAreaLight;

  //   #pragma unroll_loop_start
  //   for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

  //     rectAreaLight = rectAreaLights[ i ];
  //     RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );

  //   }
  //   #pragma unroll_loop_end

  // #endif

  #if defined( RE_IndirectDiffuse )

    vec3 iblIrradiance = vec3( 0.0 );

    vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

    // COMPAT: pre-r156 uses a struct GeometricContext
    // COMPAT: pre-r156 doesn't have a define USE_LIGHT_PROBES
    #if THREE_VRM_THREE_REVISION >= 157
      #if defined( USE_LIGHT_PROBES )
        irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
      #endif
    #else
      irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
    #endif

    #if ( NUM_HEMI_LIGHTS > 0 )

      #pragma unroll_loop_start
      for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

        // COMPAT: pre-r156 uses a struct GeometricContext
        #if THREE_VRM_THREE_REVISION >= 157
          irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
        #else
          irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
        #endif

      }
      #pragma unroll_loop_end

    #endif

  #endif

  // #if defined( RE_IndirectSpecular )

  //   vec3 radiance = vec3( 0.0 );
  //   vec3 clearcoatRadiance = vec3( 0.0 );

  // #endif

  #include <lights_fragment_maps>
  #include <lights_fragment_end>

  // modulation
  #include <aomap_fragment>

  vec3 col = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;

  #ifdef DEBUG_LITSHADERATE
    gl_FragColor = vec4( col, diffuseColor.a );
    postCorrection();
    return;
  #endif

  // -- MToon: rim lighting -----------------------------------------
  vec3 viewDir = normalize( vViewPosition );

  #ifndef PHYSICALLY_CORRECT_LIGHTS
    reflectedLight.directSpecular /= PI;
  #endif
  vec3 rimMix = mix( vec3( 1.0 ), reflectedLight.directSpecular, rimLightingMixFactor );

  vec3 rim = parametricRimColorFactor * pow( saturate( 1.0 - dot( viewDir, normal ) + parametricRimLiftFactor ), parametricRimFresnelPowerFactor );

  #ifdef USE_MATCAPTEXTURE
    {
      vec3 x = normalize( vec3( viewDir.z, 0.0, -viewDir.x ) );
      vec3 y = cross( viewDir, x ); // guaranteed to be normalized
      vec2 sphereUv = 0.5 + 0.5 * vec2( dot( x, normal ), -dot( y, normal ) );
      sphereUv = ( matcapTextureUvTransform * vec3( sphereUv, 1 ) ).xy;
      vec3 matcap = texture2D( matcapTexture, sphereUv ).rgb;
      rim += matcapFactor * matcap;
    }
  #endif

  #ifdef USE_RIMMULTIPLYTEXTURE
    vec2 rimMultiplyTextureUv = ( rimMultiplyTextureUvTransform * vec3( uv, 1 ) ).xy;
    rim *= texture2D( rimMultiplyTexture, rimMultiplyTextureUv ).rgb;
  #endif

  col += rimMix * rim;

  // -- MToon: Emission --------------------------------------------------------
  col += totalEmissiveRadiance;

  // #include <envmap_fragment>

  // -- Almost done! -----------------------------------------------------------
  #if defined( OUTLINE )
    col = outlineColorFactor.rgb * mix( vec3( 1.0 ), col, outlineLightingMixFactor );
  #endif

  #ifdef OPAQUE
    diffuseColor.a = 1.0;
  #endif

  gl_FragColor = vec4( col, diffuseColor.a );
  postCorrection();
}
`,f_={None:"none"},za={None:"none",ScreenCoordinates:"screenCoordinates"},h_={3e3:"",3001:"srgb"};function Mr(e){return parseInt(ii,10)>=152?e.colorSpace:h_[e.encoding]}var p_=class extends Wt{constructor(e={}){var t;super({vertexShader:u_,fragmentShader:d_}),this.uvAnimationScrollXSpeedFactor=0,this.uvAnimationScrollYSpeedFactor=0,this.uvAnimationRotationSpeedFactor=0,this.fog=!0,this.normalMapType=ms,this._ignoreVertexColor=!0,this._v0CompatShade=!1,this._debugMode=f_.None,this._outlineWidthMode=za.None,this._isOutline=!1,e.transparentWithZWrite&&(e.depthWrite=!0),delete e.transparentWithZWrite,e.fog=!0,e.lights=!0,e.clipping=!0,this.uniforms=ps.merge([se.common,se.normalmap,se.emissivemap,se.fog,se.lights,{litFactor:{value:new Fe(1,1,1)},mapUvTransform:{value:new Oe},colorAlpha:{value:1},normalMapUvTransform:{value:new Oe},shadeColorFactor:{value:new Fe(0,0,0)},shadeMultiplyTexture:{value:null},shadeMultiplyTextureUvTransform:{value:new Oe},shadingShiftFactor:{value:0},shadingShiftTexture:{value:null},shadingShiftTextureUvTransform:{value:new Oe},shadingShiftTextureScale:{value:1},shadingToonyFactor:{value:.9},giEqualizationFactor:{value:.9},matcapFactor:{value:new Fe(1,1,1)},matcapTexture:{value:null},matcapTextureUvTransform:{value:new Oe},parametricRimColorFactor:{value:new Fe(0,0,0)},rimMultiplyTexture:{value:null},rimMultiplyTextureUvTransform:{value:new Oe},rimLightingMixFactor:{value:1},parametricRimFresnelPowerFactor:{value:5},parametricRimLiftFactor:{value:0},emissive:{value:new Fe(0,0,0)},emissiveIntensity:{value:1},emissiveMapUvTransform:{value:new Oe},outlineWidthMultiplyTexture:{value:null},outlineWidthMultiplyTextureUvTransform:{value:new Oe},outlineWidthFactor:{value:0},outlineColorFactor:{value:new Fe(0,0,0)},outlineLightingMixFactor:{value:1},uvAnimationMaskTexture:{value:null},uvAnimationMaskTextureUvTransform:{value:new Oe},uvAnimationScrollXOffset:{value:0},uvAnimationScrollYOffset:{value:0},uvAnimationRotationPhase:{value:0}},(t=e.uniforms)!=null?t:{}]),this.setValues(e),this._uploadUniformsWorkaround(),this.customProgramCacheKey=()=>[...Object.entries(this._generateDefines()).map(([n,i])=>`${n}:${i}`),this.matcapTexture?`matcapTextureColorSpace:${Mr(this.matcapTexture)}`:"",this.shadeMultiplyTexture?`shadeMultiplyTextureColorSpace:${Mr(this.shadeMultiplyTexture)}`:"",this.rimMultiplyTexture?`rimMultiplyTextureColorSpace:${Mr(this.rimMultiplyTexture)}`:""].join(","),this.onBeforeCompile=n=>{const i=parseInt(ii,10),r=Object.entries(Wa(Wa({},this._generateDefines()),this.defines)).filter(([o,a])=>!!a).map(([o,a])=>`#define ${o} ${a}`).join(`
`)+`
`;n.vertexShader=r+n.vertexShader,n.fragmentShader=r+n.fragmentShader,i<154&&(n.fragmentShader=n.fragmentShader.replace("#include <colorspace_fragment>","#include <encodings_fragment>"))}}get color(){return this.uniforms.litFactor.value}set color(e){this.uniforms.litFactor.value=e}get map(){return this.uniforms.map.value}set map(e){this.uniforms.map.value=e}get normalMap(){return this.uniforms.normalMap.value}set normalMap(e){this.uniforms.normalMap.value=e}get normalScale(){return this.uniforms.normalScale.value}set normalScale(e){this.uniforms.normalScale.value=e}get emissive(){return this.uniforms.emissive.value}set emissive(e){this.uniforms.emissive.value=e}get emissiveIntensity(){return this.uniforms.emissiveIntensity.value}set emissiveIntensity(e){this.uniforms.emissiveIntensity.value=e}get emissiveMap(){return this.uniforms.emissiveMap.value}set emissiveMap(e){this.uniforms.emissiveMap.value=e}get shadeColorFactor(){return this.uniforms.shadeColorFactor.value}set shadeColorFactor(e){this.uniforms.shadeColorFactor.value=e}get shadeMultiplyTexture(){return this.uniforms.shadeMultiplyTexture.value}set shadeMultiplyTexture(e){this.uniforms.shadeMultiplyTexture.value=e}get shadingShiftFactor(){return this.uniforms.shadingShiftFactor.value}set shadingShiftFactor(e){this.uniforms.shadingShiftFactor.value=e}get shadingShiftTexture(){return this.uniforms.shadingShiftTexture.value}set shadingShiftTexture(e){this.uniforms.shadingShiftTexture.value=e}get shadingShiftTextureScale(){return this.uniforms.shadingShiftTextureScale.value}set shadingShiftTextureScale(e){this.uniforms.shadingShiftTextureScale.value=e}get shadingToonyFactor(){return this.uniforms.shadingToonyFactor.value}set shadingToonyFactor(e){this.uniforms.shadingToonyFactor.value=e}get giEqualizationFactor(){return this.uniforms.giEqualizationFactor.value}set giEqualizationFactor(e){this.uniforms.giEqualizationFactor.value=e}get matcapFactor(){return this.uniforms.matcapFactor.value}set matcapFactor(e){this.uniforms.matcapFactor.value=e}get matcapTexture(){return this.uniforms.matcapTexture.value}set matcapTexture(e){this.uniforms.matcapTexture.value=e}get parametricRimColorFactor(){return this.uniforms.parametricRimColorFactor.value}set parametricRimColorFactor(e){this.uniforms.parametricRimColorFactor.value=e}get rimMultiplyTexture(){return this.uniforms.rimMultiplyTexture.value}set rimMultiplyTexture(e){this.uniforms.rimMultiplyTexture.value=e}get rimLightingMixFactor(){return this.uniforms.rimLightingMixFactor.value}set rimLightingMixFactor(e){this.uniforms.rimLightingMixFactor.value=e}get parametricRimFresnelPowerFactor(){return this.uniforms.parametricRimFresnelPowerFactor.value}set parametricRimFresnelPowerFactor(e){this.uniforms.parametricRimFresnelPowerFactor.value=e}get parametricRimLiftFactor(){return this.uniforms.parametricRimLiftFactor.value}set parametricRimLiftFactor(e){this.uniforms.parametricRimLiftFactor.value=e}get outlineWidthMultiplyTexture(){return this.uniforms.outlineWidthMultiplyTexture.value}set outlineWidthMultiplyTexture(e){this.uniforms.outlineWidthMultiplyTexture.value=e}get outlineWidthFactor(){return this.uniforms.outlineWidthFactor.value}set outlineWidthFactor(e){this.uniforms.outlineWidthFactor.value=e}get outlineColorFactor(){return this.uniforms.outlineColorFactor.value}set outlineColorFactor(e){this.uniforms.outlineColorFactor.value=e}get outlineLightingMixFactor(){return this.uniforms.outlineLightingMixFactor.value}set outlineLightingMixFactor(e){this.uniforms.outlineLightingMixFactor.value=e}get uvAnimationMaskTexture(){return this.uniforms.uvAnimationMaskTexture.value}set uvAnimationMaskTexture(e){this.uniforms.uvAnimationMaskTexture.value=e}get uvAnimationScrollXOffset(){return this.uniforms.uvAnimationScrollXOffset.value}set uvAnimationScrollXOffset(e){this.uniforms.uvAnimationScrollXOffset.value=e}get uvAnimationScrollYOffset(){return this.uniforms.uvAnimationScrollYOffset.value}set uvAnimationScrollYOffset(e){this.uniforms.uvAnimationScrollYOffset.value=e}get uvAnimationRotationPhase(){return this.uniforms.uvAnimationRotationPhase.value}set uvAnimationRotationPhase(e){this.uniforms.uvAnimationRotationPhase.value=e}get ignoreVertexColor(){return this._ignoreVertexColor}set ignoreVertexColor(e){this._ignoreVertexColor=e,this.needsUpdate=!0}get v0CompatShade(){return this._v0CompatShade}set v0CompatShade(e){this._v0CompatShade=e,this.needsUpdate=!0}get debugMode(){return this._debugMode}set debugMode(e){this._debugMode=e,this.needsUpdate=!0}get outlineWidthMode(){return this._outlineWidthMode}set outlineWidthMode(e){this._outlineWidthMode=e,this.needsUpdate=!0}get isOutline(){return this._isOutline}set isOutline(e){this._isOutline=e,this.needsUpdate=!0}get isMToonMaterial(){return!0}update(e){this._uploadUniformsWorkaround(),this._updateUVAnimation(e)}copy(e){return super.copy(e),this.map=e.map,this.normalMap=e.normalMap,this.emissiveMap=e.emissiveMap,this.shadeMultiplyTexture=e.shadeMultiplyTexture,this.shadingShiftTexture=e.shadingShiftTexture,this.matcapTexture=e.matcapTexture,this.rimMultiplyTexture=e.rimMultiplyTexture,this.outlineWidthMultiplyTexture=e.outlineWidthMultiplyTexture,this.uvAnimationMaskTexture=e.uvAnimationMaskTexture,this.normalMapType=e.normalMapType,this.uvAnimationScrollXSpeedFactor=e.uvAnimationScrollXSpeedFactor,this.uvAnimationScrollYSpeedFactor=e.uvAnimationScrollYSpeedFactor,this.uvAnimationRotationSpeedFactor=e.uvAnimationRotationSpeedFactor,this.ignoreVertexColor=e.ignoreVertexColor,this.v0CompatShade=e.v0CompatShade,this.debugMode=e.debugMode,this.outlineWidthMode=e.outlineWidthMode,this.isOutline=e.isOutline,this.needsUpdate=!0,this}_updateUVAnimation(e){this.uniforms.uvAnimationScrollXOffset.value+=e*this.uvAnimationScrollXSpeedFactor,this.uniforms.uvAnimationScrollYOffset.value+=e*this.uvAnimationScrollYSpeedFactor,this.uniforms.uvAnimationRotationPhase.value+=e*this.uvAnimationRotationSpeedFactor,this.uniforms.alphaTest.value=this.alphaTest,this.uniformsNeedUpdate=!0}_uploadUniformsWorkaround(){this.uniforms.opacity.value=this.opacity,this._updateTextureMatrix(this.uniforms.map,this.uniforms.mapUvTransform),this._updateTextureMatrix(this.uniforms.normalMap,this.uniforms.normalMapUvTransform),this._updateTextureMatrix(this.uniforms.emissiveMap,this.uniforms.emissiveMapUvTransform),this._updateTextureMatrix(this.uniforms.shadeMultiplyTexture,this.uniforms.shadeMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.shadingShiftTexture,this.uniforms.shadingShiftTextureUvTransform),this._updateTextureMatrix(this.uniforms.matcapTexture,this.uniforms.matcapTextureUvTransform),this._updateTextureMatrix(this.uniforms.rimMultiplyTexture,this.uniforms.rimMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.outlineWidthMultiplyTexture,this.uniforms.outlineWidthMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.uvAnimationMaskTexture,this.uniforms.uvAnimationMaskTextureUvTransform),this.uniformsNeedUpdate=!0}_generateDefines(){const e=parseInt(ii,10),t=this.outlineWidthMultiplyTexture!==null,n=this.map!==null||this.normalMap!==null||this.emissiveMap!==null||this.shadeMultiplyTexture!==null||this.shadingShiftTexture!==null||this.rimMultiplyTexture!==null||this.uvAnimationMaskTexture!==null;return{THREE_VRM_THREE_REVISION:e,OUTLINE:this._isOutline,MTOON_USE_UV:t||n,MTOON_UVS_VERTEX_ONLY:t&&!n,V0_COMPAT_SHADE:this._v0CompatShade,USE_SHADEMULTIPLYTEXTURE:this.shadeMultiplyTexture!==null,USE_SHADINGSHIFTTEXTURE:this.shadingShiftTexture!==null,USE_MATCAPTEXTURE:this.matcapTexture!==null,USE_RIMMULTIPLYTEXTURE:this.rimMultiplyTexture!==null,USE_OUTLINEWIDTHMULTIPLYTEXTURE:this._isOutline&&this.outlineWidthMultiplyTexture!==null,USE_UVANIMATIONMASKTEXTURE:this.uvAnimationMaskTexture!==null,IGNORE_VERTEX_COLOR:this._ignoreVertexColor===!0,DEBUG_NORMAL:this._debugMode==="normal",DEBUG_LITSHADERATE:this._debugMode==="litShadeRate",DEBUG_UV:this._debugMode==="uv",OUTLINE_WIDTH_SCREEN:this._isOutline&&this._outlineWidthMode===za.ScreenCoordinates}}_updateTextureMatrix(e,t){e.value&&(e.value.matrixAutoUpdate&&e.value.updateMatrix(),t.value.copy(e.value.matrix))}},m_=new Set(["1.0","1.0-beta"]),el=class yi{get name(){return yi.EXTENSION_NAME}constructor(t,n={}){var i,r,o,a;this.parser=t,this.materialType=(i=n.materialType)!=null?i:p_,this.renderOrderOffset=(r=n.renderOrderOffset)!=null?r:0,this.v0CompatShade=(o=n.v0CompatShade)!=null?o:!1,this.debugMode=(a=n.debugMode)!=null?a:"none",this._mToonMaterialSet=new Set}beforeRoot(){return _n(this,null,function*(){this._removeUnlitExtensionIfMToonExists()})}afterRoot(t){return _n(this,null,function*(){t.userData.vrmMToonMaterials=Array.from(this._mToonMaterialSet)})}getMaterialType(t){return this._getMToonExtension(t)?this.materialType:null}extendMaterialParams(t,n){const i=this._getMToonExtension(t);return i?this._extendMaterialParams(i,n):null}loadMesh(t){return _n(this,null,function*(){var n;const i=this.parser,o=(n=i.json.meshes)==null?void 0:n[t];if(o==null)throw new Error(`MToonMaterialLoaderPlugin: Attempt to use meshes[${t}] of glTF but the mesh doesn't exist`);const a=o.primitives,s=yield i.loadMesh(t);if(a.length===1){const l=s,c=a[0].material;c!=null&&this._setupPrimitive(l,c)}else{const l=s;for(let c=0;c<a.length;c++){const h=l.children[c],d=a[c].material;d!=null&&this._setupPrimitive(h,d)}}return s})}_removeUnlitExtensionIfMToonExists(){const i=this.parser.json.materials;i?.map((r,o)=>{var a;this._getMToonExtension(o)&&((a=r.extensions)!=null&&a.KHR_materials_unlit)&&delete r.extensions.KHR_materials_unlit})}_getMToonExtension(t){var n,i;const a=(n=this.parser.json.materials)==null?void 0:n[t];if(a==null){console.warn(`MToonMaterialLoaderPlugin: Attempt to use materials[${t}] of glTF but the material doesn't exist`);return}const s=(i=a.extensions)==null?void 0:i[yi.EXTENSION_NAME];if(s==null)return;const l=s.specVersion;if(!m_.has(l)){console.warn(`MToonMaterialLoaderPlugin: Unknown ${yi.EXTENSION_NAME} specVersion "${l}"`);return}return s}_extendMaterialParams(t,n){return _n(this,null,function*(){var i;delete n.metalness,delete n.roughness;const r=new c_(this.parser,n);r.assignPrimitive("transparentWithZWrite",t.transparentWithZWrite),r.assignColor("shadeColorFactor",t.shadeColorFactor),r.assignTexture("shadeMultiplyTexture",t.shadeMultiplyTexture,!0),r.assignPrimitive("shadingShiftFactor",t.shadingShiftFactor),r.assignTexture("shadingShiftTexture",t.shadingShiftTexture,!0),r.assignPrimitive("shadingShiftTextureScale",(i=t.shadingShiftTexture)==null?void 0:i.scale),r.assignPrimitive("shadingToonyFactor",t.shadingToonyFactor),r.assignPrimitive("giEqualizationFactor",t.giEqualizationFactor),r.assignColor("matcapFactor",t.matcapFactor),r.assignTexture("matcapTexture",t.matcapTexture,!0),r.assignColor("parametricRimColorFactor",t.parametricRimColorFactor),r.assignTexture("rimMultiplyTexture",t.rimMultiplyTexture,!0),r.assignPrimitive("rimLightingMixFactor",t.rimLightingMixFactor),r.assignPrimitive("parametricRimFresnelPowerFactor",t.parametricRimFresnelPowerFactor),r.assignPrimitive("parametricRimLiftFactor",t.parametricRimLiftFactor),r.assignPrimitive("outlineWidthMode",t.outlineWidthMode),r.assignPrimitive("outlineWidthFactor",t.outlineWidthFactor),r.assignTexture("outlineWidthMultiplyTexture",t.outlineWidthMultiplyTexture,!1),r.assignColor("outlineColorFactor",t.outlineColorFactor),r.assignPrimitive("outlineLightingMixFactor",t.outlineLightingMixFactor),r.assignTexture("uvAnimationMaskTexture",t.uvAnimationMaskTexture,!1),r.assignPrimitive("uvAnimationScrollXSpeedFactor",t.uvAnimationScrollXSpeedFactor),r.assignPrimitive("uvAnimationScrollYSpeedFactor",t.uvAnimationScrollYSpeedFactor),r.assignPrimitive("uvAnimationRotationSpeedFactor",t.uvAnimationRotationSpeedFactor),r.assignPrimitive("v0CompatShade",this.v0CompatShade),r.assignPrimitive("debugMode",this.debugMode),yield r.pending})}_setupPrimitive(t,n){const i=this._getMToonExtension(n);if(i){const r=this._parseRenderOrder(i);t.renderOrder=r+this.renderOrderOffset,this._generateOutline(t),this._addToMaterialSet(t);return}}_shouldGenerateOutline(t){return typeof t.outlineWidthMode=="string"&&t.outlineWidthMode!=="none"&&typeof t.outlineWidthFactor=="number"&&t.outlineWidthFactor>0}_generateOutline(t){const n=t.material;if(!(n instanceof wi)||!this._shouldGenerateOutline(n))return;t.material=[n];const i=n.clone();i.name+=" (Outline)",i.isOutline=!0,i.side=Et,t.material.push(i);const r=t.geometry,o=r.index?r.index.count:r.attributes.position.count/3;r.addGroup(0,o,0),r.addGroup(0,o,1)}_addToMaterialSet(t){const n=t.material,i=new Set;Array.isArray(n)?n.forEach(r=>i.add(r)):i.add(n);for(const r of i)this._mToonMaterialSet.add(r)}_parseRenderOrder(t){var n;return(t.transparentWithZWrite?0:19)+((n=t.renderQueueOffsetNumber)!=null?n:0)}};el.EXTENSION_NAME="VRMC_materials_mtoon";var __=el,g_=(e,t,n)=>new Promise((i,r)=>{var o=l=>{try{s(n.next(l))}catch(c){r(c)}},a=l=>{try{s(n.throw(l))}catch(c){r(c)}},s=l=>l.done?i(l.value):Promise.resolve(l.value).then(o,a);s((n=n.apply(e,t)).next())}),tl=class Br{get name(){return Br.EXTENSION_NAME}constructor(t){this.parser=t}extendMaterialParams(t,n){return g_(this,null,function*(){const i=this._getHDREmissiveMultiplierExtension(t);if(i==null)return;console.warn("VRMMaterialsHDREmissiveMultiplierLoaderPlugin: `VRMC_materials_hdr_emissiveMultiplier` is archived. Use `KHR_materials_emissive_strength` instead.");const r=i.emissiveMultiplier;n.emissiveIntensity=r})}_getHDREmissiveMultiplierExtension(t){var n,i;const a=(n=this.parser.json.materials)==null?void 0:n[t];if(a==null){console.warn(`VRMMaterialsHDREmissiveMultiplierLoaderPlugin: Attempt to use materials[${t}] of glTF but the material doesn't exist`);return}const s=(i=a.extensions)==null?void 0:i[Br.EXTENSION_NAME];if(s!=null)return s}};tl.EXTENSION_NAME="VRMC_materials_hdr_emissiveMultiplier";var v_=tl,M_=Object.defineProperty,x_=Object.defineProperties,S_=Object.getOwnPropertyDescriptors,Xa=Object.getOwnPropertySymbols,E_=Object.prototype.hasOwnProperty,T_=Object.prototype.propertyIsEnumerable,Ya=(e,t,n)=>t in e?M_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ot=(e,t)=>{for(var n in t||(t={}))E_.call(t,n)&&Ya(e,n,t[n]);if(Xa)for(var n of Xa(t))T_.call(t,n)&&Ya(e,n,t[n]);return e},qa=(e,t)=>x_(e,S_(t)),R_=(e,t,n)=>new Promise((i,r)=>{var o=l=>{try{s(n.next(l))}catch(c){r(c)}},a=l=>{try{s(n.throw(l))}catch(c){r(c)}},s=l=>l.done?i(l.value):Promise.resolve(l.value).then(o,a);s((n=n.apply(e,t)).next())});function An(e){return Math.pow(e,2.2)}var A_=class{get name(){return"VRMMaterialsV0CompatPlugin"}constructor(e){var t;this.parser=e,this._renderQueueMapTransparent=new Map,this._renderQueueMapTransparentZWrite=new Map;const n=this.parser.json;n.extensionsUsed=(t=n.extensionsUsed)!=null?t:[],n.extensionsUsed.indexOf("KHR_texture_transform")===-1&&n.extensionsUsed.push("KHR_texture_transform")}beforeRoot(){return R_(this,null,function*(){var e;const t=this.parser.json,n=(e=t.extensions)==null?void 0:e.VRM,i=n?.materialProperties;i&&(this._populateRenderQueueMap(i),i.forEach((r,o)=>{var a,s;const l=(a=t.materials)==null?void 0:a[o];if(l==null){console.warn(`VRMMaterialsV0CompatPlugin: Attempt to use materials[${o}] of glTF but the material doesn't exist`);return}if(r.shader==="VRM/MToon"){const c=this._parseV0MToonProperties(r,l);t.materials[o]=c}else if((s=r.shader)!=null&&s.startsWith("VRM/Unlit")){const c=this._parseV0UnlitProperties(r,l);t.materials[o]=c}else r.shader==="VRM_USE_GLTFSHADER"||console.warn(`VRMMaterialsV0CompatPlugin: Unknown shader: ${r.shader}`)}))})}_parseV0MToonProperties(e,t){var n,i,r,o,a,s,l,c,h,d,u,_,M,x,f,p,T,A,R,C,b,y,v,E,z,P,V,W,X,q,B,D,ie,oe,de,Pe,ge,Ve,ue,pe,O,$,J,ye,Ae,Le,ot,Be,ze,Ye,Ce,nt,w,Ze,Ne;const He=(i=(n=e.keywordMap)==null?void 0:n._ALPHABLEND_ON)!=null?i:!1,S=((r=e.floatProperties)==null?void 0:r._ZWrite)===1&&He,m=this._v0ParseRenderQueue(e),I=(a=(o=e.keywordMap)==null?void 0:o._ALPHATEST_ON)!=null?a:!1,Y=He?"BLEND":I?"MASK":"OPAQUE",K=I?(l=(s=e.floatProperties)==null?void 0:s._Cutoff)!=null?l:.5:void 0,ve=((h=(c=e.floatProperties)==null?void 0:c._CullMode)!=null?h:2)===0,ee=this._portTextureTransform(e),Ee=((u=(d=e.vectorProperties)==null?void 0:d._Color)!=null?u:[1,1,1,1]).map((hi,$i)=>$i===3?hi:An(hi)),we=(_=e.textureProperties)==null?void 0:_._MainTex,Q=we!=null?{index:we,extensions:Ot({},ee)}:void 0,te=(x=(M=e.floatProperties)==null?void 0:M._BumpScale)!=null?x:1,me=(f=e.textureProperties)==null?void 0:f._BumpMap,_e=me!=null?{index:me,scale:te,extensions:Ot({},ee)}:void 0,ae=((T=(p=e.vectorProperties)==null?void 0:p._EmissionColor)!=null?T:[0,0,0,1]).map(An),Ue=(A=e.textureProperties)==null?void 0:A._EmissionMap,L=Ue!=null?{index:Ue,extensions:Ot({},ee)}:void 0,re=((C=(R=e.vectorProperties)==null?void 0:R._ShadeColor)!=null?C:[.97,.81,.86,1]).map(An),ne=(b=e.textureProperties)==null?void 0:b._ShadeTexture,he=ne!=null?{index:ne,extensions:Ot({},ee)}:void 0;let Z=(v=(y=e.floatProperties)==null?void 0:y._ShadeShift)!=null?v:0,G=(z=(E=e.floatProperties)==null?void 0:E._ShadeToony)!=null?z:.9;G=ct.lerp(G,1,.5+.5*Z),Z=-Z-(1-G);const Me=(V=(P=e.floatProperties)==null?void 0:P._IndirectLightIntensity)!=null?V:.1,Ie=Me?1-Me:void 0,$e=(W=e.textureProperties)==null?void 0:W._SphereAdd,je=$e!=null?[1,1,1]:void 0,Lt=$e!=null?{index:$e}:void 0,yt=(q=(X=e.floatProperties)==null?void 0:X._RimLightingMix)!=null?q:0,Vn=(B=e.textureProperties)==null?void 0:B._RimTexture,Hn=Vn!=null?{index:Vn,extensions:Ot({},ee)}:void 0,Xi=((ie=(D=e.vectorProperties)==null?void 0:D._RimColor)!=null?ie:[0,0,0,1]).map(An),ci=(de=(oe=e.floatProperties)==null?void 0:oe._RimFresnelPower)!=null?de:1,ui=(ge=(Pe=e.floatProperties)==null?void 0:Pe._RimLift)!=null?ge:0,Xt=["none","worldCoordinates","screenCoordinates"][(ue=(Ve=e.floatProperties)==null?void 0:Ve._OutlineWidthMode)!=null?ue:0];let sn=(O=(pe=e.floatProperties)==null?void 0:pe._OutlineWidth)!=null?O:0;sn=.01*sn;const Gn=($=e.textureProperties)==null?void 0:$._OutlineWidthTexture,di=Gn!=null?{index:Gn,extensions:Ot({},ee)}:void 0,vn=((ye=(J=e.vectorProperties)==null?void 0:J._OutlineColor)!=null?ye:[0,0,0]).map(An),Mn=((Le=(Ae=e.floatProperties)==null?void 0:Ae._OutlineColorMode)!=null?Le:0)===1?(Be=(ot=e.floatProperties)==null?void 0:ot._OutlineLightingMix)!=null?Be:1:0,kn=(ze=e.textureProperties)==null?void 0:ze._UvAnimMaskTexture,fi=kn!=null?{index:kn,extensions:Ot({},ee)}:void 0,qi=(Ce=(Ye=e.floatProperties)==null?void 0:Ye._UvAnimScrollX)!=null?Ce:0;let xn=(w=(nt=e.floatProperties)==null?void 0:nt._UvAnimScrollY)!=null?w:0;xn!=null&&(xn=-xn);const Ki=(Ne=(Ze=e.floatProperties)==null?void 0:Ze._UvAnimRotation)!=null?Ne:0,ji={specVersion:"1.0",transparentWithZWrite:S,renderQueueOffsetNumber:m,shadeColorFactor:re,shadeMultiplyTexture:he,shadingShiftFactor:Z,shadingToonyFactor:G,giEqualizationFactor:Ie,matcapFactor:je,matcapTexture:Lt,rimLightingMixFactor:yt,rimMultiplyTexture:Hn,parametricRimColorFactor:Xi,parametricRimFresnelPowerFactor:ci,parametricRimLiftFactor:ui,outlineWidthMode:Xt,outlineWidthFactor:sn,outlineWidthMultiplyTexture:di,outlineColorFactor:vn,outlineLightingMixFactor:Mn,uvAnimationMaskTexture:fi,uvAnimationScrollXSpeedFactor:qi,uvAnimationScrollYSpeedFactor:xn,uvAnimationRotationSpeedFactor:Ki};return qa(Ot({},t),{pbrMetallicRoughness:{baseColorFactor:Ee,baseColorTexture:Q},normalTexture:_e,emissiveTexture:L,emissiveFactor:ae,alphaMode:Y,alphaCutoff:K,doubleSided:ve,extensions:{VRMC_materials_mtoon:ji}})}_parseV0UnlitProperties(e,t){var n,i,r,o,a;const s=e.shader==="VRM/UnlitTransparentZWrite",l=e.shader==="VRM/UnlitTransparent"||s,c=this._v0ParseRenderQueue(e),h=e.shader==="VRM/UnlitCutout",d=l?"BLEND":h?"MASK":"OPAQUE",u=h?(i=(n=e.floatProperties)==null?void 0:n._Cutoff)!=null?i:.5:void 0,_=this._portTextureTransform(e),M=((o=(r=e.vectorProperties)==null?void 0:r._Color)!=null?o:[1,1,1,1]).map(An),x=(a=e.textureProperties)==null?void 0:a._MainTex,f=x!=null?{index:x,extensions:Ot({},_)}:void 0,p={specVersion:"1.0",transparentWithZWrite:s,renderQueueOffsetNumber:c,shadeColorFactor:M,shadeMultiplyTexture:f};return qa(Ot({},t),{pbrMetallicRoughness:{baseColorFactor:M,baseColorTexture:f},alphaMode:d,alphaCutoff:u,extensions:{VRMC_materials_mtoon:p}})}_portTextureTransform(e){var t,n,i,r,o;const a=(t=e.vectorProperties)==null?void 0:t._MainTex;if(a==null)return{};const s=[(n=a?.[0])!=null?n:0,(i=a?.[1])!=null?i:0],l=[(r=a?.[2])!=null?r:1,(o=a?.[3])!=null?o:1];return s[1]=1-l[1]-s[1],{KHR_texture_transform:{offset:s,scale:l}}}_v0ParseRenderQueue(e){var t,n;const i=e.shader==="VRM/UnlitTransparentZWrite",r=((t=e.keywordMap)==null?void 0:t._ALPHABLEND_ON)!=null||e.shader==="VRM/UnlitTransparent"||i,o=((n=e.floatProperties)==null?void 0:n._ZWrite)===1||i;let a=0;if(r){const s=e.renderQueue;s!=null&&(o?a=this._renderQueueMapTransparentZWrite.get(s):a=this._renderQueueMapTransparent.get(s))}return a}_populateRenderQueueMap(e){const t=new Set,n=new Set;e.forEach(i=>{var r,o;const a=i.shader==="VRM/UnlitTransparentZWrite",s=((r=i.keywordMap)==null?void 0:r._ALPHABLEND_ON)!=null||i.shader==="VRM/UnlitTransparent"||a,l=((o=i.floatProperties)==null?void 0:o._ZWrite)===1||a;if(s){const c=i.renderQueue;c!=null&&(l?n.add(c):t.add(c))}}),t.size>10&&console.warn(`VRMMaterialsV0CompatPlugin: This VRM uses ${t.size} render queues for Transparent materials while VRM 1.0 only supports up to 10 render queues. The model might not be rendered correctly.`),n.size>10&&console.warn(`VRMMaterialsV0CompatPlugin: This VRM uses ${n.size} render queues for TransparentZWrite materials while VRM 1.0 only supports up to 10 render queues. The model might not be rendered correctly.`),Array.from(t).sort().forEach((i,r)=>{const o=Math.min(Math.max(r-t.size+1,-9),0);this._renderQueueMapTransparent.set(i,o)}),Array.from(n).sort().forEach((i,r)=>{const o=Math.min(Math.max(r,0),9);this._renderQueueMapTransparentZWrite.set(i,o)})}},Ka=(e,t,n)=>new Promise((i,r)=>{var o=l=>{try{s(n.next(l))}catch(c){r(c)}},a=l=>{try{s(n.throw(l))}catch(c){r(c)}},s=l=>l.done?i(l.value):Promise.resolve(l.value).then(o,a);s((n=n.apply(e,t)).next())}),en=new j,xr=class extends jt{constructor(e){super(),this._attrPosition=new at(new Float32Array([0,0,0,0,0,0]),3),this._attrPosition.setUsage(Bc);const t=new Tt;t.setAttribute("position",this._attrPosition);const n=new li({color:16711935,depthTest:!1,depthWrite:!1});this._line=new Cs(t,n),this.add(this._line),this.constraint=e}updateMatrixWorld(e){en.setFromMatrixPosition(this.constraint.destination.matrixWorld),this._attrPosition.setXYZ(0,en.x,en.y,en.z),this.constraint.source&&en.setFromMatrixPosition(this.constraint.source.matrixWorld),this._attrPosition.setXYZ(1,en.x,en.y,en.z),this._attrPosition.needsUpdate=!0,super.updateMatrixWorld(e)}};function ja(e,t){return t.set(e.elements[12],e.elements[13],e.elements[14])}var b_=new j,w_=new j;function P_(e,t){return e.decompose(b_,t,w_),t}function Fi(e){return e.invert?e.invert():e.inverse(),e}var Kr=class{constructor(e,t){this.destination=e,this.source=t,this.weight=1}},C_=new j,L_=new j,y_=new j,I_=new Xe,U_=new Xe,N_=new Xe,D_=class extends Kr{get aimAxis(){return this._aimAxis}set aimAxis(e){this._aimAxis=e,this._v3AimAxis.set(e==="PositiveX"?1:e==="NegativeX"?-1:0,e==="PositiveY"?1:e==="NegativeY"?-1:0,e==="PositiveZ"?1:e==="NegativeZ"?-1:0)}get dependencies(){const e=new Set([this.source]);return this.destination.parent&&e.add(this.destination.parent),e}constructor(e,t){super(e,t),this._aimAxis="PositiveX",this._v3AimAxis=new j(1,0,0),this._dstRestQuat=new Xe}setInitState(){this._dstRestQuat.copy(this.destination.quaternion)}update(){this.destination.updateWorldMatrix(!0,!1),this.source.updateWorldMatrix(!0,!1);const e=I_.identity(),t=U_.identity();this.destination.parent&&(P_(this.destination.parent.matrixWorld,e),Fi(t.copy(e)));const n=C_.copy(this._v3AimAxis).applyQuaternion(this._dstRestQuat).applyQuaternion(e),i=ja(this.source.matrixWorld,L_).sub(ja(this.destination.matrixWorld,y_)).normalize(),r=N_.setFromUnitVectors(n,i).premultiply(t).multiply(e).multiply(this._dstRestQuat);this.destination.quaternion.copy(this._dstRestQuat).slerp(r,this.weight)}};function O_(e,t){const n=[e];let i=e.parent;for(;i!==null;)n.unshift(i),i=i.parent;n.forEach(r=>{t(r)})}var F_=class{constructor(){this._constraints=new Set,this._objectConstraintsMap=new Map}get constraints(){return this._constraints}addConstraint(e){this._constraints.add(e);let t=this._objectConstraintsMap.get(e.destination);t==null&&(t=new Set,this._objectConstraintsMap.set(e.destination,t)),t.add(e)}deleteConstraint(e){this._constraints.delete(e),this._objectConstraintsMap.get(e.destination).delete(e)}setInitState(){const e=new Set,t=new Set;for(const n of this._constraints)this._processConstraint(n,e,t,i=>i.setInitState())}update(){const e=new Set,t=new Set;for(const n of this._constraints)this._processConstraint(n,e,t,i=>i.update())}_processConstraint(e,t,n,i){if(n.has(e))return;if(t.has(e))throw new Error("VRMNodeConstraintManager: Circular dependency detected while updating constraints");t.add(e);const r=e.dependencies;for(const o of r)O_(o,a=>{const s=this._objectConstraintsMap.get(a);if(s)for(const l of s)this._processConstraint(l,t,n,i)});i(e),n.add(e)}},B_=new Xe,V_=new Xe,H_=class extends Kr{get dependencies(){return new Set([this.source])}constructor(e,t){super(e,t),this._dstRestQuat=new Xe,this._invSrcRestQuat=new Xe}setInitState(){this._dstRestQuat.copy(this.destination.quaternion),Fi(this._invSrcRestQuat.copy(this.source.quaternion))}update(){const e=B_.copy(this._invSrcRestQuat).multiply(this.source.quaternion),t=V_.copy(this._dstRestQuat).multiply(e);this.destination.quaternion.copy(this._dstRestQuat).slerp(t,this.weight)}},G_=new j,k_=new Xe,W_=new Xe,z_=class extends Kr{get rollAxis(){return this._rollAxis}set rollAxis(e){this._rollAxis=e,this._v3RollAxis.set(e==="X"?1:0,e==="Y"?1:0,e==="Z"?1:0)}get dependencies(){return new Set([this.source])}constructor(e,t){super(e,t),this._rollAxis="X",this._v3RollAxis=new j(1,0,0),this._dstRestQuat=new Xe,this._invDstRestQuat=new Xe,this._invSrcRestQuatMulDstRestQuat=new Xe}setInitState(){this._dstRestQuat.copy(this.destination.quaternion),Fi(this._invDstRestQuat.copy(this._dstRestQuat)),Fi(this._invSrcRestQuatMulDstRestQuat.copy(this.source.quaternion)).multiply(this._dstRestQuat)}update(){const e=k_.copy(this._invDstRestQuat).multiply(this.source.quaternion).multiply(this._invSrcRestQuatMulDstRestQuat),t=G_.copy(this._v3RollAxis).applyQuaternion(e),i=W_.setFromUnitVectors(t,this._v3RollAxis).premultiply(this._dstRestQuat).multiply(e);this.destination.quaternion.copy(this._dstRestQuat).slerp(i,this.weight)}},X_=new Set(["1.0","1.0-beta"]),nl=class ti{get name(){return ti.EXTENSION_NAME}constructor(t,n){this.parser=t,this.helperRoot=n?.helperRoot}afterRoot(t){return Ka(this,null,function*(){t.userData.vrmNodeConstraintManager=yield this._import(t)})}_import(t){return Ka(this,null,function*(){var n;const i=this.parser.json;if(!(((n=i.extensionsUsed)==null?void 0:n.indexOf(ti.EXTENSION_NAME))!==-1))return null;const o=new F_,a=yield this.parser.getDependencies("node");return a.forEach((s,l)=>{var c;const h=i.nodes[l],d=(c=h?.extensions)==null?void 0:c[ti.EXTENSION_NAME];if(d==null)return;const u=d.specVersion;if(!X_.has(u)){console.warn(`VRMNodeConstraintLoaderPlugin: Unknown ${ti.EXTENSION_NAME} specVersion "${u}"`);return}const _=d.constraint;if(_.roll!=null){const M=this._importRollConstraint(s,a,_.roll);o.addConstraint(M)}else if(_.aim!=null){const M=this._importAimConstraint(s,a,_.aim);o.addConstraint(M)}else if(_.rotation!=null){const M=this._importRotationConstraint(s,a,_.rotation);o.addConstraint(M)}}),t.scene.updateMatrixWorld(),o.setInitState(),o})}_importRollConstraint(t,n,i){const{source:r,rollAxis:o,weight:a}=i,s=n[r],l=new z_(t,s);if(o!=null&&(l.rollAxis=o),a!=null&&(l.weight=a),this.helperRoot){const c=new xr(l);this.helperRoot.add(c)}return l}_importAimConstraint(t,n,i){const{source:r,aimAxis:o,weight:a}=i,s=n[r],l=new D_(t,s);if(o!=null&&(l.aimAxis=o),a!=null&&(l.weight=a),this.helperRoot){const c=new xr(l);this.helperRoot.add(c)}return l}_importRotationConstraint(t,n,i){const{source:r,weight:o}=i,a=n[r],s=new H_(t,a);if(o!=null&&(s.weight=o),this.helperRoot){const l=new xr(s);this.helperRoot.add(l)}return s}};nl.EXTENSION_NAME="VRMC_node_constraint";var Y_=nl,Ei=(e,t,n)=>new Promise((i,r)=>{var o=l=>{try{s(n.next(l))}catch(c){r(c)}},a=l=>{try{s(n.throw(l))}catch(c){r(c)}},s=l=>l.done?i(l.value):Promise.resolve(l.value).then(o,a);s((n=n.apply(e,t)).next())}),jr=class{},Sr=new j,pn=new j,il=class extends jr{get type(){return"capsule"}constructor(e){var t,n,i,r;super(),this.offset=(t=e?.offset)!=null?t:new j(0,0,0),this.tail=(n=e?.tail)!=null?n:new j(0,0,0),this.radius=(i=e?.radius)!=null?i:0,this.inside=(r=e?.inside)!=null?r:!1}calculateCollision(e,t,n,i){Sr.setFromMatrixPosition(e),pn.subVectors(this.tail,this.offset).applyMatrix4(e),pn.sub(Sr);const r=pn.lengthSq();i.copy(t).sub(Sr);const o=pn.dot(i);o<=0||(r<=o||pn.multiplyScalar(o/r),i.sub(pn));const a=i.length(),s=this.inside?this.radius-n-a:a-n-this.radius;return s<0&&(i.multiplyScalar(1/a),this.inside&&i.negate()),s}},Er=new j,$a=new Oe,rl=class extends jr{get type(){return"plane"}constructor(e){var t,n;super(),this.offset=(t=e?.offset)!=null?t:new j(0,0,0),this.normal=(n=e?.normal)!=null?n:new j(0,0,1)}calculateCollision(e,t,n,i){i.setFromMatrixPosition(e),i.negate().add(t),$a.getNormalMatrix(e),Er.copy(this.normal).applyNormalMatrix($a).normalize();const r=i.dot(Er)-n;return i.copy(Er),r}},q_=new j,ol=class extends jr{get type(){return"sphere"}constructor(e){var t,n,i;super(),this.offset=(t=e?.offset)!=null?t:new j(0,0,0),this.radius=(n=e?.radius)!=null?n:0,this.inside=(i=e?.inside)!=null?i:!1}calculateCollision(e,t,n,i){i.subVectors(t,q_.setFromMatrixPosition(e));const r=i.length(),o=this.inside?this.radius-n-r:r-n-this.radius;return o<0&&(i.multiplyScalar(1/r),this.inside&&i.negate()),o}},Ft=new j,K_=class extends Tt{constructor(e){super(),this.worldScale=1,this._currentRadius=0,this._currentOffset=new j,this._currentTail=new j,this._shape=e,this._attrPos=new at(new Float32Array(396),3),this.setAttribute("position",this._attrPos),this._attrIndex=new at(new Uint16Array(264),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let e=!1;const t=this._shape.radius/this.worldScale;this._currentRadius!==t&&(this._currentRadius=t,e=!0),this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),e=!0);const n=Ft.copy(this._shape.tail).divideScalar(this.worldScale);this._currentTail.distanceToSquared(n)>1e-10&&(this._currentTail.copy(n),e=!0),e&&this._buildPosition()}_buildPosition(){Ft.copy(this._currentTail).sub(this._currentOffset);const e=Ft.length()/this._currentRadius;for(let i=0;i<=16;i++){const r=i/16*Math.PI;this._attrPos.setXYZ(i,-Math.sin(r),-Math.cos(r),0),this._attrPos.setXYZ(17+i,e+Math.sin(r),Math.cos(r),0),this._attrPos.setXYZ(34+i,-Math.sin(r),0,-Math.cos(r)),this._attrPos.setXYZ(51+i,e+Math.sin(r),0,Math.cos(r))}for(let i=0;i<32;i++){const r=i/16*Math.PI;this._attrPos.setXYZ(68+i,0,Math.sin(r),Math.cos(r)),this._attrPos.setXYZ(100+i,e,Math.sin(r),Math.cos(r))}const t=Math.atan2(Ft.y,Math.sqrt(Ft.x*Ft.x+Ft.z*Ft.z)),n=-Math.atan2(Ft.z,Ft.x);this.rotateZ(t),this.rotateY(n),this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let e=0;e<34;e++){const t=(e+1)%34;this._attrIndex.setXY(e*2,e,t),this._attrIndex.setXY(68+e*2,34+e,34+t)}for(let e=0;e<32;e++){const t=(e+1)%32;this._attrIndex.setXY(136+e*2,68+e,68+t),this._attrIndex.setXY(200+e*2,100+e,100+t)}this._attrIndex.needsUpdate=!0}},j_=class extends Tt{constructor(e){super(),this.worldScale=1,this._currentOffset=new j,this._currentNormal=new j,this._shape=e,this._attrPos=new at(new Float32Array(18),3),this.setAttribute("position",this._attrPos),this._attrIndex=new at(new Uint16Array(10),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let e=!1;this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),e=!0),this._currentNormal.equals(this._shape.normal)||(this._currentNormal.copy(this._shape.normal),e=!0),e&&this._buildPosition()}_buildPosition(){this._attrPos.setXYZ(0,-.5,-.5,0),this._attrPos.setXYZ(1,.5,-.5,0),this._attrPos.setXYZ(2,.5,.5,0),this._attrPos.setXYZ(3,-.5,.5,0),this._attrPos.setXYZ(4,0,0,0),this._attrPos.setXYZ(5,0,0,.25),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this.lookAt(this._currentNormal),this._attrPos.needsUpdate=!0}_buildIndex(){this._attrIndex.setXY(0,0,1),this._attrIndex.setXY(2,1,2),this._attrIndex.setXY(4,2,3),this._attrIndex.setXY(6,3,0),this._attrIndex.setXY(8,4,5),this._attrIndex.needsUpdate=!0}},$_=class extends Tt{constructor(e){super(),this.worldScale=1,this._currentRadius=0,this._currentOffset=new j,this._shape=e,this._attrPos=new at(new Float32Array(288),3),this.setAttribute("position",this._attrPos),this._attrIndex=new at(new Uint16Array(192),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let e=!1;const t=this._shape.radius/this.worldScale;this._currentRadius!==t&&(this._currentRadius=t,e=!0),this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),e=!0),e&&this._buildPosition()}_buildPosition(){for(let e=0;e<32;e++){const t=e/16*Math.PI;this._attrPos.setXYZ(e,Math.cos(t),Math.sin(t),0),this._attrPos.setXYZ(32+e,0,Math.cos(t),Math.sin(t)),this._attrPos.setXYZ(64+e,Math.sin(t),0,Math.cos(t))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let e=0;e<32;e++){const t=(e+1)%32;this._attrIndex.setXY(e*2,e,t),this._attrIndex.setXY(64+e*2,32+e,32+t),this._attrIndex.setXY(128+e*2,64+e,64+t)}this._attrIndex.needsUpdate=!0}},Z_=new j,Tr=class extends jt{constructor(e){if(super(),this.matrixAutoUpdate=!1,this.collider=e,this.collider.shape instanceof ol)this._geometry=new $_(this.collider.shape);else if(this.collider.shape instanceof il)this._geometry=new K_(this.collider.shape);else if(this.collider.shape instanceof rl)this._geometry=new j_(this.collider.shape);else throw new Error("VRMSpringBoneColliderHelper: Unknown collider shape type detected");const t=new li({color:16711935,depthTest:!1,depthWrite:!1});this._line=new Gi(this._geometry,t),this.add(this._line)}dispose(){this._geometry.dispose()}updateMatrixWorld(e){this.collider.updateWorldMatrix(!0,!1),this.matrix.copy(this.collider.matrixWorld);const t=this.matrix.elements;this._geometry.worldScale=Z_.set(t[0],t[1],t[2]).length(),this._geometry.update(),super.updateMatrixWorld(e)}},Q_=class extends Tt{constructor(e){super(),this.worldScale=1,this._currentRadius=0,this._currentTail=new j,this._springBone=e,this._attrPos=new at(new Float32Array(294),3),this.setAttribute("position",this._attrPos),this._attrIndex=new at(new Uint16Array(194),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let e=!1;const t=this._springBone.settings.hitRadius/this.worldScale;this._currentRadius!==t&&(this._currentRadius=t,e=!0),this._currentTail.equals(this._springBone.initialLocalChildPosition)||(this._currentTail.copy(this._springBone.initialLocalChildPosition),e=!0),e&&this._buildPosition()}_buildPosition(){for(let e=0;e<32;e++){const t=e/16*Math.PI;this._attrPos.setXYZ(e,Math.cos(t),Math.sin(t),0),this._attrPos.setXYZ(32+e,0,Math.cos(t),Math.sin(t)),this._attrPos.setXYZ(64+e,Math.sin(t),0,Math.cos(t))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.setXYZ(96,0,0,0),this._attrPos.setXYZ(97,this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let e=0;e<32;e++){const t=(e+1)%32;this._attrIndex.setXY(e*2,e,t),this._attrIndex.setXY(64+e*2,32+e,32+t),this._attrIndex.setXY(128+e*2,64+e,64+t)}this._attrIndex.setXY(192,96,97),this._attrIndex.needsUpdate=!0}},J_=new j,eg=class extends jt{constructor(e){super(),this.matrixAutoUpdate=!1,this.springBone=e,this._geometry=new Q_(this.springBone);const t=new li({color:16776960,depthTest:!1,depthWrite:!1});this._line=new Gi(this._geometry,t),this.add(this._line)}dispose(){this._geometry.dispose()}updateMatrixWorld(e){this.springBone.bone.updateWorldMatrix(!0,!1),this.matrix.copy(this.springBone.bone.matrixWorld);const t=this.matrix.elements;this._geometry.worldScale=J_.set(t[0],t[1],t[2]).length(),this._geometry.update(),super.updateMatrixWorld(e)}},Rr=class extends Fn{constructor(e){super(),this.colliderMatrix=new ht,this.shape=e}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),tg(this.colliderMatrix,this.matrixWorld,this.shape.offset)}};function tg(e,t,n){const i=t.elements;e.copy(t),n&&(e.elements[12]=i[0]*n.x+i[4]*n.y+i[8]*n.z+i[12],e.elements[13]=i[1]*n.x+i[5]*n.y+i[9]*n.z+i[13],e.elements[14]=i[2]*n.x+i[6]*n.y+i[10]*n.z+i[14])}var ng=new ht;function ig(e){return e.invert?e.invert():e.getInverse(ng.copy(e)),e}var rg=class{constructor(e){this._inverseCache=new ht,this._shouldUpdateInverse=!0,this.matrix=e;const t={set:(n,i,r)=>(this._shouldUpdateInverse=!0,n[i]=r,!0)};this._originalElements=e.elements,e.elements=new Proxy(e.elements,t)}get inverse(){return this._shouldUpdateInverse&&(ig(this._inverseCache.copy(this.matrix)),this._shouldUpdateInverse=!1),this._inverseCache}revert(){this.matrix.elements=this._originalElements}},Ar=new ht,bn=new j,jn=new j,$n=new j,Zn=new j,og=new ht,ag=class{constructor(e,t,n={},i=[]){this._currentTail=new j,this._prevTail=new j,this._boneAxis=new j,this._worldSpaceBoneLength=0,this._center=null,this._initialLocalMatrix=new ht,this._initialLocalRotation=new Xe,this._initialLocalChildPosition=new j;var r,o,a,s,l,c;this.bone=e,this.bone.matrixAutoUpdate=!1,this.child=t,this.settings={hitRadius:(r=n.hitRadius)!=null?r:0,stiffness:(o=n.stiffness)!=null?o:1,gravityPower:(a=n.gravityPower)!=null?a:0,gravityDir:(l=(s=n.gravityDir)==null?void 0:s.clone())!=null?l:new j(0,-1,0),dragForce:(c=n.dragForce)!=null?c:.4},this.colliderGroups=i}get dependencies(){const e=new Set,t=this.bone.parent;t&&e.add(t);for(let n=0;n<this.colliderGroups.length;n++)for(let i=0;i<this.colliderGroups[n].colliders.length;i++)e.add(this.colliderGroups[n].colliders[i]);return e}get center(){return this._center}set center(e){var t;(t=this._center)!=null&&t.userData.inverseCacheProxy&&(this._center.userData.inverseCacheProxy.revert(),delete this._center.userData.inverseCacheProxy),this._center=e,this._center&&(this._center.userData.inverseCacheProxy||(this._center.userData.inverseCacheProxy=new rg(this._center.matrixWorld)))}get initialLocalChildPosition(){return this._initialLocalChildPosition}get _parentMatrixWorld(){return this.bone.parent?this.bone.parent.matrixWorld:Ar}setInitState(){this._initialLocalMatrix.copy(this.bone.matrix),this._initialLocalRotation.copy(this.bone.quaternion),this.child?this._initialLocalChildPosition.copy(this.child.position):this._initialLocalChildPosition.copy(this.bone.position).normalize().multiplyScalar(.07);const e=this._getMatrixWorldToCenter();this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)).applyMatrix4(e),this._prevTail.copy(this._currentTail),this._boneAxis.copy(this._initialLocalChildPosition).normalize()}reset(){this.bone.quaternion.copy(this._initialLocalRotation),this.bone.updateMatrix(),this.bone.matrixWorld.multiplyMatrices(this._parentMatrixWorld,this.bone.matrix);const e=this._getMatrixWorldToCenter();this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)).applyMatrix4(e),this._prevTail.copy(this._currentTail)}update(e){if(e<=0)return;this._calcWorldSpaceBoneLength();const t=jn.copy(this._boneAxis).transformDirection(this._initialLocalMatrix).transformDirection(this._parentMatrixWorld);Zn.copy(this._currentTail).add(bn.subVectors(this._currentTail,this._prevTail).multiplyScalar(1-this.settings.dragForce)).applyMatrix4(this._getMatrixCenterToWorld()).addScaledVector(t,this.settings.stiffness*e).addScaledVector(this.settings.gravityDir,this.settings.gravityPower*e),$n.setFromMatrixPosition(this.bone.matrixWorld),Zn.sub($n).normalize().multiplyScalar(this._worldSpaceBoneLength).add($n),this._collision(Zn),this._prevTail.copy(this._currentTail),this._currentTail.copy(Zn).applyMatrix4(this._getMatrixWorldToCenter());const n=og.multiplyMatrices(this._parentMatrixWorld,this._initialLocalMatrix).invert();this.bone.quaternion.setFromUnitVectors(this._boneAxis,bn.copy(Zn).applyMatrix4(n).normalize()).premultiply(this._initialLocalRotation),this.bone.updateMatrix(),this.bone.matrixWorld.multiplyMatrices(this._parentMatrixWorld,this.bone.matrix)}_collision(e){for(let t=0;t<this.colliderGroups.length;t++)for(let n=0;n<this.colliderGroups[t].colliders.length;n++){const i=this.colliderGroups[t].colliders[n],r=i.shape.calculateCollision(i.colliderMatrix,e,this.settings.hitRadius,bn);if(r<0){e.addScaledVector(bn,-r),e.sub($n);const o=e.length();e.multiplyScalar(this._worldSpaceBoneLength/o).add($n)}}}_calcWorldSpaceBoneLength(){bn.setFromMatrixPosition(this.bone.matrixWorld),this.child?jn.setFromMatrixPosition(this.child.matrixWorld):(jn.copy(this._initialLocalChildPosition),jn.applyMatrix4(this.bone.matrixWorld)),this._worldSpaceBoneLength=bn.sub(jn).length()}_getMatrixCenterToWorld(){return this._center?this._center.matrixWorld:Ar}_getMatrixWorldToCenter(){return this._center?this._center.userData.inverseCacheProxy.inverse:Ar}};function sg(e,t){const n=[];let i=e;for(;i!==null;)n.unshift(i),i=i.parent;n.forEach(r=>{t(r)})}function Vr(e,t){e.children.forEach(n=>{t(n)||Vr(n,t)})}function lg(e){var t;const n=new Map;for(const i of e){let r=i;do{const o=((t=n.get(r))!=null?t:0)+1;if(o===e.size)return r;n.set(r,o),r=r.parent}while(r!==null)}return null}var Za=class{constructor(){this._joints=new Set,this._sortedJoints=[],this._hasWarnedCircularDependency=!1,this._ancestors=[],this._objectSpringBonesMap=new Map,this._isSortedJointsDirty=!1,this._relevantChildrenUpdated=this._relevantChildrenUpdated.bind(this)}get joints(){return this._joints}get springBones(){return console.warn("VRMSpringBoneManager: springBones is deprecated. use joints instead."),this._joints}get colliderGroups(){const e=new Set;return this._joints.forEach(t=>{t.colliderGroups.forEach(n=>{e.add(n)})}),Array.from(e)}get colliders(){const e=new Set;return this.colliderGroups.forEach(t=>{t.colliders.forEach(n=>{e.add(n)})}),Array.from(e)}addJoint(e){this._joints.add(e);let t=this._objectSpringBonesMap.get(e.bone);t==null&&(t=new Set,this._objectSpringBonesMap.set(e.bone,t)),t.add(e),this._isSortedJointsDirty=!0}addSpringBone(e){console.warn("VRMSpringBoneManager: addSpringBone() is deprecated. use addJoint() instead."),this.addJoint(e)}deleteJoint(e){this._joints.delete(e),this._objectSpringBonesMap.get(e.bone).delete(e),this._isSortedJointsDirty=!0}deleteSpringBone(e){console.warn("VRMSpringBoneManager: deleteSpringBone() is deprecated. use deleteJoint() instead."),this.deleteJoint(e)}setInitState(){this._sortJoints();for(let e=0;e<this._sortedJoints.length;e++){const t=this._sortedJoints[e];t.bone.updateMatrix(),t.bone.updateWorldMatrix(!1,!1),t.setInitState()}}reset(){this._sortJoints();for(let e=0;e<this._sortedJoints.length;e++){const t=this._sortedJoints[e];t.bone.updateMatrix(),t.bone.updateWorldMatrix(!1,!1),t.reset()}}update(e){this._sortJoints();for(let t=0;t<this._ancestors.length;t++)this._ancestors[t].updateWorldMatrix(t===0,!1);for(let t=0;t<this._sortedJoints.length;t++){const n=this._sortedJoints[t];n.bone.updateMatrix(),n.bone.updateWorldMatrix(!1,!1),n.update(e),Vr(n.bone,this._relevantChildrenUpdated)}}_sortJoints(){if(!this._isSortedJointsDirty)return;const e=[],t=new Set,n=new Set,i=new Set;for(const o of this._joints)this._insertJointSort(o,t,n,e,i);this._sortedJoints=e;const r=lg(i);this._ancestors=[],r&&(this._ancestors.push(r),Vr(r,o=>{var a,s;return((s=(a=this._objectSpringBonesMap.get(o))==null?void 0:a.size)!=null?s:0)>0?!0:(this._ancestors.push(o),!1)})),this._isSortedJointsDirty=!1}_insertJointSort(e,t,n,i,r){if(n.has(e))return;if(t.has(e)){this._hasWarnedCircularDependency||(console.warn("VRMSpringBoneManager: Circular dependency detected"),this._hasWarnedCircularDependency=!0);return}t.add(e);const o=e.dependencies;for(const a of o){let s=!1,l=null;sg(a,c=>{const h=this._objectSpringBonesMap.get(c);if(h)for(const d of h)s=!0,this._insertJointSort(d,t,n,i,r);else s||(l=c)}),l&&r.add(l)}i.push(e),n.add(e)}_relevantChildrenUpdated(e){var t,n;return((n=(t=this._objectSpringBonesMap.get(e))==null?void 0:t.size)!=null?n:0)>0?!0:(e.updateWorldMatrix(!1,!1),!1)}},Qa="VRMC_springBone_extended_collider",cg=new Set(["1.0","1.0-beta"]),ug=new Set(["1.0"]),al=class Cn{get name(){return Cn.EXTENSION_NAME}constructor(t,n){var i;this.parser=t,this.jointHelperRoot=n?.jointHelperRoot,this.colliderHelperRoot=n?.colliderHelperRoot,this.useExtendedColliders=(i=n?.useExtendedColliders)!=null?i:!0}afterRoot(t){return Ei(this,null,function*(){t.userData.vrmSpringBoneManager=yield this._import(t)})}_import(t){return Ei(this,null,function*(){const n=yield this._v1Import(t);if(n!=null)return n;const i=yield this._v0Import(t);return i??null})}_v1Import(t){return Ei(this,null,function*(){var n,i,r,o,a;const s=t.parser.json;if(!(((n=s.extensionsUsed)==null?void 0:n.indexOf(Cn.EXTENSION_NAME))!==-1))return null;const c=new Za,h=yield t.parser.getDependencies("node"),d=(i=s.extensions)==null?void 0:i[Cn.EXTENSION_NAME];if(!d)return null;const u=d.specVersion;if(!cg.has(u))return console.warn(`VRMSpringBoneLoaderPlugin: Unknown ${Cn.EXTENSION_NAME} specVersion "${u}"`),null;const _=(r=d.colliders)==null?void 0:r.map((x,f)=>{var p,T,A,R,C,b,y,v,E,z,P,V,W,X,q;const B=h[x.node];if(B==null)return console.warn(`VRMSpringBoneLoaderPlugin: The collider #${f} attempted to use the node #${x.node} but not found`),null;const D=x.shape,ie=(p=x.extensions)==null?void 0:p[Qa];if(this.useExtendedColliders&&ie!=null){const oe=ie.specVersion;if(!ug.has(oe))console.warn(`VRMSpringBoneLoaderPlugin: Unknown ${Qa} specVersion "${oe}". Fallbacking to the ${Cn.EXTENSION_NAME} definition`);else{const de=ie.shape;if(de.sphere)return this._importSphereCollider(B,{offset:new j().fromArray((T=de.sphere.offset)!=null?T:[0,0,0]),radius:(A=de.sphere.radius)!=null?A:0,inside:(R=de.sphere.inside)!=null?R:!1});if(de.capsule)return this._importCapsuleCollider(B,{offset:new j().fromArray((C=de.capsule.offset)!=null?C:[0,0,0]),radius:(b=de.capsule.radius)!=null?b:0,tail:new j().fromArray((y=de.capsule.tail)!=null?y:[0,0,0]),inside:(v=de.capsule.inside)!=null?v:!1});if(de.plane)return this._importPlaneCollider(B,{offset:new j().fromArray((E=de.plane.offset)!=null?E:[0,0,0]),normal:new j().fromArray((z=de.plane.normal)!=null?z:[0,0,1])})}}if(D.sphere)return this._importSphereCollider(B,{offset:new j().fromArray((P=D.sphere.offset)!=null?P:[0,0,0]),radius:(V=D.sphere.radius)!=null?V:0,inside:!1});if(D.capsule)return this._importCapsuleCollider(B,{offset:new j().fromArray((W=D.capsule.offset)!=null?W:[0,0,0]),radius:(X=D.capsule.radius)!=null?X:0,tail:new j().fromArray((q=D.capsule.tail)!=null?q:[0,0,0]),inside:!1});throw new Error(`VRMSpringBoneLoaderPlugin: The collider #${f} has no valid shape`)}),M=(o=d.colliderGroups)==null?void 0:o.map((x,f)=>{var p;return{colliders:((p=x.colliders)!=null?p:[]).flatMap(A=>{const R=_?.[A];return R??(console.warn(`VRMSpringBoneLoaderPlugin: The colliderGroup #${f} attempted to use a collider #${A} but not found`),[])}),name:x.name}});return(a=d.springs)==null||a.forEach((x,f)=>{var p;const T=x.joints,A=(p=x.colliderGroups)==null?void 0:p.map(b=>{const y=M?.[b];if(y==null)throw new Error(`VRMSpringBoneLoaderPlugin: The spring #${f} attempted to use a colliderGroup ${b} but not found`);return y}),R=x.center!=null?h[x.center]:void 0;let C;T.forEach(b=>{if(C){const y=C.node,v=h[y],E=b.node,z=h[E],P={hitRadius:C.hitRadius,dragForce:C.dragForce,gravityPower:C.gravityPower,stiffness:C.stiffness,gravityDir:C.gravityDir!=null?new j().fromArray(C.gravityDir):void 0},V=this._importJoint(v,z,P,A);R&&(V.center=R),c.addJoint(V)}C=b})}),c.setInitState(),c})}_v0Import(t){return Ei(this,null,function*(){var n,i,r;const o=t.parser.json;if(!(((n=o.extensionsUsed)==null?void 0:n.indexOf("VRM"))!==-1))return null;const s=(i=o.extensions)==null?void 0:i.VRM,l=s?.secondaryAnimation;if(!l)return null;const c=l?.boneGroups;if(!c)return null;const h=new Za,d=yield t.parser.getDependencies("node"),u=(r=l.colliderGroups)==null?void 0:r.map(_=>{var M;const x=d[_.node];return{colliders:((M=_.colliders)!=null?M:[]).map((p,T)=>{var A,R,C;const b=new j(0,0,0);return p.offset&&b.set((A=p.offset.x)!=null?A:0,(R=p.offset.y)!=null?R:0,p.offset.z?-p.offset.z:0),this._importSphereCollider(x,{offset:b,radius:(C=p.radius)!=null?C:0,inside:!1})})}});return c?.forEach((_,M)=>{const x=_.bones;x&&x.forEach(f=>{var p,T,A,R;const C=d[f],b=new j;_.gravityDir?b.set((p=_.gravityDir.x)!=null?p:0,(T=_.gravityDir.y)!=null?T:0,(A=_.gravityDir.z)!=null?A:0):b.set(0,-1,0);const y=_.center!=null?d[_.center]:void 0,v={hitRadius:_.hitRadius,dragForce:_.dragForce,gravityPower:_.gravityPower,stiffness:_.stiffiness,gravityDir:b},E=(R=_.colliderGroups)==null?void 0:R.map(z=>{const P=u?.[z];if(P==null)throw new Error(`VRMSpringBoneLoaderPlugin: The spring #${M} attempted to use a colliderGroup ${z} but not found`);return P});C.traverse(z=>{var P;const V=(P=z.children[0])!=null?P:null,W=this._importJoint(z,V,v,E);y&&(W.center=y),h.addJoint(W)})})}),t.scene.updateMatrixWorld(),h.setInitState(),h})}_importJoint(t,n,i,r){const o=new ag(t,n,i,r);if(this.jointHelperRoot){const a=new eg(o);this.jointHelperRoot.add(a),a.renderOrder=this.jointHelperRoot.renderOrder}return o}_importSphereCollider(t,n){const i=new ol(n),r=new Rr(i);if(t.add(r),this.colliderHelperRoot){const o=new Tr(r);this.colliderHelperRoot.add(o),o.renderOrder=this.colliderHelperRoot.renderOrder}return r}_importCapsuleCollider(t,n){const i=new il(n),r=new Rr(i);if(t.add(r),this.colliderHelperRoot){const o=new Tr(r);this.colliderHelperRoot.add(o),o.renderOrder=this.colliderHelperRoot.renderOrder}return r}_importPlaneCollider(t,n){const i=new rl(n),r=new Rr(i);if(t.add(r),this.colliderHelperRoot){const o=new Tr(r);this.colliderHelperRoot.add(o),o.renderOrder=this.colliderHelperRoot.renderOrder}return r}};al.EXTENSION_NAME="VRMC_springBone";var dg=al,fg=class{get name(){return"VRMLoaderPlugin"}constructor(e,t){var n,i,r,o,a,s,l,c,h,d;this.parser=e;const u=t?.helperRoot,_=t?.autoUpdateHumanBones;this.expressionPlugin=(n=t?.expressionPlugin)!=null?n:new Pm(e),this.firstPersonPlugin=(i=t?.firstPersonPlugin)!=null?i:new Lm(e),this.humanoidPlugin=(r=t?.humanoidPlugin)!=null?r:new Fm(e,{helperRoot:u,autoUpdateHumanBones:_}),this.lookAtPlugin=(o=t?.lookAtPlugin)!=null?o:new Qm(e,{helperRoot:u}),this.metaPlugin=(a=t?.metaPlugin)!=null?a:new t_(e),this.mtoonMaterialPlugin=(s=t?.mtoonMaterialPlugin)!=null?s:new __(e),this.materialsHDREmissiveMultiplierPlugin=(l=t?.materialsHDREmissiveMultiplierPlugin)!=null?l:new v_(e),this.materialsV0CompatPlugin=(c=t?.materialsV0CompatPlugin)!=null?c:new A_(e),this.springBonePlugin=(h=t?.springBonePlugin)!=null?h:new dg(e,{colliderHelperRoot:u,jointHelperRoot:u}),this.nodeConstraintPlugin=(d=t?.nodeConstraintPlugin)!=null?d:new Y_(e,{helperRoot:u})}beforeRoot(){return Mi(this,null,function*(){yield this.materialsV0CompatPlugin.beforeRoot(),yield this.mtoonMaterialPlugin.beforeRoot()})}loadMesh(e){return Mi(this,null,function*(){return yield this.mtoonMaterialPlugin.loadMesh(e)})}getMaterialType(e){const t=this.mtoonMaterialPlugin.getMaterialType(e);return t??null}extendMaterialParams(e,t){return Mi(this,null,function*(){yield this.materialsHDREmissiveMultiplierPlugin.extendMaterialParams(e,t),yield this.mtoonMaterialPlugin.extendMaterialParams(e,t)})}afterRoot(e){return Mi(this,null,function*(){yield this.metaPlugin.afterRoot(e),yield this.humanoidPlugin.afterRoot(e),yield this.expressionPlugin.afterRoot(e),yield this.lookAtPlugin.afterRoot(e),yield this.firstPersonPlugin.afterRoot(e),yield this.springBonePlugin.afterRoot(e),yield this.nodeConstraintPlugin.afterRoot(e),yield this.mtoonMaterialPlugin.afterRoot(e);const t=e.userData.vrmMeta,n=e.userData.vrmHumanoid;if(t&&n){const i=new i_({scene:e.scene,expressionManager:e.userData.vrmExpressionManager,firstPerson:e.userData.vrmFirstPerson,humanoid:n,lookAt:e.userData.vrmLookAt,meta:t,materials:e.userData.vrmMToonMaterials,springBoneManager:e.userData.vrmSpringBoneManager,nodeConstraintManager:e.userData.vrmNodeConstraintManager});e.userData.vrm=i}})}};function hg(e){const t=new Set;return e.traverse(n=>{if(!n.isMesh)return;const i=n;t.add(i)}),t}function Ja(e,t,n){if(t.size===1){const a=t.values().next().value;if(a.weight===1)return e[a.index]}const i=new Float32Array(e[0].count*3);let r=0;if(n)r=1;else for(const a of t)r+=a.weight;for(const a of t){const s=e[a.index],l=a.weight/r;for(let c=0;c<s.count;c++)i[c*3+0]+=s.getX(c)*l,i[c*3+1]+=s.getY(c)*l,i[c*3+2]+=s.getZ(c)*l}return new at(i,3)}function pg(e){var t;const n=hg(e.scene),i=new Map,r=(t=e.expressionManager)==null?void 0:t.expressionMap;if(r!=null)for(const[o,a]of Object.entries(r)){const s=new Set;for(const l of a.binds)if(l instanceof Oi){if(l.weight!==0)for(const c of l.primitives){let h=i.get(c);h==null&&(h=new Map,i.set(c,h));let d=h.get(o);d==null&&(d=new Set,h.set(o,d)),d.add(l)}s.add(l)}for(const l of s)a.deleteBind(l)}for(const o of n){const a=i.get(o);if(a==null)continue;const s=o.geometry.morphAttributes;o.geometry.morphAttributes={};const l=o.geometry.clone();o.geometry=l;const c=l.morphTargetsRelative,h=s.position!=null,d=s.normal!=null,u={},_={},M=[];if(h||d){h&&(u.position=[]),d&&(u.normal=[]);let x=0;for(const[f,p]of a)h&&(u.position[x]=Ja(s.position,p,c)),d&&(u.normal[x]=Ja(s.normal,p,c)),r?.[f].addBind(new Oi({index:x,weight:1,primitives:[o]})),_[f]=x,M.push(0),x++}l.morphAttributes=u,o.morphTargetDictionary=_,o.morphTargetInfluences=M}}function Bi(e,t,n){if(e.getComponent)return e.getComponent(t,n);{let i=e.array[t*e.itemSize+n];return e.normalized&&(i=ct.denormalize(i,e.array)),i}}function sl(e,t,n,i){e.setComponent?e.setComponent(t,n,i):(e.normalized&&(i=ct.normalize(i,e.array)),e.array[t*e.itemSize+n]=i)}function mg(e){var t;const n=_g(e),i=new Set;for(const d of n)i.has(d.geometry)&&(d.geometry=Eg(d.geometry)),i.add(d.geometry);const r=new Map;for(const d of i){const u=d.getAttribute("skinIndex"),_=(t=r.get(u))!=null?t:new Map;r.set(u,_);const M=d.getAttribute("skinWeight"),x=gg(u,M);_.set(M,x)}const o=new Map;for(const d of n){const u=vg(d,r);o.set(d,u)}const a=[];for(const[d,u]of o){let _=!1;for(const M of a)if(Mg(u,M.boneInverseMap)){_=!0,M.meshes.add(d);for(const[f,p]of u)M.boneInverseMap.set(f,p);break}_||a.push({boneInverseMap:u,meshes:new Set([d])})}const s=new Map,l=new br,c=new br,h=new br;for(const d of a){const{boneInverseMap:u,meshes:_}=d,M=Array.from(u.keys()),x=Array.from(u.values()),f=new ki(M,x),p=c.getOrCreate(f);for(const T of _){const A=T.geometry.getAttribute("skinIndex"),R=l.getOrCreate(A),C=T.skeleton.bones,b=C.map(E=>h.getOrCreate(E)).join(","),y=`${R};${p};${b}`;let v=s.get(y);v==null&&(v=A.clone(),xg(v,C,M),s.set(y,v)),T.geometry.setAttribute("skinIndex",v)}for(const T of _)T.bind(f,new ht)}}function _g(e){const t=new Set;return e.traverse(n=>{if(!n.isSkinnedMesh)return;const i=n;t.add(i)}),t}function gg(e,t){const n=new Set;for(let i=0;i<e.count;i++)for(let r=0;r<e.itemSize;r++){const o=Bi(e,i,r);Bi(t,i,r)!==0&&n.add(o)}return n}function vg(e,t){const n=new Map,i=e.skeleton,r=e.geometry,o=r.getAttribute("skinIndex"),a=r.getAttribute("skinWeight"),s=t.get(o),l=s?.get(a);if(!l)throw new Error("Unreachable. attributeUsedIndexSetMap does not know the skin index attribute or the skin weight attribute.");for(const c of l)n.set(i.bones[c],i.boneInverses[c]);return n}function Mg(e,t){for(const[n,i]of e.entries()){const r=t.get(n);if(r!=null&&!Sg(i,r))return!1}return!0}function xg(e,t,n){const i=new Map;for(const o of t)i.set(o,i.size);const r=new Map;for(const[o,a]of n.entries()){const s=i.get(a);r.set(s,o)}for(let o=0;o<e.count;o++)for(let a=0;a<e.itemSize;a++){const s=Bi(e,o,a),l=r.get(s);sl(e,o,a,l)}e.needsUpdate=!0}function Sg(e,t,n){if(n=n||1e-4,e.elements.length!=t.elements.length)return!1;for(let i=0,r=e.elements.length;i<r;i++)if(Math.abs(e.elements[i]-t.elements[i])>n)return!1;return!0}var br=class{constructor(){this._objectIndexMap=new Map,this._index=0}get(e){return this._objectIndexMap.get(e)}getOrCreate(e){let t=this._objectIndexMap.get(e);return t==null&&(t=this._index,this._objectIndexMap.set(e,t),this._index++),t}};function Eg(e){var t,n,i,r;const o=new Tt;o.name=e.name,o.setIndex(e.index);for(const[a,s]of Object.entries(e.attributes))o.setAttribute(a,s);for(const[a,s]of Object.entries(e.morphAttributes)){const l=a;o.morphAttributes[l]=s.concat()}o.morphTargetsRelative=e.morphTargetsRelative,o.groups=[];for(const a of e.groups)o.addGroup(a.start,a.count,a.materialIndex);return o.boundingSphere=(n=(t=e.boundingSphere)==null?void 0:t.clone())!=null?n:null,o.boundingBox=(r=(i=e.boundingBox)==null?void 0:i.clone())!=null?r:null,o.drawRange.start=e.drawRange.start,o.drawRange.count=e.drawRange.count,o.userData=e.userData,o}function es(e){if(Object.values(e).forEach(t=>{t?.isTexture&&t.dispose()}),e.isShaderMaterial){const t=e.uniforms;t&&Object.values(t).forEach(n=>{const i=n.value;i?.isTexture&&i.dispose()})}e.dispose()}function Tg(e){const t=e.geometry;t&&t.dispose();const n=e.skeleton;n&&n.dispose();const i=e.material;i&&(Array.isArray(i)?i.forEach(r=>es(r)):i&&es(i))}function Rg(e){e.traverse(Tg)}function Ag(e,t){var n,i;console.warn("VRMUtils.removeUnnecessaryJoints: removeUnnecessaryJoints is deprecated. Use combineSkeletons instead. combineSkeletons contributes more to the performance improvement. This function will be removed in the next major version.");const r=(n=t?.experimentalSameBoneCounts)!=null?n:!1,o=[];e.traverse(l=>{l.type==="SkinnedMesh"&&o.push(l)});const a=new Map;let s=0;for(const l of o){const h=l.geometry.getAttribute("skinIndex");if(a.has(h))continue;const d=new Map,u=new Map;for(let _=0;_<h.count;_++)for(let M=0;M<h.itemSize;M++){const x=Bi(h,_,M);let f=d.get(x);f==null&&(f=d.size,d.set(x,f),u.set(f,x)),sl(h,_,M,f)}h.needsUpdate=!0,a.set(h,u),s=Math.max(s,d.size)}for(const l of o){const h=l.geometry.getAttribute("skinIndex"),d=a.get(h),u=[],_=[],M=r?s:d.size;for(let f=0;f<M;f++){const p=(i=d.get(f))!=null?i:0;u.push(l.skeleton.bones[p]),_.push(l.skeleton.boneInverses[p])}const x=new ki(u,_);l.bind(x,new ht)}}function bg(e,t){const n=e.position.count,i=new Array(n);let r=0;const o=t.array;for(let a=0;a<o.length;a++){const s=o[a];i[s]||(i[s]=!0,r++)}return{isVertexUsed:i,vertexCount:n,verticesUsed:r}}function wg(e){const t=[],n=[];let i=0;for(let r=0;r<e.length;r++)if(e[r]){const o=i++;t[r]=o,n[o]=r}return{originalIndexNewIndexMap:t,newIndexOriginalIndexMap:n}}function Pg(e,t){var n,i,r,o;t.name=e.name,t.morphTargetsRelative=e.morphTargetsRelative,e.groups.forEach(a=>{t.addGroup(a.start,a.count,a.materialIndex)}),t.boundingBox=(i=(n=e.boundingBox)==null?void 0:n.clone())!=null?i:null,t.boundingSphere=(o=(r=e.boundingSphere)==null?void 0:r.clone())!=null?o:null,t.setDrawRange(e.drawRange.start,e.drawRange.count),t.userData=e.userData}function Cg(e,t,n){const i=t.array,r=new i.constructor(i.length);for(let o=0;o<i.length;o++){const a=i[o];r[o]=n[a]}e.setIndex(new at(r,t.itemSize,t.normalized))}function Vi(e,t,n){const i=e.constructor,r=new i(t.length*n);let o=!0;for(let a=0;a<t.length;a++){const l=t[a]*n,c=a*n;for(let h=0;h<n;h++){const d=e[l+h];r[c+h]=d,o=o&&d===0}}return[r,o]}function Lg(e){var t;const n=new Map,i=[];for(const[r,o]of Object.entries(e))if(o.isInterleavedBufferAttribute){const a=o,s=a.data,l=(t=n.get(s))!=null?t:[];n.set(s,l),l.push([r,a])}else{const a=o;i.push([r,a])}return[n,i]}function yg(e,t,n){const[i,r]=Lg(t);for(const[o,a]of i){const s=o.array,{stride:l}=o,[c]=Vi(s,n,l),h=new zr(c,l);h.setUsage(o.usage);for(const[d,u]of a){const{itemSize:_,offset:M,normalized:x}=u,f=new Yr(h,_,M,x);e.setAttribute(d,f)}}for(const[o,a]of r){const s=a.array,{itemSize:l,normalized:c}=a,[h]=Vi(s,n,l);e.setAttribute(o,new at(h,l,c))}}function Ig(e){var t;const n=new Map,i=[];for(const[r,o]of Object.entries(e)){const a=r;for(let s=0;s<o.length;s++){const l=o[s];if(l.isInterleavedBufferAttribute){const c=l,h=c.data,d=(t=n.get(h))!=null?t:[];n.set(h,d),d.push([a,s,c])}else{const c=l;i.push([a,s,c])}}}return[n,i]}function Ug(e,t,n){var i,r;let o=!0;const[a,s]=Ig(t),l={};for(const[c,h]of a){const d=c.array,{stride:u}=c,[_,M]=Vi(d,n,u);o=o&&M;const x=new zr(_,u);x.setUsage(c.usage);for(const[f,p,T]of h){const{itemSize:A,offset:R,normalized:C}=T,b=new Yr(x,A,R,C);(i=l[f])!=null||(l[f]=[]),l[f][p]=b}}for(const[c,h,d]of s){const u=d,_=u.array,{itemSize:M,normalized:x}=u,[f,p]=Vi(_,n,M);o=o&&p,(r=l[c])!=null||(l[c]=[]),l[c][h]=new at(f,M,x)}e.morphAttributes=o?{}:l}function Ng(e){const t=new Map;e.traverse(n=>{if(!n.isMesh)return;const i=n,r=i.geometry,o=r.index;if(o==null)return;const a=t.get(r);if(a!=null){i.geometry=a;return}const{isVertexUsed:s,vertexCount:l,verticesUsed:c}=bg(r.attributes,o);if(c===l)return;const{originalIndexNewIndexMap:h,newIndexOriginalIndexMap:d}=wg(s),u=new Tt;Pg(r,u),t.set(r,u),Cg(u,o,h),yg(u,r.attributes,d),Ug(u,r.morphAttributes,d),i.geometry=u}),Array.from(t.keys()).forEach(n=>{n.dispose()})}function Dg(e){var t;((t=e.meta)==null?void 0:t.metaVersion)==="0"&&(e.scene.rotation.y=Math.PI)}var $t=class{constructor(){}};$t.combineMorphs=pg;$t.combineSkeletons=mg;$t.deepDispose=Rg;$t.removeUnnecessaryJoints=Ag;$t.removeUnnecessaryVertices=Ng;$t.rotateVRM0=Dg;/*!
 * @pixiv/three-vrm-core v3.5.1
 * The implementation of core features of VRM, for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2026 pixiv Inc.
 * @pixiv/three-vrm-core is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 *//*!
 * @pixiv/three-vrm-materials-mtoon v3.5.1
 * MToon (toon material) module for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2026 pixiv Inc.
 * @pixiv/three-vrm-materials-mtoon is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 *//*!
 * @pixiv/three-vrm-materials-hdr-emissive-multiplier v3.5.1
 * Support VRMC_hdr_emissiveMultiplier for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2026 pixiv Inc.
 * @pixiv/three-vrm-materials-hdr-emissive-multiplier is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 *//*!
 * @pixiv/three-vrm-materials-v0compat v3.5.1
 * VRM0.0 materials compatibility layer plugin for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2026 pixiv Inc.
 * @pixiv/three-vrm-materials-v0compat is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 *//*!
 * @pixiv/three-vrm-node-constraint v3.5.1
 * Node constraint module for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2026 pixiv Inc.
 * @pixiv/three-vrm-node-constraint is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 *//*!
 * @pixiv/three-vrm-springbone v3.5.1
 * Spring bone module for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2026 pixiv Inc.
 * @pixiv/three-vrm-springbone is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 */const Og={key:0,class:"loading-state"},Fg={key:1,class:"error-state"},Bg={class:"error-message"},Vg={key:2,class:"drag-hint"},Hg={__name:"VRoidViewer",setup(e){const t=rr(null),n=rr(!0),i=rr(null);let r,o,a,s,l,c,h=0,d=!1,u=!1,_={x:0},M=0,x=0,f=0,p=0,T=!1,A=null,R=null,C=null,b=null,y=!1,v=0,E=0,z=0,P=0;qc(()=>{X(),q(),ge(),oe(),V()}),Kc(()=>{y=!0,R&&cancelAnimationFrame(R),C&&cancelAnimationFrame(C),A&&A.disconnect(),de(),a&&(a.dispose(),a.forceContextLoss(),a.domElement.remove()),s&&$t.deepDispose(s.scene)});function V(){t.value&&(A=new ResizeObserver(()=>{W()}),A.observe(t.value))}function W(){if(!t.value||!a)return;const ue=t.value.getBoundingClientRect(),pe=Math.min(ue.width,ue.height)||200;a.setSize(pe,pe),o.aspect=1,o.updateProjectionMatrix()}function X(){r=new Hc,o=new yn(30,1,.1,20),o.position.set(0,1.35,3.2),a=new Wp({alpha:!0,antialias:!0}),a.setSize(200,200),a.setPixelRatio(Math.min(window.devicePixelRatio,2)),a.shadowMap.enabled=!0,t.value&&t.value.appendChild(a.domElement);const ue=new bi(16774632,1.3);ue.position.set(1,1.5,1.5),r.add(ue);const pe=new bi(13162239,.5);pe.position.set(-.8,.6,-.5),r.add(pe);const O=new bi(16777215,.6);O.position.set(0,1.2,-1.5),r.add(O);const $=new Gc(16777215,.5);r.add($),c=new kc}function q(){const ue=new Xp;ue.register(pe=>new fg(pe)),Yc().then(pe=>{y||ue.parse(pe,"",B,D)}).catch(()=>{y||D()})}function B(ue){if(!y){if(s=ue.userData.vrm,!s){i.value="VRM 数据未找到，请确保文件是 VRM 格式",n.value=!1;return}if($t.removeUnnecessaryVertices(ue.scene),$t.combineSkeletons(ue.scene),s.scene.rotation.y=0,s.scene.position.y=.6,r.add(s.scene),l=new Wc(s.scene),s.blendShapeProxy){const pe=["joy","fun","happy","smile","laugh","grin","Joy","Fun","Happy","Smile"];let O=!1;for(const $ of pe)try{s.blendShapeProxy.setValue($,.25),O=!0;break}catch{}}n.value=!1}}function D(){i.value="模型加载失败，请稍后刷新重试",n.value=!1,ie()}function ie(){const ue=new zc(.5,32,32),pe=new Xr({color:6514417,wireframe:!0}),O=new bt(ue,pe);O.position.y=0,r.add(O);const $=()=>{C=requestAnimationFrame($),O&&(O.rotation.y+=.01,O.rotation.x+=.005)};$()}function oe(){const ue=a.domElement;b={mousedown:pe=>{d=!0,x=0,_={x:pe.clientX,y:pe.clientY}},mousemove:pe=>{if(s){if(d)x=(pe.clientX-_.x)*.01,M+=x,_={x:pe.clientX,y:pe.clientY};else if(u){const O=ue.getBoundingClientRect(),$=O.left+O.width/2,J=O.top+O.height/2;v=(pe.clientY-J)/(O.height/2)*.08,E=(pe.clientX-$)/(O.width/2)*.12}}},mouseup:()=>{d=!1},mouseenter:()=>{u=!0},mouseleave:()=>{d=!1,u=!1,v=0,E=0},touchstart:pe=>{d=!0,x=0,_={x:pe.touches[0].clientX,y:pe.touches[0].clientY}},touchmove:pe=>{if(!d||!s)return;x=(pe.touches[0].clientX-_.x)*.01,M+=x,_={x:pe.touches[0].clientX,y:pe.touches[0].clientY}},touchend:()=>{d=!1}},ue.addEventListener("mousedown",b.mousedown),ue.addEventListener("mousemove",b.mousemove),ue.addEventListener("mouseup",b.mouseup),ue.addEventListener("mouseenter",b.mouseenter),ue.addEventListener("mouseleave",b.mouseleave),ue.addEventListener("touchstart",b.touchstart,{passive:!0}),ue.addEventListener("touchmove",b.touchmove,{passive:!0}),ue.addEventListener("touchend",b.touchend)}function de(){if(!b||!a)return;const ue=a.domElement;ue.removeEventListener("mousedown",b.mousedown),ue.removeEventListener("mousemove",b.mousemove),ue.removeEventListener("mouseup",b.mouseup),ue.removeEventListener("mouseenter",b.mouseenter),ue.removeEventListener("mouseleave",b.mouseleave),ue.removeEventListener("touchstart",b.touchstart),ue.removeEventListener("touchmove",b.touchmove),ue.removeEventListener("touchend",b.touchend),b=null}function Pe(ue){const pe=Math.sin(ue*1.57),O=Math.sin(ue*3.14+1.2)*.25;return Math.pow(Math.abs((pe+1)/2),.7)*2-1+O*.15}function ge(){R=requestAnimationFrame(ge);const ue=Math.min(c.getDelta(),.1);if(h+=ue,l&&l.update(ue),s){s.update(ue);const pe=s.humanoid.getNormalizedBoneNode("leftUpperArm"),O=s.humanoid.getNormalizedBoneNode("rightUpperArm"),$=s.humanoid.getNormalizedBoneNode("leftLowerArm"),J=s.humanoid.getNormalizedBoneNode("rightLowerArm"),ye=s.humanoid.getNormalizedBoneNode("leftUpperLeg"),Ae=s.humanoid.getNormalizedBoneNode("rightUpperLeg"),Le=s.humanoid.getNormalizedBoneNode("leftLowerLeg"),ot=s.humanoid.getNormalizedBoneNode("rightLowerLeg"),Be=s.humanoid.getNormalizedBoneNode("spine"),ze=s.humanoid.getNormalizedBoneNode("head"),Ye=s.humanoid.getNormalizedBoneNode("hips"),Ce=Pe(h),nt=Math.sin(h*2.1+.7)*.25,w=Math.sin(h*1.3)*.7+Math.sin(h*.7+1.8)*.3,Ze=Math.sin(h*.55+1.2)*.6+Math.sin(h*.35+3.1)*.4,Ne=Math.sin(h*4.3+.3)*.025,He=Math.sin(h*5.1+1.7)*.02,fe=Math.sin(h*3.7+2.9)*.018;if(Ve(ue),ze){const Ue=Math.sin(h*.7)*.05+Math.sin(h*1.3+.8)*.03,L=Math.sin(h*.55+.5)*.07+Math.sin(h*1.1+2.1)*.04,re=Math.sin(h*.45+1)*.03+Math.sin(h*1.6)*.02,ne=h*.15,he=(Math.sin(ne)+1)/2,Z=Math.pow(Math.max(0,he-.85)*6.67,3),G=Math.sin(h*1.8+.3)*.08*Z,Me=Math.cos(h*1.5+.7)*.12*Z;ze.rotation.x=Ue+G+Ne,ze.rotation.y=L+Me,ze.rotation.z=re+fe*.5}Be&&(Be.rotation.x=Ce*.05+nt*.02,Be.rotation.z=w*.035+Ze*.025,Be.rotation.y=w*.025),Ye&&(Ye.rotation.z=w*.05+Ze*.035,Ye.rotation.x=Ce*.025);const S=s.humanoid.getNormalizedBoneNode("leftIndexProximal"),m=s.humanoid.getNormalizedBoneNode("leftMiddleProximal"),I=s.humanoid.getNormalizedBoneNode("leftRingProximal"),Y=s.humanoid.getNormalizedBoneNode("leftLittleProximal"),K=s.humanoid.getNormalizedBoneNode("leftThumbProximal"),k=s.humanoid.getNormalizedBoneNode("rightIndexProximal"),ve=s.humanoid.getNormalizedBoneNode("rightMiddleProximal"),ee=s.humanoid.getNormalizedBoneNode("rightRingProximal"),Ee=s.humanoid.getNormalizedBoneNode("rightLittleProximal"),we=s.humanoid.getNormalizedBoneNode("rightThumbProximal"),Q=Math.sin(h*3)*.1,te=Math.sin(h*3+Math.PI)*.1,me=Math.sin(h*2.2)*.06,_e=Math.cos(h*2.2)*.06,ae=Math.sin(h*2)*.07;if(O&&(O.rotation.z=.65+te+w*.03+Ce*.015+He,O.rotation.x=-.45+me*.5-w*.02+Ce*.02+fe,O.rotation.y=-.18+_e*.5+w*.02+Ne),J&&(J.rotation.x=-.9+te*.5-w*.03+Ce*.015+He,J.rotation.z=.5+Q+Ne*.3,J.rotation.y=-.1+_e+He*.3),pe&&(pe.rotation.z=-.65+Q+w*.04+Ce*.015+Ne,pe.rotation.x=-.45+me*.5+w*.03+Ce*.02+He,pe.rotation.y=.18+_e*.5+w*.02+fe),$&&($.rotation.x=-.9+Q*.5+w*.03+Ce*.015+fe,$.rotation.z=-.5+te+Ne*.3,$.rotation.y=.1+_e+He*.3),S&&(S.rotation.x=.05+ae+Ne*.2),m&&(m.rotation.x=.05+ae+He*.2),I&&(I.rotation.x=1.2-ae*.5+fe*.2),Y&&(Y.rotation.x=1.2-ae*.5+Ne*.2),K&&(K.rotation.x=.6+ae*.3,K.rotation.z=.3),k&&(k.rotation.x=.05+ae+He*.2),ve&&(ve.rotation.x=.05+ae+fe*.2),ee&&(ee.rotation.x=1.2-ae*.5+Ne*.2),Ee&&(Ee.rotation.x=1.2-ae*.5+He*.2),we&&(we.rotation.x=.6+ae*.3,we.rotation.z=-.3),ye&&(ye.rotation.x=w*.04+Ze*.03+Ne*.5,ye.rotation.z=w*.02+He*.5),Ae&&(Ae.rotation.x=-w*.04-Ze*.03+He*.5,Ae.rotation.z=-w*.02+fe*.5),Le&&(Le.rotation.x=w*.02+fe*.3),ot&&(ot.rotation.x=-w*.02+Ne*.3),!d&&Math.abs(x)>1e-4?(M+=x,x*=.94):!d&&Math.abs(x)<=1e-4&&(x=0),s.scene.rotation.y+=(M-s.scene.rotation.y)*.06,!d&&Math.abs(x)<5e-4&&(s.scene.rotation.y+=Math.sin(h*.35+1.5)*6e-4),z+=(v-z)*.05,P+=(E-P)*.05,Math.abs(z)>.001||Math.abs(P)>.001?(s.scene.rotation.x=z,s.scene.rotation.y+=P*.3):d||(s.scene.rotation.x+=(0-s.scene.rotation.x)*.03),s.scene.position.y=.6+Ce*.025,s.blendShapeProxy)try{s.blendShapeProxy.setValue("joy",1)}catch{}}a.render(r,o)}function Ve(ue){if(!(!s||!s.blendShapeProxy)){if(f+=ue,!T&&f>=p&&(T=!0,f=0),T){const O=Math.min(f/.15,1);let $;if(O<.35)$=Math.sin(O/.35*Math.PI*.5);else if(O<.5)$=1;else{const J=(O-.5)/.5;$=1-Math.sin(J*Math.PI*.5)}try{s.blendShapeProxy.setValue("blink",$)}catch{}if(O>=1){T=!1,f=0,p=2+Math.random()*4;try{s.blendShapeProxy.setValue("blink",0)}catch{}}}p===0&&(p=1+Math.random()*3)}}return(ue,pe)=>(mi(),pi("div",{ref_key:"container",ref:t,class:"vroid-viewer"},[n.value?(mi(),pi("div",Og,[...pe[0]||(pe[0]=[_i("div",{class:"spinner"},null,-1),_i("p",null,"加载模型中...",-1)])])):or("",!0),i.value?(mi(),pi("div",Fg,[pe[1]||(pe[1]=_i("p",null,"模型加载失败",-1)),_i("p",Bg,jc(i.value),1)])):or("",!0),!n.value&&!i.value?(mi(),pi("div",Vg,"↔ 拖拽旋转")):or("",!0)],512))}},Yg=Xc(Hg,[["__scopeId","data-v-25b4ca38"]]);export{Yg as default};

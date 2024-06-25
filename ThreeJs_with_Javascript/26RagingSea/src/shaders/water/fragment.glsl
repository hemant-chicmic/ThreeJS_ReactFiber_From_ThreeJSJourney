



uniform vec3 uDepthColor ;
uniform vec3 uSurfaceColor ;
uniform float uColorOffSet ;
uniform float uColorMultiplier ;


varying float vElevation ; 


void main()
{
    float mixStrangth = (vElevation + uColorOffSet) * uColorMultiplier ;     
    vec3 color = mix( uDepthColor  , uSurfaceColor , mixStrangth ) ;  
    gl_FragColor = vec4(color , 1.0);
}























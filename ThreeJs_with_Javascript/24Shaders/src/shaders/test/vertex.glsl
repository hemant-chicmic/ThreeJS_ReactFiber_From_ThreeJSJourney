uniform mat4 projectionMatrix ;
uniform mat4 viewMatrix ;
uniform mat4 modelMatrix ;
uniform mat4 modelViewMatrix ;

attribute vec3 position ;
attribute float aRandom  ;

varying float vRandom  ;



void main()
{
    // gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position , 1.0 ) ;
    // gl_Position = projectionMatrix * modelViewMatrix * vec4(position , 1.0 ) ;

    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    modelPosition.z += sin(modelPosition.x * 10.0) * 0.1;
    // modelPosition.z += aRandom * 0.1;
    vec4 viewPosition = viewMatrix * modelPosition ;
    vec4 projectedPosition = projectionMatrix * viewPosition ;

    gl_Position = projectedPosition ; 

    vRandom = aRandom ; 
}
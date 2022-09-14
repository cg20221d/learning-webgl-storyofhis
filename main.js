function main() {
  var kanvas = document.getElementById("kanvas");
  var gl = kanvas.getContext("webgl");

  //  vertex shader -> proses posisi
  let vertexShaderCode = `
  void main () {
    float x = 0.0;
    float y = 0.0;
    gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
    gl_PointSize = 10.0;
  }
  `;
  let vertexShaderObject = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShaderObject, vertexShaderCode);
  gl.compileShader(vertexShaderObject); // sampai sini sudah jadi .o (dot)o

  // Fragment shader -> proses warna
  let fragmentShaderCode = `
  precision mediump float;
  void main () {
    float r = 0.0;
    float g = 0.0;
    float b = 1.0;
    gl_FragColor = vec4(r, g, b, 1.0);
  }
`;
  let fragmentShaderObject = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShaderObject, fragmentShaderCode);
  gl.compileShader(fragmentShaderObject); // sampai sini sudah jadi .o (dot)o

  var shaderProgram = gl.createProgram(); // wadah dari executable (.exe)
  gl.attachShader(shaderProgram, vertexShaderObject);
  gl.attachShader(shaderProgram, fragmentShaderObject);
  gl.linkProgram(shaderProgram);
  gl.useProgram(shaderProgram);

  gl.clearColor(0.0, 0.65, 0.0, 1.0);
  //            merah, hijau, biru, transparansi

  gl.clear(gl.COLOR_BUFFER_BIT);

  gl.drawArrays(gl.POINTS, 0, 1);
}
main();

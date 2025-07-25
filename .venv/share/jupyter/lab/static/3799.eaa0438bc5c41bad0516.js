(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [3799, 5606],
  {
    56180: (e, t, i) => {
      var s = i(65606);
      !(function (t, i) {
        true ? (e.exports = i()) : 0;
      })(self, () =>
        (() => {
          "use strict";
          var e = {
              965: (e, t, i) => {
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.GlyphRenderer = void 0);
                const s = i(374),
                  r = i(509),
                  o = i(855),
                  n = i(859),
                  a = i(381),
                  h = 11,
                  l = h * Float32Array.BYTES_PER_ELEMENT;
                let c,
                  d = 0,
                  _ = 0,
                  u = 0;
                class g extends n.Disposable {
                  constructor(e, t, i, o) {
                    super(),
                      (this._terminal = e),
                      (this._gl = t),
                      (this._dimensions = i),
                      (this._optionsService = o),
                      (this._activeBuffer = 0),
                      (this._vertices = { count: 0, attributes: new Float32Array(0), attributesBuffers: [new Float32Array(0), new Float32Array(0)] });
                    const h = this._gl;
                    void 0 === r.TextureAtlas.maxAtlasPages &&
                      ((r.TextureAtlas.maxAtlasPages = Math.min(32, (0, s.throwIfFalsy)(h.getParameter(h.MAX_TEXTURE_IMAGE_UNITS)))),
                      (r.TextureAtlas.maxTextureSize = (0, s.throwIfFalsy)(h.getParameter(h.MAX_TEXTURE_SIZE)))),
                      (this._program = (0, s.throwIfFalsy)(
                        (0, a.createProgram)(
                          h,
                          "#version 300 es\nlayout (location = 0) in vec2 a_unitquad;\nlayout (location = 1) in vec2 a_cellpos;\nlayout (location = 2) in vec2 a_offset;\nlayout (location = 3) in vec2 a_size;\nlayout (location = 4) in float a_texpage;\nlayout (location = 5) in vec2 a_texcoord;\nlayout (location = 6) in vec2 a_texsize;\n\nuniform mat4 u_projection;\nuniform vec2 u_resolution;\n\nout vec2 v_texcoord;\nflat out int v_texpage;\n\nvoid main() {\n  vec2 zeroToOne = (a_offset / u_resolution) + a_cellpos + (a_unitquad * a_size);\n  gl_Position = u_projection * vec4(zeroToOne, 0.0, 1.0);\n  v_texpage = int(a_texpage);\n  v_texcoord = a_texcoord + a_unitquad * a_texsize;\n}",
                          (function (e) {
                            let t = "";
                            for (let i = 1; i < e; i++) t += ` else if (v_texpage == ${i}) { outColor = texture(u_texture[${i}], v_texcoord); }`;
                            return `#version 300 es\nprecision lowp float;\n\nin vec2 v_texcoord;\nflat in int v_texpage;\n\nuniform sampler2D u_texture[${e}];\n\nout vec4 outColor;\n\nvoid main() {\n  if (v_texpage == 0) {\n    outColor = texture(u_texture[0], v_texcoord);\n  } ${t}\n}`;
                          })(r.TextureAtlas.maxAtlasPages)
                        )
                      )),
                      this.register((0, n.toDisposable)(() => h.deleteProgram(this._program))),
                      (this._projectionLocation = (0, s.throwIfFalsy)(h.getUniformLocation(this._program, "u_projection"))),
                      (this._resolutionLocation = (0, s.throwIfFalsy)(h.getUniformLocation(this._program, "u_resolution"))),
                      (this._textureLocation = (0, s.throwIfFalsy)(h.getUniformLocation(this._program, "u_texture"))),
                      (this._vertexArrayObject = h.createVertexArray()),
                      h.bindVertexArray(this._vertexArrayObject);
                    const c = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]),
                      d = h.createBuffer();
                    this.register((0, n.toDisposable)(() => h.deleteBuffer(d))),
                      h.bindBuffer(h.ARRAY_BUFFER, d),
                      h.bufferData(h.ARRAY_BUFFER, c, h.STATIC_DRAW),
                      h.enableVertexAttribArray(0),
                      h.vertexAttribPointer(0, 2, this._gl.FLOAT, !1, 0, 0);
                    const _ = new Uint8Array([0, 1, 2, 3]),
                      u = h.createBuffer();
                    this.register((0, n.toDisposable)(() => h.deleteBuffer(u))),
                      h.bindBuffer(h.ELEMENT_ARRAY_BUFFER, u),
                      h.bufferData(h.ELEMENT_ARRAY_BUFFER, _, h.STATIC_DRAW),
                      (this._attributesBuffer = (0, s.throwIfFalsy)(h.createBuffer())),
                      this.register((0, n.toDisposable)(() => h.deleteBuffer(this._attributesBuffer))),
                      h.bindBuffer(h.ARRAY_BUFFER, this._attributesBuffer),
                      h.enableVertexAttribArray(2),
                      h.vertexAttribPointer(2, 2, h.FLOAT, !1, l, 0),
                      h.vertexAttribDivisor(2, 1),
                      h.enableVertexAttribArray(3),
                      h.vertexAttribPointer(3, 2, h.FLOAT, !1, l, 2 * Float32Array.BYTES_PER_ELEMENT),
                      h.vertexAttribDivisor(3, 1),
                      h.enableVertexAttribArray(4),
                      h.vertexAttribPointer(4, 1, h.FLOAT, !1, l, 4 * Float32Array.BYTES_PER_ELEMENT),
                      h.vertexAttribDivisor(4, 1),
                      h.enableVertexAttribArray(5),
                      h.vertexAttribPointer(5, 2, h.FLOAT, !1, l, 5 * Float32Array.BYTES_PER_ELEMENT),
                      h.vertexAttribDivisor(5, 1),
                      h.enableVertexAttribArray(6),
                      h.vertexAttribPointer(6, 2, h.FLOAT, !1, l, 7 * Float32Array.BYTES_PER_ELEMENT),
                      h.vertexAttribDivisor(6, 1),
                      h.enableVertexAttribArray(1),
                      h.vertexAttribPointer(1, 2, h.FLOAT, !1, l, 9 * Float32Array.BYTES_PER_ELEMENT),
                      h.vertexAttribDivisor(1, 1),
                      h.useProgram(this._program);
                    const g = new Int32Array(r.TextureAtlas.maxAtlasPages);
                    for (let s = 0; s < r.TextureAtlas.maxAtlasPages; s++) g[s] = s;
                    h.uniform1iv(this._textureLocation, g),
                      h.uniformMatrix4fv(this._projectionLocation, !1, a.PROJECTION_MATRIX),
                      (this._atlasTextures = []);
                    for (let l = 0; l < r.TextureAtlas.maxAtlasPages; l++) {
                      const e = new a.GLTexture((0, s.throwIfFalsy)(h.createTexture()));
                      this.register((0, n.toDisposable)(() => h.deleteTexture(e.texture))),
                        h.activeTexture(h.TEXTURE0 + l),
                        h.bindTexture(h.TEXTURE_2D, e.texture),
                        h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, h.CLAMP_TO_EDGE),
                        h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_T, h.CLAMP_TO_EDGE),
                        h.texImage2D(h.TEXTURE_2D, 0, h.RGBA, 1, 1, 0, h.RGBA, h.UNSIGNED_BYTE, new Uint8Array([255, 0, 0, 255])),
                        (this._atlasTextures[l] = e);
                    }
                    h.enable(h.BLEND), h.blendFunc(h.SRC_ALPHA, h.ONE_MINUS_SRC_ALPHA), this.handleResize();
                  }
                  beginFrame() {
                    return !this._atlas || this._atlas.beginFrame();
                  }
                  updateCell(e, t, i, s, r, o, n, a, h) {
                    this._updateCell(this._vertices.attributes, e, t, i, s, r, o, n, a, h);
                  }
                  _updateCell(e, t, i, r, n, a, l, g, v, f) {
                    (d = (i * this._terminal.cols + t) * h),
                      r !== o.NULL_CELL_CODE && void 0 !== r
                        ? this._atlas &&
                          ((c =
                            g && g.length > 1
                              ? this._atlas.getRasterizedGlyphCombinedChar(g, n, a, l, !1)
                              : this._atlas.getRasterizedGlyph(r, n, a, l, !1)),
                          (_ = Math.floor((this._dimensions.device.cell.width - this._dimensions.device.char.width) / 2)),
                          n !== f && c.offset.x > _
                            ? ((u = c.offset.x - _),
                              (e[d] = -(c.offset.x - u) + this._dimensions.device.char.left),
                              (e[d + 1] = -c.offset.y + this._dimensions.device.char.top),
                              (e[d + 2] = (c.size.x - u) / this._dimensions.device.canvas.width),
                              (e[d + 3] = c.size.y / this._dimensions.device.canvas.height),
                              (e[d + 4] = c.texturePage),
                              (e[d + 5] = c.texturePositionClipSpace.x + u / this._atlas.pages[c.texturePage].canvas.width),
                              (e[d + 6] = c.texturePositionClipSpace.y),
                              (e[d + 7] = c.sizeClipSpace.x - u / this._atlas.pages[c.texturePage].canvas.width),
                              (e[d + 8] = c.sizeClipSpace.y))
                            : ((e[d] = -c.offset.x + this._dimensions.device.char.left),
                              (e[d + 1] = -c.offset.y + this._dimensions.device.char.top),
                              (e[d + 2] = c.size.x / this._dimensions.device.canvas.width),
                              (e[d + 3] = c.size.y / this._dimensions.device.canvas.height),
                              (e[d + 4] = c.texturePage),
                              (e[d + 5] = c.texturePositionClipSpace.x),
                              (e[d + 6] = c.texturePositionClipSpace.y),
                              (e[d + 7] = c.sizeClipSpace.x),
                              (e[d + 8] = c.sizeClipSpace.y)),
                          this._optionsService.rawOptions.rescaleOverlappingGlyphs &&
                            (0, s.allowRescaling)(r, v, c.size.x, this._dimensions.device.cell.width) &&
                            (e[d + 2] = (this._dimensions.device.cell.width - 1) / this._dimensions.device.canvas.width))
                        : e.fill(0, d, d + h - 1 - 2);
                  }
                  clear() {
                    const e = this._terminal,
                      t = e.cols * e.rows * h;
                    this._vertices.count !== t ? (this._vertices.attributes = new Float32Array(t)) : this._vertices.attributes.fill(0);
                    let i = 0;
                    for (; i < this._vertices.attributesBuffers.length; i++)
                      this._vertices.count !== t
                        ? (this._vertices.attributesBuffers[i] = new Float32Array(t))
                        : this._vertices.attributesBuffers[i].fill(0);
                    (this._vertices.count = t), (i = 0);
                    for (let s = 0; s < e.rows; s++)
                      for (let t = 0; t < e.cols; t++)
                        (this._vertices.attributes[i + 9] = t / e.cols), (this._vertices.attributes[i + 10] = s / e.rows), (i += h);
                  }
                  handleResize() {
                    const e = this._gl;
                    e.useProgram(this._program),
                      e.viewport(0, 0, e.canvas.width, e.canvas.height),
                      e.uniform2f(this._resolutionLocation, e.canvas.width, e.canvas.height),
                      this.clear();
                  }
                  render(e) {
                    if (!this._atlas) return;
                    const t = this._gl;
                    t.useProgram(this._program), t.bindVertexArray(this._vertexArrayObject), (this._activeBuffer = (this._activeBuffer + 1) % 2);
                    const i = this._vertices.attributesBuffers[this._activeBuffer];
                    let s = 0;
                    for (let r = 0; r < e.lineLengths.length; r++) {
                      const t = r * this._terminal.cols * h,
                        o = this._vertices.attributes.subarray(t, t + e.lineLengths[r] * h);
                      i.set(o, s), (s += o.length);
                    }
                    t.bindBuffer(t.ARRAY_BUFFER, this._attributesBuffer), t.bufferData(t.ARRAY_BUFFER, i.subarray(0, s), t.STREAM_DRAW);
                    for (let r = 0; r < this._atlas.pages.length; r++)
                      this._atlas.pages[r].version !== this._atlasTextures[r].version && this._bindAtlasPageTexture(t, this._atlas, r);
                    t.drawElementsInstanced(t.TRIANGLE_STRIP, 4, t.UNSIGNED_BYTE, 0, s / h);
                  }
                  setAtlas(e) {
                    this._atlas = e;
                    for (const t of this._atlasTextures) t.version = -1;
                  }
                  _bindAtlasPageTexture(e, t, i) {
                    e.activeTexture(e.TEXTURE0 + i),
                      e.bindTexture(e.TEXTURE_2D, this._atlasTextures[i].texture),
                      e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
                      e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
                      e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, t.pages[i].canvas),
                      e.generateMipmap(e.TEXTURE_2D),
                      (this._atlasTextures[i].version = t.pages[i].version);
                  }
                  setDimensions(e) {
                    this._dimensions = e;
                  }
                }
                t.GlyphRenderer = g;
              },
              742: (e, t, i) => {
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.RectangleRenderer = void 0);
                const s = i(374),
                  r = i(859),
                  o = i(310),
                  n = i(381),
                  a = 8 * Float32Array.BYTES_PER_ELEMENT;
                class h {
                  constructor() {
                    (this.attributes = new Float32Array(160)), (this.count = 0);
                  }
                }
                let l = 0,
                  c = 0,
                  d = 0,
                  _ = 0,
                  u = 0,
                  g = 0,
                  v = 0;
                class f extends r.Disposable {
                  constructor(e, t, i, o) {
                    super(),
                      (this._terminal = e),
                      (this._gl = t),
                      (this._dimensions = i),
                      (this._themeService = o),
                      (this._vertices = new h()),
                      (this._verticesCursor = new h());
                    const l = this._gl;
                    (this._program = (0, s.throwIfFalsy)(
                      (0, n.createProgram)(
                        l,
                        "#version 300 es\nlayout (location = 0) in vec2 a_position;\nlayout (location = 1) in vec2 a_size;\nlayout (location = 2) in vec4 a_color;\nlayout (location = 3) in vec2 a_unitquad;\n\nuniform mat4 u_projection;\n\nout vec4 v_color;\n\nvoid main() {\n  vec2 zeroToOne = a_position + (a_unitquad * a_size);\n  gl_Position = u_projection * vec4(zeroToOne, 0.0, 1.0);\n  v_color = a_color;\n}",
                        "#version 300 es\nprecision lowp float;\n\nin vec4 v_color;\n\nout vec4 outColor;\n\nvoid main() {\n  outColor = v_color;\n}"
                      )
                    )),
                      this.register((0, r.toDisposable)(() => l.deleteProgram(this._program))),
                      (this._projectionLocation = (0, s.throwIfFalsy)(l.getUniformLocation(this._program, "u_projection"))),
                      (this._vertexArrayObject = l.createVertexArray()),
                      l.bindVertexArray(this._vertexArrayObject);
                    const c = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]),
                      d = l.createBuffer();
                    this.register((0, r.toDisposable)(() => l.deleteBuffer(d))),
                      l.bindBuffer(l.ARRAY_BUFFER, d),
                      l.bufferData(l.ARRAY_BUFFER, c, l.STATIC_DRAW),
                      l.enableVertexAttribArray(3),
                      l.vertexAttribPointer(3, 2, this._gl.FLOAT, !1, 0, 0);
                    const _ = new Uint8Array([0, 1, 2, 3]),
                      u = l.createBuffer();
                    this.register((0, r.toDisposable)(() => l.deleteBuffer(u))),
                      l.bindBuffer(l.ELEMENT_ARRAY_BUFFER, u),
                      l.bufferData(l.ELEMENT_ARRAY_BUFFER, _, l.STATIC_DRAW),
                      (this._attributesBuffer = (0, s.throwIfFalsy)(l.createBuffer())),
                      this.register((0, r.toDisposable)(() => l.deleteBuffer(this._attributesBuffer))),
                      l.bindBuffer(l.ARRAY_BUFFER, this._attributesBuffer),
                      l.enableVertexAttribArray(0),
                      l.vertexAttribPointer(0, 2, l.FLOAT, !1, a, 0),
                      l.vertexAttribDivisor(0, 1),
                      l.enableVertexAttribArray(1),
                      l.vertexAttribPointer(1, 2, l.FLOAT, !1, a, 2 * Float32Array.BYTES_PER_ELEMENT),
                      l.vertexAttribDivisor(1, 1),
                      l.enableVertexAttribArray(2),
                      l.vertexAttribPointer(2, 4, l.FLOAT, !1, a, 4 * Float32Array.BYTES_PER_ELEMENT),
                      l.vertexAttribDivisor(2, 1),
                      this._updateCachedColors(o.colors),
                      this.register(
                        this._themeService.onChangeColors((e) => {
                          this._updateCachedColors(e), this._updateViewportRectangle();
                        })
                      );
                  }
                  renderBackgrounds() {
                    this._renderVertices(this._vertices);
                  }
                  renderCursor() {
                    this._renderVertices(this._verticesCursor);
                  }
                  _renderVertices(e) {
                    const t = this._gl;
                    t.useProgram(this._program),
                      t.bindVertexArray(this._vertexArrayObject),
                      t.uniformMatrix4fv(this._projectionLocation, !1, n.PROJECTION_MATRIX),
                      t.bindBuffer(t.ARRAY_BUFFER, this._attributesBuffer),
                      t.bufferData(t.ARRAY_BUFFER, e.attributes, t.DYNAMIC_DRAW),
                      t.drawElementsInstanced(this._gl.TRIANGLE_STRIP, 4, t.UNSIGNED_BYTE, 0, e.count);
                  }
                  handleResize() {
                    this._updateViewportRectangle();
                  }
                  setDimensions(e) {
                    this._dimensions = e;
                  }
                  _updateCachedColors(e) {
                    (this._bgFloat = this._colorToFloat32Array(e.background)), (this._cursorFloat = this._colorToFloat32Array(e.cursor));
                  }
                  _updateViewportRectangle() {
                    this._addRectangleFloat(
                      this._vertices.attributes,
                      0,
                      0,
                      0,
                      this._terminal.cols * this._dimensions.device.cell.width,
                      this._terminal.rows * this._dimensions.device.cell.height,
                      this._bgFloat
                    );
                  }
                  updateBackgrounds(e) {
                    const t = this._terminal,
                      i = this._vertices;
                    let s,
                      r,
                      n,
                      a,
                      h,
                      l,
                      c,
                      d,
                      _,
                      u,
                      g,
                      v = 1;
                    for (s = 0; s < t.rows; s++) {
                      for (n = -1, a = 0, h = 0, l = !1, r = 0; r < t.cols; r++)
                        (c = (s * t.cols + r) * o.RENDER_MODEL_INDICIES_PER_CELL),
                          (d = e.cells[c + o.RENDER_MODEL_BG_OFFSET]),
                          (_ = e.cells[c + o.RENDER_MODEL_FG_OFFSET]),
                          (u = !!(67108864 & _)),
                          (d !== a || (_ !== h && (l || u))) &&
                            ((0 !== a || (l && 0 !== h)) && ((g = 8 * v++), this._updateRectangle(i, g, h, a, n, r, s)),
                            (n = r),
                            (a = d),
                            (h = _),
                            (l = u));
                      (0 !== a || (l && 0 !== h)) && ((g = 8 * v++), this._updateRectangle(i, g, h, a, n, t.cols, s));
                    }
                    i.count = v;
                  }
                  updateCursor(e) {
                    const t = this._verticesCursor,
                      i = e.cursor;
                    if (!i || "block" === i.style) return void (t.count = 0);
                    let s,
                      r = 0;
                    ("bar" !== i.style && "outline" !== i.style) ||
                      ((s = 8 * r++),
                      this._addRectangleFloat(
                        t.attributes,
                        s,
                        i.x * this._dimensions.device.cell.width,
                        i.y * this._dimensions.device.cell.height,
                        "bar" === i.style ? i.dpr * i.cursorWidth : i.dpr,
                        this._dimensions.device.cell.height,
                        this._cursorFloat
                      )),
                      ("underline" !== i.style && "outline" !== i.style) ||
                        ((s = 8 * r++),
                        this._addRectangleFloat(
                          t.attributes,
                          s,
                          i.x * this._dimensions.device.cell.width,
                          (i.y + 1) * this._dimensions.device.cell.height - i.dpr,
                          i.width * this._dimensions.device.cell.width,
                          i.dpr,
                          this._cursorFloat
                        )),
                      "outline" === i.style &&
                        ((s = 8 * r++),
                        this._addRectangleFloat(
                          t.attributes,
                          s,
                          i.x * this._dimensions.device.cell.width,
                          i.y * this._dimensions.device.cell.height,
                          i.width * this._dimensions.device.cell.width,
                          i.dpr,
                          this._cursorFloat
                        ),
                        (s = 8 * r++),
                        this._addRectangleFloat(
                          t.attributes,
                          s,
                          (i.x + i.width) * this._dimensions.device.cell.width - i.dpr,
                          i.y * this._dimensions.device.cell.height,
                          i.dpr,
                          this._dimensions.device.cell.height,
                          this._cursorFloat
                        )),
                      (t.count = r);
                  }
                  _updateRectangle(e, t, i, s, r, o, a) {
                    if (67108864 & i)
                      switch (50331648 & i) {
                        case 16777216:
                        case 33554432:
                          l = this._themeService.colors.ansi[255 & i].rgba;
                          break;
                        case 50331648:
                          l = (16777215 & i) << 8;
                          break;
                        default:
                          l = this._themeService.colors.foreground.rgba;
                      }
                    else
                      switch (50331648 & s) {
                        case 16777216:
                        case 33554432:
                          l = this._themeService.colors.ansi[255 & s].rgba;
                          break;
                        case 50331648:
                          l = (16777215 & s) << 8;
                          break;
                        default:
                          l = this._themeService.colors.background.rgba;
                      }
                    e.attributes.length < t + 4 &&
                      (e.attributes = (0, n.expandFloat32Array)(e.attributes, this._terminal.rows * this._terminal.cols * 8)),
                      (c = r * this._dimensions.device.cell.width),
                      (d = a * this._dimensions.device.cell.height),
                      (_ = ((l >> 24) & 255) / 255),
                      (u = ((l >> 16) & 255) / 255),
                      (g = ((l >> 8) & 255) / 255),
                      (v = 1),
                      this._addRectangle(
                        e.attributes,
                        t,
                        c,
                        d,
                        (o - r) * this._dimensions.device.cell.width,
                        this._dimensions.device.cell.height,
                        _,
                        u,
                        g,
                        v
                      );
                  }
                  _addRectangle(e, t, i, s, r, o, n, a, h, l) {
                    (e[t] = i / this._dimensions.device.canvas.width),
                      (e[t + 1] = s / this._dimensions.device.canvas.height),
                      (e[t + 2] = r / this._dimensions.device.canvas.width),
                      (e[t + 3] = o / this._dimensions.device.canvas.height),
                      (e[t + 4] = n),
                      (e[t + 5] = a),
                      (e[t + 6] = h),
                      (e[t + 7] = l);
                  }
                  _addRectangleFloat(e, t, i, s, r, o, n) {
                    (e[t] = i / this._dimensions.device.canvas.width),
                      (e[t + 1] = s / this._dimensions.device.canvas.height),
                      (e[t + 2] = r / this._dimensions.device.canvas.width),
                      (e[t + 3] = o / this._dimensions.device.canvas.height),
                      (e[t + 4] = n[0]),
                      (e[t + 5] = n[1]),
                      (e[t + 6] = n[2]),
                      (e[t + 7] = n[3]);
                  }
                  _colorToFloat32Array(e) {
                    return new Float32Array([
                      ((e.rgba >> 24) & 255) / 255,
                      ((e.rgba >> 16) & 255) / 255,
                      ((e.rgba >> 8) & 255) / 255,
                      (255 & e.rgba) / 255,
                    ]);
                  }
                }
                t.RectangleRenderer = f;
              },
              310: (e, t, i) => {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.RenderModel =
                    t.COMBINED_CHAR_BIT_MASK =
                    t.RENDER_MODEL_EXT_OFFSET =
                    t.RENDER_MODEL_FG_OFFSET =
                    t.RENDER_MODEL_BG_OFFSET =
                    t.RENDER_MODEL_INDICIES_PER_CELL =
                      void 0);
                const s = i(296);
                (t.RENDER_MODEL_INDICIES_PER_CELL = 4),
                  (t.RENDER_MODEL_BG_OFFSET = 1),
                  (t.RENDER_MODEL_FG_OFFSET = 2),
                  (t.RENDER_MODEL_EXT_OFFSET = 3),
                  (t.COMBINED_CHAR_BIT_MASK = 2147483648),
                  (t.RenderModel = class {
                    constructor() {
                      (this.cells = new Uint32Array(0)),
                        (this.lineLengths = new Uint32Array(0)),
                        (this.selection = (0, s.createSelectionRenderModel)());
                    }
                    resize(e, i) {
                      const s = e * i * t.RENDER_MODEL_INDICIES_PER_CELL;
                      s !== this.cells.length && ((this.cells = new Uint32Array(s)), (this.lineLengths = new Uint32Array(i)));
                    }
                    clear() {
                      this.cells.fill(0, 0), this.lineLengths.fill(0, 0);
                    }
                  });
              },
              666: (e, t, i) => {
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.JoinedCellData = t.WebglRenderer = void 0);
                const s = i(820),
                  r = i(274),
                  o = i(627),
                  n = i(457),
                  a = i(56),
                  h = i(374),
                  l = i(345),
                  c = i(859),
                  d = i(147),
                  _ = i(782),
                  u = i(855),
                  g = i(965),
                  v = i(742),
                  f = i(310),
                  p = i(733);
                class C extends c.Disposable {
                  constructor(e, t, i, n, d, u, g, v, C) {
                    super(),
                      (this._terminal = e),
                      (this._characterJoinerService = t),
                      (this._charSizeService = i),
                      (this._coreBrowserService = n),
                      (this._coreService = d),
                      (this._decorationService = u),
                      (this._optionsService = g),
                      (this._themeService = v),
                      (this._cursorBlinkStateManager = new c.MutableDisposable()),
                      (this._charAtlasDisposable = this.register(new c.MutableDisposable())),
                      (this._observerDisposable = this.register(new c.MutableDisposable())),
                      (this._model = new f.RenderModel()),
                      (this._workCell = new _.CellData()),
                      (this._workCell2 = new _.CellData()),
                      (this._rectangleRenderer = this.register(new c.MutableDisposable())),
                      (this._glyphRenderer = this.register(new c.MutableDisposable())),
                      (this._onChangeTextureAtlas = this.register(new l.EventEmitter())),
                      (this.onChangeTextureAtlas = this._onChangeTextureAtlas.event),
                      (this._onAddTextureAtlasCanvas = this.register(new l.EventEmitter())),
                      (this.onAddTextureAtlasCanvas = this._onAddTextureAtlasCanvas.event),
                      (this._onRemoveTextureAtlasCanvas = this.register(new l.EventEmitter())),
                      (this.onRemoveTextureAtlasCanvas = this._onRemoveTextureAtlasCanvas.event),
                      (this._onRequestRedraw = this.register(new l.EventEmitter())),
                      (this.onRequestRedraw = this._onRequestRedraw.event),
                      (this._onContextLoss = this.register(new l.EventEmitter())),
                      (this.onContextLoss = this._onContextLoss.event),
                      this.register(this._themeService.onChangeColors(() => this._handleColorChange())),
                      (this._cellColorResolver = new r.CellColorResolver(
                        this._terminal,
                        this._optionsService,
                        this._model.selection,
                        this._decorationService,
                        this._coreBrowserService,
                        this._themeService
                      )),
                      (this._core = this._terminal._core),
                      (this._renderLayers = [
                        new p.LinkRenderLayer(
                          this._core.screenElement,
                          2,
                          this._terminal,
                          this._core.linkifier,
                          this._coreBrowserService,
                          g,
                          this._themeService
                        ),
                      ]),
                      (this.dimensions = (0, h.createRenderDimensions)()),
                      (this._devicePixelRatio = this._coreBrowserService.dpr),
                      this._updateDimensions(),
                      this._updateCursorBlink(),
                      this.register(g.onOptionChange(() => this._handleOptionsChanged())),
                      (this._canvas = this._coreBrowserService.mainDocument.createElement("canvas"));
                    const m = { antialias: !1, depth: !1, preserveDrawingBuffer: C };
                    if (((this._gl = this._canvas.getContext("webgl2", m)), !this._gl)) throw new Error("WebGL2 not supported " + this._gl);
                    this.register(
                      (0, s.addDisposableDomListener)(this._canvas, "webglcontextlost", (e) => {
                        console.log("webglcontextlost event received"),
                          e.preventDefault(),
                          (this._contextRestorationTimeout = setTimeout(() => {
                            (this._contextRestorationTimeout = void 0),
                              console.warn("webgl context not restored; firing onContextLoss"),
                              this._onContextLoss.fire(e);
                          }, 3e3));
                      })
                    ),
                      this.register(
                        (0, s.addDisposableDomListener)(this._canvas, "webglcontextrestored", (e) => {
                          console.warn("webglcontextrestored event received"),
                            clearTimeout(this._contextRestorationTimeout),
                            (this._contextRestorationTimeout = void 0),
                            (0, o.removeTerminalFromCache)(this._terminal),
                            this._initializeWebGLState(),
                            this._requestRedrawViewport();
                        })
                      ),
                      (this._observerDisposable.value = (0, a.observeDevicePixelDimensions)(this._canvas, this._coreBrowserService.window, (e, t) =>
                        this._setCanvasDevicePixelDimensions(e, t)
                      )),
                      this.register(
                        this._coreBrowserService.onWindowChange((e) => {
                          this._observerDisposable.value = (0, a.observeDevicePixelDimensions)(this._canvas, e, (e, t) =>
                            this._setCanvasDevicePixelDimensions(e, t)
                          );
                        })
                      ),
                      this._core.screenElement.appendChild(this._canvas),
                      ([this._rectangleRenderer.value, this._glyphRenderer.value] = this._initializeWebGLState()),
                      (this._isAttached = this._coreBrowserService.window.document.body.contains(this._core.screenElement)),
                      this.register(
                        (0, c.toDisposable)(() => {
                          for (const e of this._renderLayers) e.dispose();
                          this._canvas.parentElement?.removeChild(this._canvas), (0, o.removeTerminalFromCache)(this._terminal);
                        })
                      );
                  }
                  get textureAtlas() {
                    return this._charAtlas?.pages[0].canvas;
                  }
                  _handleColorChange() {
                    this._refreshCharAtlas(), this._clearModel(!0);
                  }
                  handleDevicePixelRatioChange() {
                    this._devicePixelRatio !== this._coreBrowserService.dpr &&
                      ((this._devicePixelRatio = this._coreBrowserService.dpr), this.handleResize(this._terminal.cols, this._terminal.rows));
                  }
                  handleResize(e, t) {
                    this._updateDimensions(), this._model.resize(this._terminal.cols, this._terminal.rows);
                    for (const i of this._renderLayers) i.resize(this._terminal, this.dimensions);
                    (this._canvas.width = this.dimensions.device.canvas.width),
                      (this._canvas.height = this.dimensions.device.canvas.height),
                      (this._canvas.style.width = `${this.dimensions.css.canvas.width}px`),
                      (this._canvas.style.height = `${this.dimensions.css.canvas.height}px`),
                      (this._core.screenElement.style.width = `${this.dimensions.css.canvas.width}px`),
                      (this._core.screenElement.style.height = `${this.dimensions.css.canvas.height}px`),
                      this._rectangleRenderer.value?.setDimensions(this.dimensions),
                      this._rectangleRenderer.value?.handleResize(),
                      this._glyphRenderer.value?.setDimensions(this.dimensions),
                      this._glyphRenderer.value?.handleResize(),
                      this._refreshCharAtlas(),
                      this._clearModel(!1);
                  }
                  handleCharSizeChanged() {
                    this.handleResize(this._terminal.cols, this._terminal.rows);
                  }
                  handleBlur() {
                    for (const e of this._renderLayers) e.handleBlur(this._terminal);
                    this._cursorBlinkStateManager.value?.pause(), this._requestRedrawViewport();
                  }
                  handleFocus() {
                    for (const e of this._renderLayers) e.handleFocus(this._terminal);
                    this._cursorBlinkStateManager.value?.resume(), this._requestRedrawViewport();
                  }
                  handleSelectionChanged(e, t, i) {
                    for (const s of this._renderLayers) s.handleSelectionChanged(this._terminal, e, t, i);
                    this._model.selection.update(this._core, e, t, i), this._requestRedrawViewport();
                  }
                  handleCursorMove() {
                    for (const e of this._renderLayers) e.handleCursorMove(this._terminal);
                    this._cursorBlinkStateManager.value?.restartBlinkAnimation();
                  }
                  _handleOptionsChanged() {
                    this._updateDimensions(), this._refreshCharAtlas(), this._updateCursorBlink();
                  }
                  _initializeWebGLState() {
                    return (
                      (this._rectangleRenderer.value = new v.RectangleRenderer(this._terminal, this._gl, this.dimensions, this._themeService)),
                      (this._glyphRenderer.value = new g.GlyphRenderer(this._terminal, this._gl, this.dimensions, this._optionsService)),
                      this.handleCharSizeChanged(),
                      [this._rectangleRenderer.value, this._glyphRenderer.value]
                    );
                  }
                  _refreshCharAtlas() {
                    if (this.dimensions.device.char.width <= 0 && this.dimensions.device.char.height <= 0) return void (this._isAttached = !1);
                    const e = (0, o.acquireTextureAtlas)(
                      this._terminal,
                      this._optionsService.rawOptions,
                      this._themeService.colors,
                      this.dimensions.device.cell.width,
                      this.dimensions.device.cell.height,
                      this.dimensions.device.char.width,
                      this.dimensions.device.char.height,
                      this._coreBrowserService.dpr
                    );
                    this._charAtlas !== e &&
                      (this._onChangeTextureAtlas.fire(e.pages[0].canvas),
                      (this._charAtlasDisposable.value = (0, c.getDisposeArrayDisposable)([
                        (0, l.forwardEvent)(e.onAddTextureAtlasCanvas, this._onAddTextureAtlasCanvas),
                        (0, l.forwardEvent)(e.onRemoveTextureAtlasCanvas, this._onRemoveTextureAtlasCanvas),
                      ]))),
                      (this._charAtlas = e),
                      this._charAtlas.warmUp(),
                      this._glyphRenderer.value?.setAtlas(this._charAtlas);
                  }
                  _clearModel(e) {
                    this._model.clear(), e && this._glyphRenderer.value?.clear();
                  }
                  clearTextureAtlas() {
                    this._charAtlas?.clearTexture(), this._clearModel(!0), this._requestRedrawViewport();
                  }
                  clear() {
                    this._clearModel(!0);
                    for (const e of this._renderLayers) e.reset(this._terminal);
                    this._cursorBlinkStateManager.value?.restartBlinkAnimation(), this._updateCursorBlink();
                  }
                  registerCharacterJoiner(e) {
                    return -1;
                  }
                  deregisterCharacterJoiner(e) {
                    return !1;
                  }
                  renderRows(e, t) {
                    if (!this._isAttached) {
                      if (
                        !(
                          this._coreBrowserService.window.document.body.contains(this._core.screenElement) &&
                          this._charSizeService.width &&
                          this._charSizeService.height
                        )
                      )
                        return;
                      this._updateDimensions(), this._refreshCharAtlas(), (this._isAttached = !0);
                    }
                    for (const i of this._renderLayers) i.handleGridChanged(this._terminal, e, t);
                    this._glyphRenderer.value &&
                      this._rectangleRenderer.value &&
                      (this._glyphRenderer.value.beginFrame()
                        ? (this._clearModel(!0), this._updateModel(0, this._terminal.rows - 1))
                        : this._updateModel(e, t),
                      this._rectangleRenderer.value.renderBackgrounds(),
                      this._glyphRenderer.value.render(this._model),
                      (this._cursorBlinkStateManager.value && !this._cursorBlinkStateManager.value.isCursorVisible) ||
                        this._rectangleRenderer.value.renderCursor());
                  }
                  _updateCursorBlink() {
                    this._terminal.options.cursorBlink
                      ? (this._cursorBlinkStateManager.value = new n.CursorBlinkStateManager(() => {
                          this._requestRedrawCursor();
                        }, this._coreBrowserService))
                      : this._cursorBlinkStateManager.clear(),
                      this._requestRedrawCursor();
                  }
                  _updateModel(e, t) {
                    const i = this._core;
                    let s,
                      r,
                      o,
                      n,
                      a,
                      h,
                      l,
                      c,
                      d,
                      _,
                      g,
                      v,
                      p,
                      C,
                      x = this._workCell;
                    (e = L(e, i.rows - 1, 0)), (t = L(t, i.rows - 1, 0));
                    const w = this._terminal.buffer.active.baseY + this._terminal.buffer.active.cursorY,
                      b = w - i.buffer.ydisp,
                      M = Math.min(this._terminal.buffer.active.cursorX, i.cols - 1);
                    let R = -1;
                    const y =
                      this._coreService.isCursorInitialized &&
                      !this._coreService.isCursorHidden &&
                      (!this._cursorBlinkStateManager.value || this._cursorBlinkStateManager.value.isCursorVisible);
                    this._model.cursor = void 0;
                    let A = !1;
                    for (r = e; r <= t; r++)
                      for (
                        o = r + i.buffer.ydisp,
                          n = i.buffer.lines.get(o),
                          this._model.lineLengths[r] = 0,
                          a = this._characterJoinerService.getJoinedCharacters(o),
                          p = 0;
                        p < i.cols;
                        p++
                      )
                        if (
                          ((s = this._cellColorResolver.result.bg),
                          n.loadCell(p, x),
                          0 === p && (s = this._cellColorResolver.result.bg),
                          (h = !1),
                          (l = p),
                          a.length > 0 &&
                            p === a[0][0] &&
                            ((h = !0), (c = a.shift()), (x = new m(x, n.translateToString(!0, c[0], c[1]), c[1] - c[0])), (l = c[1] - 1)),
                          (d = x.getChars()),
                          (_ = x.getCode()),
                          (v = (r * i.cols + p) * f.RENDER_MODEL_INDICIES_PER_CELL),
                          this._cellColorResolver.resolve(x, p, o, this.dimensions.device.cell.width),
                          y &&
                            o === w &&
                            (p === M &&
                              ((this._model.cursor = {
                                x: M,
                                y: b,
                                width: x.getWidth(),
                                style: this._coreBrowserService.isFocused ? i.options.cursorStyle || "block" : i.options.cursorInactiveStyle,
                                cursorWidth: i.options.cursorWidth,
                                dpr: this._devicePixelRatio,
                              }),
                              (R = M + x.getWidth() - 1)),
                            p >= M &&
                              p <= R &&
                              ((this._coreBrowserService.isFocused && "block" === (i.options.cursorStyle || "block")) ||
                                (!1 === this._coreBrowserService.isFocused && "block" === i.options.cursorInactiveStyle)) &&
                              ((this._cellColorResolver.result.fg = 50331648 | ((this._themeService.colors.cursorAccent.rgba >> 8) & 16777215)),
                              (this._cellColorResolver.result.bg = 50331648 | ((this._themeService.colors.cursor.rgba >> 8) & 16777215)))),
                          _ !== u.NULL_CELL_CODE && (this._model.lineLengths[r] = p + 1),
                          (this._model.cells[v] !== _ ||
                            this._model.cells[v + f.RENDER_MODEL_BG_OFFSET] !== this._cellColorResolver.result.bg ||
                            this._model.cells[v + f.RENDER_MODEL_FG_OFFSET] !== this._cellColorResolver.result.fg ||
                            this._model.cells[v + f.RENDER_MODEL_EXT_OFFSET] !== this._cellColorResolver.result.ext) &&
                            ((A = !0),
                            d.length > 1 && (_ |= f.COMBINED_CHAR_BIT_MASK),
                            (this._model.cells[v] = _),
                            (this._model.cells[v + f.RENDER_MODEL_BG_OFFSET] = this._cellColorResolver.result.bg),
                            (this._model.cells[v + f.RENDER_MODEL_FG_OFFSET] = this._cellColorResolver.result.fg),
                            (this._model.cells[v + f.RENDER_MODEL_EXT_OFFSET] = this._cellColorResolver.result.ext),
                            (g = x.getWidth()),
                            this._glyphRenderer.value.updateCell(
                              p,
                              r,
                              _,
                              this._cellColorResolver.result.bg,
                              this._cellColorResolver.result.fg,
                              this._cellColorResolver.result.ext,
                              d,
                              g,
                              s
                            ),
                            h))
                        )
                          for (x = this._workCell, p++; p < l; p++)
                            (C = (r * i.cols + p) * f.RENDER_MODEL_INDICIES_PER_CELL),
                              this._glyphRenderer.value.updateCell(p, r, u.NULL_CELL_CODE, 0, 0, 0, u.NULL_CELL_CHAR, 0, 0),
                              (this._model.cells[C] = u.NULL_CELL_CODE),
                              (this._model.cells[C + f.RENDER_MODEL_BG_OFFSET] = this._cellColorResolver.result.bg),
                              (this._model.cells[C + f.RENDER_MODEL_FG_OFFSET] = this._cellColorResolver.result.fg),
                              (this._model.cells[C + f.RENDER_MODEL_EXT_OFFSET] = this._cellColorResolver.result.ext);
                    A && this._rectangleRenderer.value.updateBackgrounds(this._model), this._rectangleRenderer.value.updateCursor(this._model);
                  }
                  _updateDimensions() {
                    this._charSizeService.width &&
                      this._charSizeService.height &&
                      ((this.dimensions.device.char.width = Math.floor(this._charSizeService.width * this._devicePixelRatio)),
                      (this.dimensions.device.char.height = Math.ceil(this._charSizeService.height * this._devicePixelRatio)),
                      (this.dimensions.device.cell.height = Math.floor(
                        this.dimensions.device.char.height * this._optionsService.rawOptions.lineHeight
                      )),
                      (this.dimensions.device.char.top =
                        1 === this._optionsService.rawOptions.lineHeight
                          ? 0
                          : Math.round((this.dimensions.device.cell.height - this.dimensions.device.char.height) / 2)),
                      (this.dimensions.device.cell.width =
                        this.dimensions.device.char.width + Math.round(this._optionsService.rawOptions.letterSpacing)),
                      (this.dimensions.device.char.left = Math.floor(this._optionsService.rawOptions.letterSpacing / 2)),
                      (this.dimensions.device.canvas.height = this._terminal.rows * this.dimensions.device.cell.height),
                      (this.dimensions.device.canvas.width = this._terminal.cols * this.dimensions.device.cell.width),
                      (this.dimensions.css.canvas.height = Math.round(this.dimensions.device.canvas.height / this._devicePixelRatio)),
                      (this.dimensions.css.canvas.width = Math.round(this.dimensions.device.canvas.width / this._devicePixelRatio)),
                      (this.dimensions.css.cell.height = this.dimensions.device.cell.height / this._devicePixelRatio),
                      (this.dimensions.css.cell.width = this.dimensions.device.cell.width / this._devicePixelRatio));
                  }
                  _setCanvasDevicePixelDimensions(e, t) {
                    (this._canvas.width === e && this._canvas.height === t) ||
                      ((this._canvas.width = e), (this._canvas.height = t), this._requestRedrawViewport());
                  }
                  _requestRedrawViewport() {
                    this._onRequestRedraw.fire({ start: 0, end: this._terminal.rows - 1 });
                  }
                  _requestRedrawCursor() {
                    const e = this._terminal.buffer.active.cursorY;
                    this._onRequestRedraw.fire({ start: e, end: e });
                  }
                }
                t.WebglRenderer = C;
                class m extends d.AttributeData {
                  constructor(e, t, i) {
                    super(),
                      (this.content = 0),
                      (this.combinedData = ""),
                      (this.fg = e.fg),
                      (this.bg = e.bg),
                      (this.combinedData = t),
                      (this._width = i);
                  }
                  isCombined() {
                    return 2097152;
                  }
                  getWidth() {
                    return this._width;
                  }
                  getChars() {
                    return this.combinedData;
                  }
                  getCode() {
                    return 2097151;
                  }
                  setFromCharData(e) {
                    throw new Error("not implemented");
                  }
                  getAsCharData() {
                    return [this.fg, this.getChars(), this.getWidth(), this.getCode()];
                  }
                }
                function L(e, t, i = 0) {
                  return Math.max(Math.min(e, t), i);
                }
                t.JoinedCellData = m;
              },
              381: (e, t, i) => {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.GLTexture = t.expandFloat32Array = t.createShader = t.createProgram = t.PROJECTION_MATRIX = void 0);
                const s = i(374);
                function r(e, t, i) {
                  const r = (0, s.throwIfFalsy)(e.createShader(t));
                  if ((e.shaderSource(r, i), e.compileShader(r), e.getShaderParameter(r, e.COMPILE_STATUS))) return r;
                  console.error(e.getShaderInfoLog(r)), e.deleteShader(r);
                }
                (t.PROJECTION_MATRIX = new Float32Array([2, 0, 0, 0, 0, -2, 0, 0, 0, 0, 1, 0, -1, 1, 0, 1])),
                  (t.createProgram = function (e, t, i) {
                    const o = (0, s.throwIfFalsy)(e.createProgram());
                    if (
                      (e.attachShader(o, (0, s.throwIfFalsy)(r(e, e.VERTEX_SHADER, t))),
                      e.attachShader(o, (0, s.throwIfFalsy)(r(e, e.FRAGMENT_SHADER, i))),
                      e.linkProgram(o),
                      e.getProgramParameter(o, e.LINK_STATUS))
                    )
                      return o;
                    console.error(e.getProgramInfoLog(o)), e.deleteProgram(o);
                  }),
                  (t.createShader = r),
                  (t.expandFloat32Array = function (e, t) {
                    const i = Math.min(2 * e.length, t),
                      s = new Float32Array(i);
                    for (let r = 0; r < e.length; r++) s[r] = e[r];
                    return s;
                  }),
                  (t.GLTexture = class {
                    constructor(e) {
                      (this.texture = e), (this.version = -1);
                    }
                  });
              },
              592: (e, t, i) => {
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.BaseRenderLayer = void 0);
                const s = i(627),
                  r = i(237),
                  o = i(374),
                  n = i(859);
                class a extends n.Disposable {
                  constructor(e, t, i, s, r, o, a, h) {
                    super(),
                      (this._container = t),
                      (this._alpha = r),
                      (this._coreBrowserService = o),
                      (this._optionsService = a),
                      (this._themeService = h),
                      (this._deviceCharWidth = 0),
                      (this._deviceCharHeight = 0),
                      (this._deviceCellWidth = 0),
                      (this._deviceCellHeight = 0),
                      (this._deviceCharLeft = 0),
                      (this._deviceCharTop = 0),
                      (this._canvas = this._coreBrowserService.mainDocument.createElement("canvas")),
                      this._canvas.classList.add(`xterm-${i}-layer`),
                      (this._canvas.style.zIndex = s.toString()),
                      this._initCanvas(),
                      this._container.appendChild(this._canvas),
                      this.register(
                        this._themeService.onChangeColors((t) => {
                          this._refreshCharAtlas(e, t), this.reset(e);
                        })
                      ),
                      this.register(
                        (0, n.toDisposable)(() => {
                          this._canvas.remove();
                        })
                      );
                  }
                  _initCanvas() {
                    (this._ctx = (0, o.throwIfFalsy)(this._canvas.getContext("2d", { alpha: this._alpha }))), this._alpha || this._clearAll();
                  }
                  handleBlur(e) {}
                  handleFocus(e) {}
                  handleCursorMove(e) {}
                  handleGridChanged(e, t, i) {}
                  handleSelectionChanged(e, t, i, s = !1) {}
                  _setTransparency(e, t) {
                    if (t === this._alpha) return;
                    const i = this._canvas;
                    (this._alpha = t),
                      (this._canvas = this._canvas.cloneNode()),
                      this._initCanvas(),
                      this._container.replaceChild(this._canvas, i),
                      this._refreshCharAtlas(e, this._themeService.colors),
                      this.handleGridChanged(e, 0, e.rows - 1);
                  }
                  _refreshCharAtlas(e, t) {
                    (this._deviceCharWidth <= 0 && this._deviceCharHeight <= 0) ||
                      ((this._charAtlas = (0, s.acquireTextureAtlas)(
                        e,
                        this._optionsService.rawOptions,
                        t,
                        this._deviceCellWidth,
                        this._deviceCellHeight,
                        this._deviceCharWidth,
                        this._deviceCharHeight,
                        this._coreBrowserService.dpr
                      )),
                      this._charAtlas.warmUp());
                  }
                  resize(e, t) {
                    (this._deviceCellWidth = t.device.cell.width),
                      (this._deviceCellHeight = t.device.cell.height),
                      (this._deviceCharWidth = t.device.char.width),
                      (this._deviceCharHeight = t.device.char.height),
                      (this._deviceCharLeft = t.device.char.left),
                      (this._deviceCharTop = t.device.char.top),
                      (this._canvas.width = t.device.canvas.width),
                      (this._canvas.height = t.device.canvas.height),
                      (this._canvas.style.width = `${t.css.canvas.width}px`),
                      (this._canvas.style.height = `${t.css.canvas.height}px`),
                      this._alpha || this._clearAll(),
                      this._refreshCharAtlas(e, this._themeService.colors);
                  }
                  _fillBottomLineAtCells(e, t, i = 1) {
                    this._ctx.fillRect(
                      e * this._deviceCellWidth,
                      (t + 1) * this._deviceCellHeight - this._coreBrowserService.dpr - 1,
                      i * this._deviceCellWidth,
                      this._coreBrowserService.dpr
                    );
                  }
                  _clearAll() {
                    this._alpha
                      ? this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height)
                      : ((this._ctx.fillStyle = this._themeService.colors.background.css),
                        this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height));
                  }
                  _clearCells(e, t, i, s) {
                    this._alpha
                      ? this._ctx.clearRect(
                          e * this._deviceCellWidth,
                          t * this._deviceCellHeight,
                          i * this._deviceCellWidth,
                          s * this._deviceCellHeight
                        )
                      : ((this._ctx.fillStyle = this._themeService.colors.background.css),
                        this._ctx.fillRect(
                          e * this._deviceCellWidth,
                          t * this._deviceCellHeight,
                          i * this._deviceCellWidth,
                          s * this._deviceCellHeight
                        ));
                  }
                  _fillCharTrueColor(e, t, i, s) {
                    (this._ctx.font = this._getFont(e, !1, !1)),
                      (this._ctx.textBaseline = r.TEXT_BASELINE),
                      this._clipCell(i, s, t.getWidth()),
                      this._ctx.fillText(
                        t.getChars(),
                        i * this._deviceCellWidth + this._deviceCharLeft,
                        s * this._deviceCellHeight + this._deviceCharTop + this._deviceCharHeight
                      );
                  }
                  _clipCell(e, t, i) {
                    this._ctx.beginPath(),
                      this._ctx.rect(e * this._deviceCellWidth, t * this._deviceCellHeight, i * this._deviceCellWidth, this._deviceCellHeight),
                      this._ctx.clip();
                  }
                  _getFont(e, t, i) {
                    return `${i ? "italic" : ""} ${t ? e.options.fontWeightBold : e.options.fontWeight} ${
                      e.options.fontSize * this._coreBrowserService.dpr
                    }px ${e.options.fontFamily}`;
                  }
                }
                t.BaseRenderLayer = a;
              },
              733: (e, t, i) => {
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.LinkRenderLayer = void 0);
                const s = i(197),
                  r = i(237),
                  o = i(592);
                class n extends o.BaseRenderLayer {
                  constructor(e, t, i, s, r, o, n) {
                    super(i, e, "link", t, !0, r, o, n),
                      this.register(s.onShowLinkUnderline((e) => this._handleShowLinkUnderline(e))),
                      this.register(s.onHideLinkUnderline((e) => this._handleHideLinkUnderline(e)));
                  }
                  resize(e, t) {
                    super.resize(e, t), (this._state = void 0);
                  }
                  reset(e) {
                    this._clearCurrentLink();
                  }
                  _clearCurrentLink() {
                    if (this._state) {
                      this._clearCells(this._state.x1, this._state.y1, this._state.cols - this._state.x1, 1);
                      const e = this._state.y2 - this._state.y1 - 1;
                      e > 0 && this._clearCells(0, this._state.y1 + 1, this._state.cols, e),
                        this._clearCells(0, this._state.y2, this._state.x2, 1),
                        (this._state = void 0);
                    }
                  }
                  _handleShowLinkUnderline(e) {
                    if (
                      (e.fg === r.INVERTED_DEFAULT_COLOR
                        ? (this._ctx.fillStyle = this._themeService.colors.background.css)
                        : void 0 !== e.fg && (0, s.is256Color)(e.fg)
                          ? (this._ctx.fillStyle = this._themeService.colors.ansi[e.fg].css)
                          : (this._ctx.fillStyle = this._themeService.colors.foreground.css),
                      e.y1 === e.y2)
                    )
                      this._fillBottomLineAtCells(e.x1, e.y1, e.x2 - e.x1);
                    else {
                      this._fillBottomLineAtCells(e.x1, e.y1, e.cols - e.x1);
                      for (let t = e.y1 + 1; t < e.y2; t++) this._fillBottomLineAtCells(0, t, e.cols);
                      this._fillBottomLineAtCells(0, e.y2, e.x2);
                    }
                    this._state = e;
                  }
                  _handleHideLinkUnderline(e) {
                    this._clearCurrentLink();
                  }
                }
                t.LinkRenderLayer = n;
              },
              820: (e, t) => {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.addDisposableDomListener = void 0),
                  (t.addDisposableDomListener = function (e, t, i, s) {
                    e.addEventListener(t, i, s);
                    let r = !1;
                    return {
                      dispose: () => {
                        r || ((r = !0), e.removeEventListener(t, i, s));
                      },
                    };
                  });
              },
              274: (e, t, i) => {
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.CellColorResolver = void 0);
                const s = i(855),
                  r = i(160),
                  o = i(374);
                let n,
                  a = 0,
                  h = 0,
                  l = !1,
                  c = !1,
                  d = !1,
                  _ = 0;
                t.CellColorResolver = class {
                  constructor(e, t, i, s, r, o) {
                    (this._terminal = e),
                      (this._optionService = t),
                      (this._selectionRenderModel = i),
                      (this._decorationService = s),
                      (this._coreBrowserService = r),
                      (this._themeService = o),
                      (this.result = { fg: 0, bg: 0, ext: 0 });
                  }
                  resolve(e, t, i, u) {
                    if (
                      ((this.result.bg = e.bg),
                      (this.result.fg = e.fg),
                      (this.result.ext = 268435456 & e.bg ? e.extended.ext : 0),
                      (h = 0),
                      (a = 0),
                      (c = !1),
                      (l = !1),
                      (d = !1),
                      (n = this._themeService.colors),
                      (_ = 0),
                      e.getCode() !== s.NULL_CELL_CODE && 4 === e.extended.underlineStyle)
                    ) {
                      const e = Math.max(1, Math.floor((this._optionService.rawOptions.fontSize * this._coreBrowserService.dpr) / 15));
                      _ = (t * u) % (2 * Math.round(e));
                    }
                    if (
                      (this._decorationService.forEachDecorationAtCell(t, i, "bottom", (e) => {
                        e.backgroundColorRGB && ((h = (e.backgroundColorRGB.rgba >> 8) & 16777215), (c = !0)),
                          e.foregroundColorRGB && ((a = (e.foregroundColorRGB.rgba >> 8) & 16777215), (l = !0));
                      }),
                      (d = this._selectionRenderModel.isCellSelected(this._terminal, t, i)),
                      d)
                    ) {
                      if (67108864 & this.result.fg || 0 != (50331648 & this.result.bg)) {
                        if (67108864 & this.result.fg)
                          switch (50331648 & this.result.fg) {
                            case 16777216:
                            case 33554432:
                              h = this._themeService.colors.ansi[255 & this.result.fg].rgba;
                              break;
                            case 50331648:
                              h = ((16777215 & this.result.fg) << 8) | 255;
                              break;
                            default:
                              h = this._themeService.colors.foreground.rgba;
                          }
                        else
                          switch (50331648 & this.result.bg) {
                            case 16777216:
                            case 33554432:
                              h = this._themeService.colors.ansi[255 & this.result.bg].rgba;
                              break;
                            case 50331648:
                              h = ((16777215 & this.result.bg) << 8) | 255;
                          }
                        h =
                          (r.rgba.blend(
                            h,
                            (4294967040 &
                              (this._coreBrowserService.isFocused ? n.selectionBackgroundOpaque : n.selectionInactiveBackgroundOpaque).rgba) |
                              128
                          ) >>
                            8) &
                          16777215;
                      } else
                        h =
                          ((this._coreBrowserService.isFocused ? n.selectionBackgroundOpaque : n.selectionInactiveBackgroundOpaque).rgba >> 8) &
                          16777215;
                      if (
                        ((c = !0),
                        n.selectionForeground && ((a = (n.selectionForeground.rgba >> 8) & 16777215), (l = !0)),
                        (0, o.treatGlyphAsBackgroundColor)(e.getCode()))
                      ) {
                        if (67108864 & this.result.fg && 0 == (50331648 & this.result.bg))
                          a =
                            ((this._coreBrowserService.isFocused ? n.selectionBackgroundOpaque : n.selectionInactiveBackgroundOpaque).rgba >> 8) &
                            16777215;
                        else {
                          if (67108864 & this.result.fg)
                            switch (50331648 & this.result.bg) {
                              case 16777216:
                              case 33554432:
                                a = this._themeService.colors.ansi[255 & this.result.bg].rgba;
                                break;
                              case 50331648:
                                a = ((16777215 & this.result.bg) << 8) | 255;
                            }
                          else
                            switch (50331648 & this.result.fg) {
                              case 16777216:
                              case 33554432:
                                a = this._themeService.colors.ansi[255 & this.result.fg].rgba;
                                break;
                              case 50331648:
                                a = ((16777215 & this.result.fg) << 8) | 255;
                                break;
                              default:
                                a = this._themeService.colors.foreground.rgba;
                            }
                          a =
                            (r.rgba.blend(
                              a,
                              (4294967040 &
                                (this._coreBrowserService.isFocused ? n.selectionBackgroundOpaque : n.selectionInactiveBackgroundOpaque).rgba) |
                                128
                            ) >>
                              8) &
                            16777215;
                        }
                        l = !0;
                      }
                    }
                    this._decorationService.forEachDecorationAtCell(t, i, "top", (e) => {
                      e.backgroundColorRGB && ((h = (e.backgroundColorRGB.rgba >> 8) & 16777215), (c = !0)),
                        e.foregroundColorRGB && ((a = (e.foregroundColorRGB.rgba >> 8) & 16777215), (l = !0));
                    }),
                      c && (h = d ? (-16777216 & e.bg & -134217729) | h | 50331648 : (-16777216 & e.bg) | h | 50331648),
                      l && (a = (-16777216 & e.fg & -67108865) | a | 50331648),
                      67108864 & this.result.fg &&
                        (c &&
                          !l &&
                          ((a =
                            0 == (50331648 & this.result.bg)
                              ? (-134217728 & this.result.fg) | (16777215 & (n.background.rgba >> 8)) | 50331648
                              : (-134217728 & this.result.fg) | (67108863 & this.result.bg)),
                          (l = !0)),
                        !c &&
                          l &&
                          ((h =
                            0 == (50331648 & this.result.fg)
                              ? (-67108864 & this.result.bg) | (16777215 & (n.foreground.rgba >> 8)) | 50331648
                              : (-67108864 & this.result.bg) | (67108863 & this.result.fg)),
                          (c = !0))),
                      (n = void 0),
                      (this.result.bg = c ? h : this.result.bg),
                      (this.result.fg = l ? a : this.result.fg),
                      (this.result.ext &= 536870911),
                      (this.result.ext |= (_ << 29) & 3758096384);
                  }
                };
              },
              627: (e, t, i) => {
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.removeTerminalFromCache = t.acquireTextureAtlas = void 0);
                const s = i(509),
                  r = i(197),
                  o = [];
                (t.acquireTextureAtlas = function (e, t, i, n, a, h, l, c) {
                  const d = (0, r.generateConfig)(n, a, h, l, t, i, c);
                  for (let s = 0; s < o.length; s++) {
                    const t = o[s],
                      i = t.ownedBy.indexOf(e);
                    if (i >= 0) {
                      if ((0, r.configEquals)(t.config, d)) return t.atlas;
                      1 === t.ownedBy.length ? (t.atlas.dispose(), o.splice(s, 1)) : t.ownedBy.splice(i, 1);
                      break;
                    }
                  }
                  for (let s = 0; s < o.length; s++) {
                    const t = o[s];
                    if ((0, r.configEquals)(t.config, d)) return t.ownedBy.push(e), t.atlas;
                  }
                  const _ = e._core,
                    u = { atlas: new s.TextureAtlas(document, d, _.unicodeService), config: d, ownedBy: [e] };
                  return o.push(u), u.atlas;
                }),
                  (t.removeTerminalFromCache = function (e) {
                    for (let t = 0; t < o.length; t++) {
                      const i = o[t].ownedBy.indexOf(e);
                      if (-1 !== i) {
                        1 === o[t].ownedBy.length ? (o[t].atlas.dispose(), o.splice(t, 1)) : o[t].ownedBy.splice(i, 1);
                        break;
                      }
                    }
                  });
              },
              197: (e, t, i) => {
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.is256Color = t.configEquals = t.generateConfig = void 0);
                const s = i(160);
                (t.generateConfig = function (e, t, i, r, o, n, a) {
                  const h = {
                    foreground: n.foreground,
                    background: n.background,
                    cursor: s.NULL_COLOR,
                    cursorAccent: s.NULL_COLOR,
                    selectionForeground: s.NULL_COLOR,
                    selectionBackgroundTransparent: s.NULL_COLOR,
                    selectionBackgroundOpaque: s.NULL_COLOR,
                    selectionInactiveBackgroundTransparent: s.NULL_COLOR,
                    selectionInactiveBackgroundOpaque: s.NULL_COLOR,
                    ansi: n.ansi.slice(),
                    contrastCache: n.contrastCache,
                    halfContrastCache: n.halfContrastCache,
                  };
                  return {
                    customGlyphs: o.customGlyphs,
                    devicePixelRatio: a,
                    letterSpacing: o.letterSpacing,
                    lineHeight: o.lineHeight,
                    deviceCellWidth: e,
                    deviceCellHeight: t,
                    deviceCharWidth: i,
                    deviceCharHeight: r,
                    fontFamily: o.fontFamily,
                    fontSize: o.fontSize,
                    fontWeight: o.fontWeight,
                    fontWeightBold: o.fontWeightBold,
                    allowTransparency: o.allowTransparency,
                    drawBoldTextInBrightColors: o.drawBoldTextInBrightColors,
                    minimumContrastRatio: o.minimumContrastRatio,
                    colors: h,
                  };
                }),
                  (t.configEquals = function (e, t) {
                    for (let i = 0; i < e.colors.ansi.length; i++) if (e.colors.ansi[i].rgba !== t.colors.ansi[i].rgba) return !1;
                    return (
                      e.devicePixelRatio === t.devicePixelRatio &&
                      e.customGlyphs === t.customGlyphs &&
                      e.lineHeight === t.lineHeight &&
                      e.letterSpacing === t.letterSpacing &&
                      e.fontFamily === t.fontFamily &&
                      e.fontSize === t.fontSize &&
                      e.fontWeight === t.fontWeight &&
                      e.fontWeightBold === t.fontWeightBold &&
                      e.allowTransparency === t.allowTransparency &&
                      e.deviceCharWidth === t.deviceCharWidth &&
                      e.deviceCharHeight === t.deviceCharHeight &&
                      e.drawBoldTextInBrightColors === t.drawBoldTextInBrightColors &&
                      e.minimumContrastRatio === t.minimumContrastRatio &&
                      e.colors.foreground.rgba === t.colors.foreground.rgba &&
                      e.colors.background.rgba === t.colors.background.rgba
                    );
                  }),
                  (t.is256Color = function (e) {
                    return 16777216 == (50331648 & e) || 33554432 == (50331648 & e);
                  });
              },
              237: (e, t, i) => {
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.TEXT_BASELINE = t.DIM_OPACITY = t.INVERTED_DEFAULT_COLOR = void 0);
                const s = i(399);
                (t.INVERTED_DEFAULT_COLOR = 257), (t.DIM_OPACITY = 0.5), (t.TEXT_BASELINE = s.isFirefox || s.isLegacyEdge ? "bottom" : "ideographic");
              },
              457: (e, t) => {
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.CursorBlinkStateManager = void 0);
                t.CursorBlinkStateManager = class {
                  constructor(e, t) {
                    (this._renderCallback = e),
                      (this._coreBrowserService = t),
                      (this.isCursorVisible = !0),
                      this._coreBrowserService.isFocused && this._restartInterval();
                  }
                  get isPaused() {
                    return !(this._blinkStartTimeout || this._blinkInterval);
                  }
                  dispose() {
                    this._blinkInterval && (this._coreBrowserService.window.clearInterval(this._blinkInterval), (this._blinkInterval = void 0)),
                      this._blinkStartTimeout &&
                        (this._coreBrowserService.window.clearTimeout(this._blinkStartTimeout), (this._blinkStartTimeout = void 0)),
                      this._animationFrame &&
                        (this._coreBrowserService.window.cancelAnimationFrame(this._animationFrame), (this._animationFrame = void 0));
                  }
                  restartBlinkAnimation() {
                    this.isPaused ||
                      ((this._animationTimeRestarted = Date.now()),
                      (this.isCursorVisible = !0),
                      this._animationFrame ||
                        (this._animationFrame = this._coreBrowserService.window.requestAnimationFrame(() => {
                          this._renderCallback(), (this._animationFrame = void 0);
                        })));
                  }
                  _restartInterval(e = 600) {
                    this._blinkInterval && (this._coreBrowserService.window.clearInterval(this._blinkInterval), (this._blinkInterval = void 0)),
                      (this._blinkStartTimeout = this._coreBrowserService.window.setTimeout(() => {
                        if (this._animationTimeRestarted) {
                          const e = 600 - (Date.now() - this._animationTimeRestarted);
                          if (((this._animationTimeRestarted = void 0), e > 0)) return void this._restartInterval(e);
                        }
                        (this.isCursorVisible = !1),
                          (this._animationFrame = this._coreBrowserService.window.requestAnimationFrame(() => {
                            this._renderCallback(), (this._animationFrame = void 0);
                          })),
                          (this._blinkInterval = this._coreBrowserService.window.setInterval(() => {
                            if (this._animationTimeRestarted) {
                              const e = 600 - (Date.now() - this._animationTimeRestarted);
                              return (this._animationTimeRestarted = void 0), void this._restartInterval(e);
                            }
                            (this.isCursorVisible = !this.isCursorVisible),
                              (this._animationFrame = this._coreBrowserService.window.requestAnimationFrame(() => {
                                this._renderCallback(), (this._animationFrame = void 0);
                              }));
                          }, 600));
                      }, e));
                  }
                  pause() {
                    (this.isCursorVisible = !0),
                      this._blinkInterval && (this._coreBrowserService.window.clearInterval(this._blinkInterval), (this._blinkInterval = void 0)),
                      this._blinkStartTimeout &&
                        (this._coreBrowserService.window.clearTimeout(this._blinkStartTimeout), (this._blinkStartTimeout = void 0)),
                      this._animationFrame &&
                        (this._coreBrowserService.window.cancelAnimationFrame(this._animationFrame), (this._animationFrame = void 0));
                  }
                  resume() {
                    this.pause(), (this._animationTimeRestarted = void 0), this._restartInterval(), this.restartBlinkAnimation();
                  }
                };
              },
              860: (e, t, i) => {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.tryDrawCustomChar = t.powerlineDefinitions = t.boxDrawingDefinitions = t.blockElementDefinitions = void 0);
                const s = i(374);
                t.blockElementDefinitions = {
                  "▀": [{ x: 0, y: 0, w: 8, h: 4 }],
                  "▁": [{ x: 0, y: 7, w: 8, h: 1 }],
                  "▂": [{ x: 0, y: 6, w: 8, h: 2 }],
                  "▃": [{ x: 0, y: 5, w: 8, h: 3 }],
                  "▄": [{ x: 0, y: 4, w: 8, h: 4 }],
                  "▅": [{ x: 0, y: 3, w: 8, h: 5 }],
                  "▆": [{ x: 0, y: 2, w: 8, h: 6 }],
                  "▇": [{ x: 0, y: 1, w: 8, h: 7 }],
                  "█": [{ x: 0, y: 0, w: 8, h: 8 }],
                  "▉": [{ x: 0, y: 0, w: 7, h: 8 }],
                  "▊": [{ x: 0, y: 0, w: 6, h: 8 }],
                  "▋": [{ x: 0, y: 0, w: 5, h: 8 }],
                  "▌": [{ x: 0, y: 0, w: 4, h: 8 }],
                  "▍": [{ x: 0, y: 0, w: 3, h: 8 }],
                  "▎": [{ x: 0, y: 0, w: 2, h: 8 }],
                  "▏": [{ x: 0, y: 0, w: 1, h: 8 }],
                  "▐": [{ x: 4, y: 0, w: 4, h: 8 }],
                  "▔": [{ x: 0, y: 0, w: 8, h: 1 }],
                  "▕": [{ x: 7, y: 0, w: 1, h: 8 }],
                  "▖": [{ x: 0, y: 4, w: 4, h: 4 }],
                  "▗": [{ x: 4, y: 4, w: 4, h: 4 }],
                  "▘": [{ x: 0, y: 0, w: 4, h: 4 }],
                  "▙": [
                    { x: 0, y: 0, w: 4, h: 8 },
                    { x: 0, y: 4, w: 8, h: 4 },
                  ],
                  "▚": [
                    { x: 0, y: 0, w: 4, h: 4 },
                    { x: 4, y: 4, w: 4, h: 4 },
                  ],
                  "▛": [
                    { x: 0, y: 0, w: 4, h: 8 },
                    { x: 4, y: 0, w: 4, h: 4 },
                  ],
                  "▜": [
                    { x: 0, y: 0, w: 8, h: 4 },
                    { x: 4, y: 0, w: 4, h: 8 },
                  ],
                  "▝": [{ x: 4, y: 0, w: 4, h: 4 }],
                  "▞": [
                    { x: 4, y: 0, w: 4, h: 4 },
                    { x: 0, y: 4, w: 4, h: 4 },
                  ],
                  "▟": [
                    { x: 4, y: 0, w: 4, h: 8 },
                    { x: 0, y: 4, w: 8, h: 4 },
                  ],
                  "🭰": [{ x: 1, y: 0, w: 1, h: 8 }],
                  "🭱": [{ x: 2, y: 0, w: 1, h: 8 }],
                  "🭲": [{ x: 3, y: 0, w: 1, h: 8 }],
                  "🭳": [{ x: 4, y: 0, w: 1, h: 8 }],
                  "🭴": [{ x: 5, y: 0, w: 1, h: 8 }],
                  "🭵": [{ x: 6, y: 0, w: 1, h: 8 }],
                  "🭶": [{ x: 0, y: 1, w: 8, h: 1 }],
                  "🭷": [{ x: 0, y: 2, w: 8, h: 1 }],
                  "🭸": [{ x: 0, y: 3, w: 8, h: 1 }],
                  "🭹": [{ x: 0, y: 4, w: 8, h: 1 }],
                  "🭺": [{ x: 0, y: 5, w: 8, h: 1 }],
                  "🭻": [{ x: 0, y: 6, w: 8, h: 1 }],
                  "🭼": [
                    { x: 0, y: 0, w: 1, h: 8 },
                    { x: 0, y: 7, w: 8, h: 1 },
                  ],
                  "🭽": [
                    { x: 0, y: 0, w: 1, h: 8 },
                    { x: 0, y: 0, w: 8, h: 1 },
                  ],
                  "🭾": [
                    { x: 7, y: 0, w: 1, h: 8 },
                    { x: 0, y: 0, w: 8, h: 1 },
                  ],
                  "🭿": [
                    { x: 7, y: 0, w: 1, h: 8 },
                    { x: 0, y: 7, w: 8, h: 1 },
                  ],
                  "🮀": [
                    { x: 0, y: 0, w: 8, h: 1 },
                    { x: 0, y: 7, w: 8, h: 1 },
                  ],
                  "🮁": [
                    { x: 0, y: 0, w: 8, h: 1 },
                    { x: 0, y: 2, w: 8, h: 1 },
                    { x: 0, y: 4, w: 8, h: 1 },
                    { x: 0, y: 7, w: 8, h: 1 },
                  ],
                  "🮂": [{ x: 0, y: 0, w: 8, h: 2 }],
                  "🮃": [{ x: 0, y: 0, w: 8, h: 3 }],
                  "🮄": [{ x: 0, y: 0, w: 8, h: 5 }],
                  "🮅": [{ x: 0, y: 0, w: 8, h: 6 }],
                  "🮆": [{ x: 0, y: 0, w: 8, h: 7 }],
                  "🮇": [{ x: 6, y: 0, w: 2, h: 8 }],
                  "🮈": [{ x: 5, y: 0, w: 3, h: 8 }],
                  "🮉": [{ x: 3, y: 0, w: 5, h: 8 }],
                  "🮊": [{ x: 2, y: 0, w: 6, h: 8 }],
                  "🮋": [{ x: 1, y: 0, w: 7, h: 8 }],
                  "🮕": [
                    { x: 0, y: 0, w: 2, h: 2 },
                    { x: 4, y: 0, w: 2, h: 2 },
                    { x: 2, y: 2, w: 2, h: 2 },
                    { x: 6, y: 2, w: 2, h: 2 },
                    { x: 0, y: 4, w: 2, h: 2 },
                    { x: 4, y: 4, w: 2, h: 2 },
                    { x: 2, y: 6, w: 2, h: 2 },
                    { x: 6, y: 6, w: 2, h: 2 },
                  ],
                  "🮖": [
                    { x: 2, y: 0, w: 2, h: 2 },
                    { x: 6, y: 0, w: 2, h: 2 },
                    { x: 0, y: 2, w: 2, h: 2 },
                    { x: 4, y: 2, w: 2, h: 2 },
                    { x: 2, y: 4, w: 2, h: 2 },
                    { x: 6, y: 4, w: 2, h: 2 },
                    { x: 0, y: 6, w: 2, h: 2 },
                    { x: 4, y: 6, w: 2, h: 2 },
                  ],
                  "🮗": [
                    { x: 0, y: 2, w: 8, h: 2 },
                    { x: 0, y: 6, w: 8, h: 2 },
                  ],
                };
                const r = {
                  "░": [
                    [1, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 1, 0],
                    [0, 0, 0, 0],
                  ],
                  "▒": [
                    [1, 0],
                    [0, 0],
                    [0, 1],
                    [0, 0],
                  ],
                  "▓": [
                    [0, 1],
                    [1, 1],
                    [1, 0],
                    [1, 1],
                  ],
                };
                (t.boxDrawingDefinitions = {
                  "─": { 1: "M0,.5 L1,.5" },
                  "━": { 3: "M0,.5 L1,.5" },
                  "│": { 1: "M.5,0 L.5,1" },
                  "┃": { 3: "M.5,0 L.5,1" },
                  "┌": { 1: "M0.5,1 L.5,.5 L1,.5" },
                  "┏": { 3: "M0.5,1 L.5,.5 L1,.5" },
                  "┐": { 1: "M0,.5 L.5,.5 L.5,1" },
                  "┓": { 3: "M0,.5 L.5,.5 L.5,1" },
                  "└": { 1: "M.5,0 L.5,.5 L1,.5" },
                  "┗": { 3: "M.5,0 L.5,.5 L1,.5" },
                  "┘": { 1: "M.5,0 L.5,.5 L0,.5" },
                  "┛": { 3: "M.5,0 L.5,.5 L0,.5" },
                  "├": { 1: "M.5,0 L.5,1 M.5,.5 L1,.5" },
                  "┣": { 3: "M.5,0 L.5,1 M.5,.5 L1,.5" },
                  "┤": { 1: "M.5,0 L.5,1 M.5,.5 L0,.5" },
                  "┫": { 3: "M.5,0 L.5,1 M.5,.5 L0,.5" },
                  "┬": { 1: "M0,.5 L1,.5 M.5,.5 L.5,1" },
                  "┳": { 3: "M0,.5 L1,.5 M.5,.5 L.5,1" },
                  "┴": { 1: "M0,.5 L1,.5 M.5,.5 L.5,0" },
                  "┻": { 3: "M0,.5 L1,.5 M.5,.5 L.5,0" },
                  "┼": { 1: "M0,.5 L1,.5 M.5,0 L.5,1" },
                  "╋": { 3: "M0,.5 L1,.5 M.5,0 L.5,1" },
                  "╴": { 1: "M.5,.5 L0,.5" },
                  "╸": { 3: "M.5,.5 L0,.5" },
                  "╵": { 1: "M.5,.5 L.5,0" },
                  "╹": { 3: "M.5,.5 L.5,0" },
                  "╶": { 1: "M.5,.5 L1,.5" },
                  "╺": { 3: "M.5,.5 L1,.5" },
                  "╷": { 1: "M.5,.5 L.5,1" },
                  "╻": { 3: "M.5,.5 L.5,1" },
                  "═": { 1: (e, t) => `M0,${0.5 - t} L1,${0.5 - t} M0,${0.5 + t} L1,${0.5 + t}` },
                  "║": { 1: (e, t) => `M${0.5 - e},0 L${0.5 - e},1 M${0.5 + e},0 L${0.5 + e},1` },
                  "╒": { 1: (e, t) => `M.5,1 L.5,${0.5 - t} L1,${0.5 - t} M.5,${0.5 + t} L1,${0.5 + t}` },
                  "╓": { 1: (e, t) => `M${0.5 - e},1 L${0.5 - e},.5 L1,.5 M${0.5 + e},.5 L${0.5 + e},1` },
                  "╔": { 1: (e, t) => `M1,${0.5 - t} L${0.5 - e},${0.5 - t} L${0.5 - e},1 M1,${0.5 + t} L${0.5 + e},${0.5 + t} L${0.5 + e},1` },
                  "╕": { 1: (e, t) => `M0,${0.5 - t} L.5,${0.5 - t} L.5,1 M0,${0.5 + t} L.5,${0.5 + t}` },
                  "╖": { 1: (e, t) => `M${0.5 + e},1 L${0.5 + e},.5 L0,.5 M${0.5 - e},.5 L${0.5 - e},1` },
                  "╗": { 1: (e, t) => `M0,${0.5 + t} L${0.5 - e},${0.5 + t} L${0.5 - e},1 M0,${0.5 - t} L${0.5 + e},${0.5 - t} L${0.5 + e},1` },
                  "╘": { 1: (e, t) => `M.5,0 L.5,${0.5 + t} L1,${0.5 + t} M.5,${0.5 - t} L1,${0.5 - t}` },
                  "╙": { 1: (e, t) => `M1,.5 L${0.5 - e},.5 L${0.5 - e},0 M${0.5 + e},.5 L${0.5 + e},0` },
                  "╚": { 1: (e, t) => `M1,${0.5 - t} L${0.5 + e},${0.5 - t} L${0.5 + e},0 M1,${0.5 + t} L${0.5 - e},${0.5 + t} L${0.5 - e},0` },
                  "╛": { 1: (e, t) => `M0,${0.5 + t} L.5,${0.5 + t} L.5,0 M0,${0.5 - t} L.5,${0.5 - t}` },
                  "╜": { 1: (e, t) => `M0,.5 L${0.5 + e},.5 L${0.5 + e},0 M${0.5 - e},.5 L${0.5 - e},0` },
                  "╝": { 1: (e, t) => `M0,${0.5 - t} L${0.5 - e},${0.5 - t} L${0.5 - e},0 M0,${0.5 + t} L${0.5 + e},${0.5 + t} L${0.5 + e},0` },
                  "╞": { 1: (e, t) => `M.5,0 L.5,1 M.5,${0.5 - t} L1,${0.5 - t} M.5,${0.5 + t} L1,${0.5 + t}` },
                  "╟": { 1: (e, t) => `M${0.5 - e},0 L${0.5 - e},1 M${0.5 + e},0 L${0.5 + e},1 M${0.5 + e},.5 L1,.5` },
                  "╠": {
                    1: (e, t) =>
                      `M${0.5 - e},0 L${0.5 - e},1 M1,${0.5 + t} L${0.5 + e},${0.5 + t} L${0.5 + e},1 M1,${0.5 - t} L${0.5 + e},${0.5 - t} L${
                        0.5 + e
                      },0`,
                  },
                  "╡": { 1: (e, t) => `M.5,0 L.5,1 M0,${0.5 - t} L.5,${0.5 - t} M0,${0.5 + t} L.5,${0.5 + t}` },
                  "╢": { 1: (e, t) => `M0,.5 L${0.5 - e},.5 M${0.5 - e},0 L${0.5 - e},1 M${0.5 + e},0 L${0.5 + e},1` },
                  "╣": {
                    1: (e, t) =>
                      `M${0.5 + e},0 L${0.5 + e},1 M0,${0.5 + t} L${0.5 - e},${0.5 + t} L${0.5 - e},1 M0,${0.5 - t} L${0.5 - e},${0.5 - t} L${
                        0.5 - e
                      },0`,
                  },
                  "╤": { 1: (e, t) => `M0,${0.5 - t} L1,${0.5 - t} M0,${0.5 + t} L1,${0.5 + t} M.5,${0.5 + t} L.5,1` },
                  "╥": { 1: (e, t) => `M0,.5 L1,.5 M${0.5 - e},.5 L${0.5 - e},1 M${0.5 + e},.5 L${0.5 + e},1` },
                  "╦": {
                    1: (e, t) =>
                      `M0,${0.5 - t} L1,${0.5 - t} M0,${0.5 + t} L${0.5 - e},${0.5 + t} L${0.5 - e},1 M1,${0.5 + t} L${0.5 + e},${0.5 + t} L${
                        0.5 + e
                      },1`,
                  },
                  "╧": { 1: (e, t) => `M.5,0 L.5,${0.5 - t} M0,${0.5 - t} L1,${0.5 - t} M0,${0.5 + t} L1,${0.5 + t}` },
                  "╨": { 1: (e, t) => `M0,.5 L1,.5 M${0.5 - e},.5 L${0.5 - e},0 M${0.5 + e},.5 L${0.5 + e},0` },
                  "╩": {
                    1: (e, t) =>
                      `M0,${0.5 + t} L1,${0.5 + t} M0,${0.5 - t} L${0.5 - e},${0.5 - t} L${0.5 - e},0 M1,${0.5 - t} L${0.5 + e},${0.5 - t} L${
                        0.5 + e
                      },0`,
                  },
                  "╪": { 1: (e, t) => `M.5,0 L.5,1 M0,${0.5 - t} L1,${0.5 - t} M0,${0.5 + t} L1,${0.5 + t}` },
                  "╫": { 1: (e, t) => `M0,.5 L1,.5 M${0.5 - e},0 L${0.5 - e},1 M${0.5 + e},0 L${0.5 + e},1` },
                  "╬": {
                    1: (e, t) =>
                      `M0,${0.5 + t} L${0.5 - e},${0.5 + t} L${0.5 - e},1 M1,${0.5 + t} L${0.5 + e},${0.5 + t} L${0.5 + e},1 M0,${0.5 - t} L${
                        0.5 - e
                      },${0.5 - t} L${0.5 - e},0 M1,${0.5 - t} L${0.5 + e},${0.5 - t} L${0.5 + e},0`,
                  },
                  "╱": { 1: "M1,0 L0,1" },
                  "╲": { 1: "M0,0 L1,1" },
                  "╳": { 1: "M1,0 L0,1 M0,0 L1,1" },
                  "╼": { 1: "M.5,.5 L0,.5", 3: "M.5,.5 L1,.5" },
                  "╽": { 1: "M.5,.5 L.5,0", 3: "M.5,.5 L.5,1" },
                  "╾": { 1: "M.5,.5 L1,.5", 3: "M.5,.5 L0,.5" },
                  "╿": { 1: "M.5,.5 L.5,1", 3: "M.5,.5 L.5,0" },
                  "┍": { 1: "M.5,.5 L.5,1", 3: "M.5,.5 L1,.5" },
                  "┎": { 1: "M.5,.5 L1,.5", 3: "M.5,.5 L.5,1" },
                  "┑": { 1: "M.5,.5 L.5,1", 3: "M.5,.5 L0,.5" },
                  "┒": { 1: "M.5,.5 L0,.5", 3: "M.5,.5 L.5,1" },
                  "┕": { 1: "M.5,.5 L.5,0", 3: "M.5,.5 L1,.5" },
                  "┖": { 1: "M.5,.5 L1,.5", 3: "M.5,.5 L.5,0" },
                  "┙": { 1: "M.5,.5 L.5,0", 3: "M.5,.5 L0,.5" },
                  "┚": { 1: "M.5,.5 L0,.5", 3: "M.5,.5 L.5,0" },
                  "┝": { 1: "M.5,0 L.5,1", 3: "M.5,.5 L1,.5" },
                  "┞": { 1: "M0.5,1 L.5,.5 L1,.5", 3: "M.5,.5 L.5,0" },
                  "┟": { 1: "M.5,0 L.5,.5 L1,.5", 3: "M.5,.5 L.5,1" },
                  "┠": { 1: "M.5,.5 L1,.5", 3: "M.5,0 L.5,1" },
                  "┡": { 1: "M.5,.5 L.5,1", 3: "M.5,0 L.5,.5 L1,.5" },
                  "┢": { 1: "M.5,.5 L.5,0", 3: "M0.5,1 L.5,.5 L1,.5" },
                  "┥": { 1: "M.5,0 L.5,1", 3: "M.5,.5 L0,.5" },
                  "┦": { 1: "M0,.5 L.5,.5 L.5,1", 3: "M.5,.5 L.5,0" },
                  "┧": { 1: "M.5,0 L.5,.5 L0,.5", 3: "M.5,.5 L.5,1" },
                  "┨": { 1: "M.5,.5 L0,.5", 3: "M.5,0 L.5,1" },
                  "┩": { 1: "M.5,.5 L.5,1", 3: "M.5,0 L.5,.5 L0,.5" },
                  "┪": { 1: "M.5,.5 L.5,0", 3: "M0,.5 L.5,.5 L.5,1" },
                  "┭": { 1: "M0.5,1 L.5,.5 L1,.5", 3: "M.5,.5 L0,.5" },
                  "┮": { 1: "M0,.5 L.5,.5 L.5,1", 3: "M.5,.5 L1,.5" },
                  "┯": { 1: "M.5,.5 L.5,1", 3: "M0,.5 L1,.5" },
                  "┰": { 1: "M0,.5 L1,.5", 3: "M.5,.5 L.5,1" },
                  "┱": { 1: "M.5,.5 L1,.5", 3: "M0,.5 L.5,.5 L.5,1" },
                  "┲": { 1: "M.5,.5 L0,.5", 3: "M0.5,1 L.5,.5 L1,.5" },
                  "┵": { 1: "M.5,0 L.5,.5 L1,.5", 3: "M.5,.5 L0,.5" },
                  "┶": { 1: "M.5,0 L.5,.5 L0,.5", 3: "M.5,.5 L1,.5" },
                  "┷": { 1: "M.5,.5 L.5,0", 3: "M0,.5 L1,.5" },
                  "┸": { 1: "M0,.5 L1,.5", 3: "M.5,.5 L.5,0" },
                  "┹": { 1: "M.5,.5 L1,.5", 3: "M.5,0 L.5,.5 L0,.5" },
                  "┺": { 1: "M.5,.5 L0,.5", 3: "M.5,0 L.5,.5 L1,.5" },
                  "┽": { 1: "M.5,0 L.5,1 M.5,.5 L1,.5", 3: "M.5,.5 L0,.5" },
                  "┾": { 1: "M.5,0 L.5,1 M.5,.5 L0,.5", 3: "M.5,.5 L1,.5" },
                  "┿": { 1: "M.5,0 L.5,1", 3: "M0,.5 L1,.5" },
                  "╀": { 1: "M0,.5 L1,.5 M.5,.5 L.5,1", 3: "M.5,.5 L.5,0" },
                  "╁": { 1: "M.5,.5 L.5,0 M0,.5 L1,.5", 3: "M.5,.5 L.5,1" },
                  "╂": { 1: "M0,.5 L1,.5", 3: "M.5,0 L.5,1" },
                  "╃": { 1: "M0.5,1 L.5,.5 L1,.5", 3: "M.5,0 L.5,.5 L0,.5" },
                  "╄": { 1: "M0,.5 L.5,.5 L.5,1", 3: "M.5,0 L.5,.5 L1,.5" },
                  "╅": { 1: "M.5,0 L.5,.5 L1,.5", 3: "M0,.5 L.5,.5 L.5,1" },
                  "╆": { 1: "M.5,0 L.5,.5 L0,.5", 3: "M0.5,1 L.5,.5 L1,.5" },
                  "╇": { 1: "M.5,.5 L.5,1", 3: "M.5,.5 L.5,0 M0,.5 L1,.5" },
                  "╈": { 1: "M.5,.5 L.5,0", 3: "M0,.5 L1,.5 M.5,.5 L.5,1" },
                  "╉": { 1: "M.5,.5 L1,.5", 3: "M.5,0 L.5,1 M.5,.5 L0,.5" },
                  "╊": { 1: "M.5,.5 L0,.5", 3: "M.5,0 L.5,1 M.5,.5 L1,.5" },
                  "╌": { 1: "M.1,.5 L.4,.5 M.6,.5 L.9,.5" },
                  "╍": { 3: "M.1,.5 L.4,.5 M.6,.5 L.9,.5" },
                  "┄": { 1: "M.0667,.5 L.2667,.5 M.4,.5 L.6,.5 M.7333,.5 L.9333,.5" },
                  "┅": { 3: "M.0667,.5 L.2667,.5 M.4,.5 L.6,.5 M.7333,.5 L.9333,.5" },
                  "┈": { 1: "M.05,.5 L.2,.5 M.3,.5 L.45,.5 M.55,.5 L.7,.5 M.8,.5 L.95,.5" },
                  "┉": { 3: "M.05,.5 L.2,.5 M.3,.5 L.45,.5 M.55,.5 L.7,.5 M.8,.5 L.95,.5" },
                  "╎": { 1: "M.5,.1 L.5,.4 M.5,.6 L.5,.9" },
                  "╏": { 3: "M.5,.1 L.5,.4 M.5,.6 L.5,.9" },
                  "┆": { 1: "M.5,.0667 L.5,.2667 M.5,.4 L.5,.6 M.5,.7333 L.5,.9333" },
                  "┇": { 3: "M.5,.0667 L.5,.2667 M.5,.4 L.5,.6 M.5,.7333 L.5,.9333" },
                  "┊": { 1: "M.5,.05 L.5,.2 M.5,.3 L.5,.45 L.5,.55 M.5,.7 L.5,.95" },
                  "┋": { 3: "M.5,.05 L.5,.2 M.5,.3 L.5,.45 L.5,.55 M.5,.7 L.5,.95" },
                  "╭": { 1: (e, t) => `M.5,1 L.5,${0.5 + (t / 0.15) * 0.5} C.5,${0.5 + (t / 0.15) * 0.5},.5,.5,1,.5` },
                  "╮": { 1: (e, t) => `M.5,1 L.5,${0.5 + (t / 0.15) * 0.5} C.5,${0.5 + (t / 0.15) * 0.5},.5,.5,0,.5` },
                  "╯": { 1: (e, t) => `M.5,0 L.5,${0.5 - (t / 0.15) * 0.5} C.5,${0.5 - (t / 0.15) * 0.5},.5,.5,0,.5` },
                  "╰": { 1: (e, t) => `M.5,0 L.5,${0.5 - (t / 0.15) * 0.5} C.5,${0.5 - (t / 0.15) * 0.5},.5,.5,1,.5` },
                }),
                  (t.powerlineDefinitions = {
                    "": { d: "M0,0 L1,.5 L0,1", type: 0, rightPadding: 2 },
                    "": { d: "M-1,-.5 L1,.5 L-1,1.5", type: 1, leftPadding: 1, rightPadding: 1 },
                    "": { d: "M1,0 L0,.5 L1,1", type: 0, leftPadding: 2 },
                    "": { d: "M2,-.5 L0,.5 L2,1.5", type: 1, leftPadding: 1, rightPadding: 1 },
                    "": { d: "M0,0 L0,1 C0.552,1,1,0.776,1,.5 C1,0.224,0.552,0,0,0", type: 0, rightPadding: 1 },
                    "": { d: "M.2,1 C.422,1,.8,.826,.78,.5 C.8,.174,0.422,0,.2,0", type: 1, rightPadding: 1 },
                    "": { d: "M1,0 L1,1 C0.448,1,0,0.776,0,.5 C0,0.224,0.448,0,1,0", type: 0, leftPadding: 1 },
                    "": { d: "M.8,1 C0.578,1,0.2,.826,.22,.5 C0.2,0.174,0.578,0,0.8,0", type: 1, leftPadding: 1 },
                    "": { d: "M-.5,-.5 L1.5,1.5 L-.5,1.5", type: 0 },
                    "": { d: "M-.5,-.5 L1.5,1.5", type: 1, leftPadding: 1, rightPadding: 1 },
                    "": { d: "M1.5,-.5 L-.5,1.5 L1.5,1.5", type: 0 },
                    "": { d: "M1.5,-.5 L-.5,1.5 L-.5,-.5", type: 0 },
                    "": { d: "M1.5,-.5 L-.5,1.5", type: 1, leftPadding: 1, rightPadding: 1 },
                    "": { d: "M-.5,-.5 L1.5,1.5 L1.5,-.5", type: 0 },
                  }),
                  (t.powerlineDefinitions[""] = t.powerlineDefinitions[""]),
                  (t.powerlineDefinitions[""] = t.powerlineDefinitions[""]),
                  (t.tryDrawCustomChar = function (e, i, n, l, c, d, _, u) {
                    const g = t.blockElementDefinitions[i];
                    if (g)
                      return (
                        (function (e, t, i, s, r, o) {
                          for (let n = 0; n < t.length; n++) {
                            const a = t[n],
                              h = r / 8,
                              l = o / 8;
                            e.fillRect(i + a.x * h, s + a.y * l, a.w * h, a.h * l);
                          }
                        })(e, g, n, l, c, d),
                        !0
                      );
                    const v = r[i];
                    if (v)
                      return (
                        (function (e, t, i, r, n, a) {
                          let h = o.get(t);
                          h || ((h = new Map()), o.set(t, h));
                          const l = e.fillStyle;
                          if ("string" != typeof l) throw new Error(`Unexpected fillStyle type "${l}"`);
                          let c = h.get(l);
                          if (!c) {
                            const i = t[0].length,
                              r = t.length,
                              o = e.canvas.ownerDocument.createElement("canvas");
                            (o.width = i), (o.height = r);
                            const n = (0, s.throwIfFalsy)(o.getContext("2d")),
                              a = new ImageData(i, r);
                            let d, _, u, g;
                            if (l.startsWith("#"))
                              (d = parseInt(l.slice(1, 3), 16)),
                                (_ = parseInt(l.slice(3, 5), 16)),
                                (u = parseInt(l.slice(5, 7), 16)),
                                (g = (l.length > 7 && parseInt(l.slice(7, 9), 16)) || 1);
                            else {
                              if (!l.startsWith("rgba")) throw new Error(`Unexpected fillStyle color format "${l}" when drawing pattern glyph`);
                              [d, _, u, g] = l
                                .substring(5, l.length - 1)
                                .split(",")
                                .map((e) => parseFloat(e));
                            }
                            for (let e = 0; e < r; e++)
                              for (let s = 0; s < i; s++)
                                (a.data[4 * (e * i + s)] = d),
                                  (a.data[4 * (e * i + s) + 1] = _),
                                  (a.data[4 * (e * i + s) + 2] = u),
                                  (a.data[4 * (e * i + s) + 3] = t[e][s] * (255 * g));
                            n.putImageData(a, 0, 0), (c = (0, s.throwIfFalsy)(e.createPattern(o, null))), h.set(l, c);
                          }
                          (e.fillStyle = c), e.fillRect(i, r, n, a);
                        })(e, v, n, l, c, d),
                        !0
                      );
                    const f = t.boxDrawingDefinitions[i];
                    if (f)
                      return (
                        (function (e, t, i, s, r, o, n) {
                          e.strokeStyle = e.fillStyle;
                          for (const [l, c] of Object.entries(t)) {
                            let t;
                            e.beginPath(), (e.lineWidth = n * Number.parseInt(l)), (t = "function" == typeof c ? c(0.15, (0.15 / o) * r) : c);
                            for (const l of t.split(" ")) {
                              const t = l[0],
                                c = a[t];
                              if (!c) {
                                console.error(`Could not find drawing instructions for "${t}"`);
                                continue;
                              }
                              const d = l.substring(1).split(",");
                              d[0] && d[1] && c(e, h(d, r, o, i, s, !0, n));
                            }
                            e.stroke(), e.closePath();
                          }
                        })(e, f, n, l, c, d, u),
                        !0
                      );
                    const p = t.powerlineDefinitions[i];
                    return (
                      !!p &&
                      ((function (e, t, i, s, r, o, n, l) {
                        const c = new Path2D();
                        c.rect(i, s, r, o), e.clip(c), e.beginPath();
                        const d = n / 12;
                        e.lineWidth = l * d;
                        for (const _ of t.d.split(" ")) {
                          const n = _[0],
                            c = a[n];
                          if (!c) {
                            console.error(`Could not find drawing instructions for "${n}"`);
                            continue;
                          }
                          const u = _.substring(1).split(",");
                          u[0] && u[1] && c(e, h(u, r, o, i, s, !1, l, (t.leftPadding ?? 0) * (d / 2), (t.rightPadding ?? 0) * (d / 2)));
                        }
                        1 === t.type ? ((e.strokeStyle = e.fillStyle), e.stroke()) : e.fill(), e.closePath();
                      })(e, p, n, l, c, d, _, u),
                      !0)
                    );
                  });
                const o = new Map();
                function n(e, t, i = 0) {
                  return Math.max(Math.min(e, t), i);
                }
                const a = {
                  C: (e, t) => e.bezierCurveTo(t[0], t[1], t[2], t[3], t[4], t[5]),
                  L: (e, t) => e.lineTo(t[0], t[1]),
                  M: (e, t) => e.moveTo(t[0], t[1]),
                };
                function h(e, t, i, s, r, o, a, h = 0, l = 0) {
                  const c = e.map((e) => parseFloat(e) || parseInt(e));
                  if (c.length < 2) throw new Error("Too few arguments for instruction");
                  for (let d = 0; d < c.length; d += 2)
                    (c[d] *= t - h * a - l * a), o && 0 !== c[d] && (c[d] = n(Math.round(c[d] + 0.5) - 0.5, t, 0)), (c[d] += s + h * a);
                  for (let d = 1; d < c.length; d += 2) (c[d] *= i), o && 0 !== c[d] && (c[d] = n(Math.round(c[d] + 0.5) - 0.5, i, 0)), (c[d] += r);
                  return c;
                }
              },
              56: (e, t, i) => {
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.observeDevicePixelDimensions = void 0);
                const s = i(859);
                t.observeDevicePixelDimensions = function (e, t, i) {
                  let r = new t.ResizeObserver((t) => {
                    const s = t.find((t) => t.target === e);
                    if (!s) return;
                    if (!("devicePixelContentBoxSize" in s)) return r?.disconnect(), void (r = void 0);
                    const o = s.devicePixelContentBoxSize[0].inlineSize,
                      n = s.devicePixelContentBoxSize[0].blockSize;
                    o > 0 && n > 0 && i(o, n);
                  });
                  try {
                    r.observe(e, { box: ["device-pixel-content-box"] });
                  } catch {
                    r.disconnect(), (r = void 0);
                  }
                  return (0, s.toDisposable)(() => r?.disconnect());
                };
              },
              374: (e, t) => {
                function i(e) {
                  return 57508 <= e && e <= 57558;
                }
                function s(e) {
                  return (
                    (e >= 128512 && e <= 128591) ||
                    (e >= 127744 && e <= 128511) ||
                    (e >= 128640 && e <= 128767) ||
                    (e >= 9728 && e <= 9983) ||
                    (e >= 9984 && e <= 10175) ||
                    (e >= 65024 && e <= 65039) ||
                    (e >= 129280 && e <= 129535) ||
                    (e >= 127462 && e <= 127487)
                  );
                }
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.computeNextVariantOffset =
                    t.createRenderDimensions =
                    t.treatGlyphAsBackgroundColor =
                    t.allowRescaling =
                    t.isEmoji =
                    t.isRestrictedPowerlineGlyph =
                    t.isPowerlineGlyph =
                    t.throwIfFalsy =
                      void 0),
                  (t.throwIfFalsy = function (e) {
                    if (!e) throw new Error("value must not be falsy");
                    return e;
                  }),
                  (t.isPowerlineGlyph = i),
                  (t.isRestrictedPowerlineGlyph = function (e) {
                    return 57520 <= e && e <= 57527;
                  }),
                  (t.isEmoji = s),
                  (t.allowRescaling = function (e, t, r, o) {
                    return (
                      1 === t &&
                      r > Math.ceil(1.5 * o) &&
                      void 0 !== e &&
                      e > 255 &&
                      !s(e) &&
                      !i(e) &&
                      !(function (e) {
                        return 57344 <= e && e <= 63743;
                      })(e)
                    );
                  }),
                  (t.treatGlyphAsBackgroundColor = function (e) {
                    return (
                      i(e) ||
                      (function (e) {
                        return 9472 <= e && e <= 9631;
                      })(e)
                    );
                  }),
                  (t.createRenderDimensions = function () {
                    return {
                      css: { canvas: { width: 0, height: 0 }, cell: { width: 0, height: 0 } },
                      device: { canvas: { width: 0, height: 0 }, cell: { width: 0, height: 0 }, char: { width: 0, height: 0, left: 0, top: 0 } },
                    };
                  }),
                  (t.computeNextVariantOffset = function (e, t, i = 0) {
                    return (e - (2 * Math.round(t) - i)) % (2 * Math.round(t));
                  });
              },
              296: (e, t) => {
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.createSelectionRenderModel = void 0);
                class i {
                  constructor() {
                    this.clear();
                  }
                  clear() {
                    (this.hasSelection = !1),
                      (this.columnSelectMode = !1),
                      (this.viewportStartRow = 0),
                      (this.viewportEndRow = 0),
                      (this.viewportCappedStartRow = 0),
                      (this.viewportCappedEndRow = 0),
                      (this.startCol = 0),
                      (this.endCol = 0),
                      (this.selectionStart = void 0),
                      (this.selectionEnd = void 0);
                  }
                  update(e, t, i, s = !1) {
                    if (((this.selectionStart = t), (this.selectionEnd = i), !t || !i || (t[0] === i[0] && t[1] === i[1]))) return void this.clear();
                    const r = e.buffers.active.ydisp,
                      o = t[1] - r,
                      n = i[1] - r,
                      a = Math.max(o, 0),
                      h = Math.min(n, e.rows - 1);
                    a >= e.rows || h < 0
                      ? this.clear()
                      : ((this.hasSelection = !0),
                        (this.columnSelectMode = s),
                        (this.viewportStartRow = o),
                        (this.viewportEndRow = n),
                        (this.viewportCappedStartRow = a),
                        (this.viewportCappedEndRow = h),
                        (this.startCol = t[0]),
                        (this.endCol = i[0]));
                  }
                  isCellSelected(e, t, i) {
                    return (
                      !!this.hasSelection &&
                      ((i -= e.buffer.active.viewportY),
                      this.columnSelectMode
                        ? this.startCol <= this.endCol
                          ? t >= this.startCol && i >= this.viewportCappedStartRow && t < this.endCol && i <= this.viewportCappedEndRow
                          : t < this.startCol && i >= this.viewportCappedStartRow && t >= this.endCol && i <= this.viewportCappedEndRow
                        : (i > this.viewportStartRow && i < this.viewportEndRow) ||
                          (this.viewportStartRow === this.viewportEndRow && i === this.viewportStartRow && t >= this.startCol && t < this.endCol) ||
                          (this.viewportStartRow < this.viewportEndRow && i === this.viewportEndRow && t < this.endCol) ||
                          (this.viewportStartRow < this.viewportEndRow && i === this.viewportStartRow && t >= this.startCol))
                    );
                  }
                }
                t.createSelectionRenderModel = function () {
                  return new i();
                };
              },
              509: (e, t, i) => {
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.TextureAtlas = void 0);
                const s = i(237),
                  r = i(860),
                  o = i(374),
                  n = i(160),
                  a = i(345),
                  h = i(485),
                  l = i(385),
                  c = i(147),
                  d = i(855),
                  _ = {
                    texturePage: 0,
                    texturePosition: { x: 0, y: 0 },
                    texturePositionClipSpace: { x: 0, y: 0 },
                    offset: { x: 0, y: 0 },
                    size: { x: 0, y: 0 },
                    sizeClipSpace: { x: 0, y: 0 },
                  };
                let u;
                class g {
                  get pages() {
                    return this._pages;
                  }
                  constructor(e, t, i) {
                    (this._document = e),
                      (this._config = t),
                      (this._unicodeService = i),
                      (this._didWarmUp = !1),
                      (this._cacheMap = new h.FourKeyMap()),
                      (this._cacheMapCombined = new h.FourKeyMap()),
                      (this._pages = []),
                      (this._activePages = []),
                      (this._workBoundingBox = { top: 0, left: 0, bottom: 0, right: 0 }),
                      (this._workAttributeData = new c.AttributeData()),
                      (this._textureSize = 512),
                      (this._onAddTextureAtlasCanvas = new a.EventEmitter()),
                      (this.onAddTextureAtlasCanvas = this._onAddTextureAtlasCanvas.event),
                      (this._onRemoveTextureAtlasCanvas = new a.EventEmitter()),
                      (this.onRemoveTextureAtlasCanvas = this._onRemoveTextureAtlasCanvas.event),
                      (this._requestClearModel = !1),
                      this._createNewPage(),
                      (this._tmpCanvas = p(e, 4 * this._config.deviceCellWidth + 4, this._config.deviceCellHeight + 4)),
                      (this._tmpCtx = (0, o.throwIfFalsy)(
                        this._tmpCanvas.getContext("2d", { alpha: this._config.allowTransparency, willReadFrequently: !0 })
                      ));
                  }
                  dispose() {
                    for (const e of this.pages) e.canvas.remove();
                    this._onAddTextureAtlasCanvas.dispose();
                  }
                  warmUp() {
                    this._didWarmUp || (this._doWarmUp(), (this._didWarmUp = !0));
                  }
                  _doWarmUp() {
                    const e = new l.IdleTaskQueue();
                    for (let t = 33; t < 126; t++)
                      e.enqueue(() => {
                        if (!this._cacheMap.get(t, d.DEFAULT_COLOR, d.DEFAULT_COLOR, d.DEFAULT_EXT)) {
                          const e = this._drawToCache(t, d.DEFAULT_COLOR, d.DEFAULT_COLOR, d.DEFAULT_EXT);
                          this._cacheMap.set(t, d.DEFAULT_COLOR, d.DEFAULT_COLOR, d.DEFAULT_EXT, e);
                        }
                      });
                  }
                  beginFrame() {
                    return this._requestClearModel;
                  }
                  clearTexture() {
                    if (0 !== this._pages[0].currentRow.x || 0 !== this._pages[0].currentRow.y) {
                      for (const e of this._pages) e.clear();
                      this._cacheMap.clear(), this._cacheMapCombined.clear(), (this._didWarmUp = !1);
                    }
                  }
                  _createNewPage() {
                    if (g.maxAtlasPages && this._pages.length >= Math.max(4, g.maxAtlasPages)) {
                      const e = this._pages
                        .filter((e) => 2 * e.canvas.width <= (g.maxTextureSize || 4096))
                        .sort((e, t) => (t.canvas.width !== e.canvas.width ? t.canvas.width - e.canvas.width : t.percentageUsed - e.percentageUsed));
                      let t = -1,
                        i = 0;
                      for (let a = 0; a < e.length; a++)
                        if (e[a].canvas.width !== i) (t = a), (i = e[a].canvas.width);
                        else if (a - t == 3) break;
                      const s = e.slice(t, t + 4),
                        r = s.map((e) => e.glyphs[0].texturePage).sort((e, t) => (e > t ? 1 : -1)),
                        o = this.pages.length - s.length,
                        n = this._mergePages(s, o);
                      n.version++;
                      for (let a = r.length - 1; a >= 0; a--) this._deletePage(r[a]);
                      this.pages.push(n), (this._requestClearModel = !0), this._onAddTextureAtlasCanvas.fire(n.canvas);
                    }
                    const e = new v(this._document, this._textureSize);
                    return this._pages.push(e), this._activePages.push(e), this._onAddTextureAtlasCanvas.fire(e.canvas), e;
                  }
                  _mergePages(e, t) {
                    const i = 2 * e[0].canvas.width,
                      s = new v(this._document, i, e);
                    for (const [r, o] of e.entries()) {
                      const e = (r * o.canvas.width) % i,
                        n = Math.floor(r / 2) * o.canvas.height;
                      s.ctx.drawImage(o.canvas, e, n);
                      for (const s of o.glyphs)
                        (s.texturePage = t),
                          (s.sizeClipSpace.x = s.size.x / i),
                          (s.sizeClipSpace.y = s.size.y / i),
                          (s.texturePosition.x += e),
                          (s.texturePosition.y += n),
                          (s.texturePositionClipSpace.x = s.texturePosition.x / i),
                          (s.texturePositionClipSpace.y = s.texturePosition.y / i);
                      this._onRemoveTextureAtlasCanvas.fire(o.canvas);
                      const a = this._activePages.indexOf(o);
                      -1 !== a && this._activePages.splice(a, 1);
                    }
                    return s;
                  }
                  _deletePage(e) {
                    this._pages.splice(e, 1);
                    for (let t = e; t < this._pages.length; t++) {
                      const e = this._pages[t];
                      for (const t of e.glyphs) t.texturePage--;
                      e.version++;
                    }
                  }
                  getRasterizedGlyphCombinedChar(e, t, i, s, r) {
                    return this._getFromCacheMap(this._cacheMapCombined, e, t, i, s, r);
                  }
                  getRasterizedGlyph(e, t, i, s, r) {
                    return this._getFromCacheMap(this._cacheMap, e, t, i, s, r);
                  }
                  _getFromCacheMap(e, t, i, s, r, o = !1) {
                    return (u = e.get(t, i, s, r)), u || ((u = this._drawToCache(t, i, s, r, o)), e.set(t, i, s, r, u)), u;
                  }
                  _getColorFromAnsiIndex(e) {
                    if (e >= this._config.colors.ansi.length) throw new Error("No color found for idx " + e);
                    return this._config.colors.ansi[e];
                  }
                  _getBackgroundColor(e, t, i, s) {
                    if (this._config.allowTransparency) return n.NULL_COLOR;
                    let r;
                    switch (e) {
                      case 16777216:
                      case 33554432:
                        r = this._getColorFromAnsiIndex(t);
                        break;
                      case 50331648:
                        const e = c.AttributeData.toColorRGB(t);
                        r = n.channels.toColor(e[0], e[1], e[2]);
                        break;
                      default:
                        r = i ? n.color.opaque(this._config.colors.foreground) : this._config.colors.background;
                    }
                    return r;
                  }
                  _getForegroundColor(e, t, i, r, o, a, h, l, d, _) {
                    const u = this._getMinimumContrastColor(e, t, i, r, o, a, h, d, l, _);
                    if (u) return u;
                    let g;
                    switch (o) {
                      case 16777216:
                      case 33554432:
                        this._config.drawBoldTextInBrightColors && d && a < 8 && (a += 8), (g = this._getColorFromAnsiIndex(a));
                        break;
                      case 50331648:
                        const e = c.AttributeData.toColorRGB(a);
                        g = n.channels.toColor(e[0], e[1], e[2]);
                        break;
                      default:
                        g = h ? this._config.colors.background : this._config.colors.foreground;
                    }
                    return this._config.allowTransparency && (g = n.color.opaque(g)), l && (g = n.color.multiplyOpacity(g, s.DIM_OPACITY)), g;
                  }
                  _resolveBackgroundRgba(e, t, i) {
                    switch (e) {
                      case 16777216:
                      case 33554432:
                        return this._getColorFromAnsiIndex(t).rgba;
                      case 50331648:
                        return t << 8;
                      default:
                        return i ? this._config.colors.foreground.rgba : this._config.colors.background.rgba;
                    }
                  }
                  _resolveForegroundRgba(e, t, i, s) {
                    switch (e) {
                      case 16777216:
                      case 33554432:
                        return this._config.drawBoldTextInBrightColors && s && t < 8 && (t += 8), this._getColorFromAnsiIndex(t).rgba;
                      case 50331648:
                        return t << 8;
                      default:
                        return i ? this._config.colors.background.rgba : this._config.colors.foreground.rgba;
                    }
                  }
                  _getMinimumContrastColor(e, t, i, s, r, o, a, h, l, c) {
                    if (1 === this._config.minimumContrastRatio || c) return;
                    const d = this._getContrastCache(l),
                      _ = d.getColor(e, s);
                    if (void 0 !== _) return _ || void 0;
                    const u = this._resolveBackgroundRgba(t, i, a),
                      g = this._resolveForegroundRgba(r, o, a, h),
                      v = n.rgba.ensureContrastRatio(u, g, this._config.minimumContrastRatio / (l ? 2 : 1));
                    if (!v) return void d.setColor(e, s, null);
                    const f = n.channels.toColor((v >> 24) & 255, (v >> 16) & 255, (v >> 8) & 255);
                    return d.setColor(e, s, f), f;
                  }
                  _getContrastCache(e) {
                    return e ? this._config.colors.halfContrastCache : this._config.colors.contrastCache;
                  }
                  _drawToCache(e, t, i, n, a = !1) {
                    const h = "number" == typeof e ? String.fromCharCode(e) : e,
                      l = Math.min(this._config.deviceCellWidth * Math.max(h.length, 2) + 4, this._textureSize);
                    this._tmpCanvas.width < l && (this._tmpCanvas.width = l);
                    const d = Math.min(this._config.deviceCellHeight + 8, this._textureSize);
                    if (
                      (this._tmpCanvas.height < d && (this._tmpCanvas.height = d),
                      this._tmpCtx.save(),
                      (this._workAttributeData.fg = i),
                      (this._workAttributeData.bg = t),
                      (this._workAttributeData.extended.ext = n),
                      this._workAttributeData.isInvisible())
                    )
                      return _;
                    const u = !!this._workAttributeData.isBold(),
                      v = !!this._workAttributeData.isInverse(),
                      p = !!this._workAttributeData.isDim(),
                      C = !!this._workAttributeData.isItalic(),
                      m = !!this._workAttributeData.isUnderline(),
                      L = !!this._workAttributeData.isStrikethrough(),
                      x = !!this._workAttributeData.isOverline();
                    let w = this._workAttributeData.getFgColor(),
                      b = this._workAttributeData.getFgColorMode(),
                      M = this._workAttributeData.getBgColor(),
                      R = this._workAttributeData.getBgColorMode();
                    if (v) {
                      const e = w;
                      (w = M), (M = e);
                      const t = b;
                      (b = R), (R = t);
                    }
                    const y = this._getBackgroundColor(R, M, v, p);
                    (this._tmpCtx.globalCompositeOperation = "copy"),
                      (this._tmpCtx.fillStyle = y.css),
                      this._tmpCtx.fillRect(0, 0, this._tmpCanvas.width, this._tmpCanvas.height),
                      (this._tmpCtx.globalCompositeOperation = "source-over");
                    const A = u ? this._config.fontWeightBold : this._config.fontWeight,
                      E = C ? "italic" : "";
                    (this._tmpCtx.font = `${E} ${A} ${this._config.fontSize * this._config.devicePixelRatio}px ${this._config.fontFamily}`),
                      (this._tmpCtx.textBaseline = s.TEXT_BASELINE);
                    const S = 1 === h.length && (0, o.isPowerlineGlyph)(h.charCodeAt(0)),
                      T = 1 === h.length && (0, o.isRestrictedPowerlineGlyph)(h.charCodeAt(0)),
                      D = this._getForegroundColor(t, R, M, i, b, w, v, p, u, (0, o.treatGlyphAsBackgroundColor)(h.charCodeAt(0)));
                    this._tmpCtx.fillStyle = D.css;
                    const B = T ? 0 : 4;
                    let F = !1;
                    !1 !== this._config.customGlyphs &&
                      (F = (0, r.tryDrawCustomChar)(
                        this._tmpCtx,
                        h,
                        B,
                        B,
                        this._config.deviceCellWidth,
                        this._config.deviceCellHeight,
                        this._config.fontSize,
                        this._config.devicePixelRatio
                      ));
                    let P,
                      I = !S;
                    if (((P = "number" == typeof e ? this._unicodeService.wcwidth(e) : this._unicodeService.getStringCellWidth(e)), m)) {
                      this._tmpCtx.save();
                      const e = Math.max(1, Math.floor((this._config.fontSize * this._config.devicePixelRatio) / 15)),
                        t = e % 2 == 1 ? 0.5 : 0;
                      if (((this._tmpCtx.lineWidth = e), this._workAttributeData.isUnderlineColorDefault()))
                        this._tmpCtx.strokeStyle = this._tmpCtx.fillStyle;
                      else if (this._workAttributeData.isUnderlineColorRGB())
                        (I = !1),
                          (this._tmpCtx.strokeStyle = `rgb(${c.AttributeData.toColorRGB(this._workAttributeData.getUnderlineColor()).join(",")})`);
                      else {
                        I = !1;
                        let e = this._workAttributeData.getUnderlineColor();
                        this._config.drawBoldTextInBrightColors && this._workAttributeData.isBold() && e < 8 && (e += 8),
                          (this._tmpCtx.strokeStyle = this._getColorFromAnsiIndex(e).css);
                      }
                      this._tmpCtx.beginPath();
                      const i = B,
                        s = Math.ceil(B + this._config.deviceCharHeight) - t - (a ? 2 * e : 0),
                        r = s + e,
                        n = s + 2 * e;
                      let l = this._workAttributeData.getUnderlineVariantOffset();
                      for (let a = 0; a < P; a++) {
                        this._tmpCtx.save();
                        const h = i + a * this._config.deviceCellWidth,
                          c = i + (a + 1) * this._config.deviceCellWidth,
                          d = h + this._config.deviceCellWidth / 2;
                        switch (this._workAttributeData.extended.underlineStyle) {
                          case 2:
                            this._tmpCtx.moveTo(h, s), this._tmpCtx.lineTo(c, s), this._tmpCtx.moveTo(h, n), this._tmpCtx.lineTo(c, n);
                            break;
                          case 3:
                            const i = e <= 1 ? n : Math.ceil(B + this._config.deviceCharHeight - e / 2) - t,
                              a = e <= 1 ? s : Math.ceil(B + this._config.deviceCharHeight + e / 2) - t,
                              _ = new Path2D();
                            _.rect(h, s, this._config.deviceCellWidth, n - s),
                              this._tmpCtx.clip(_),
                              this._tmpCtx.moveTo(h - this._config.deviceCellWidth / 2, r),
                              this._tmpCtx.bezierCurveTo(h - this._config.deviceCellWidth / 2, a, h, a, h, r),
                              this._tmpCtx.bezierCurveTo(h, i, d, i, d, r),
                              this._tmpCtx.bezierCurveTo(d, a, c, a, c, r),
                              this._tmpCtx.bezierCurveTo(c, i, c + this._config.deviceCellWidth / 2, i, c + this._config.deviceCellWidth / 2, r);
                            break;
                          case 4:
                            const u = 0 === l ? 0 : l >= e ? 2 * e - l : e - l;
                            !1 == !(l >= e) || 0 === u
                              ? (this._tmpCtx.setLineDash([Math.round(e), Math.round(e)]), this._tmpCtx.moveTo(h + u, s), this._tmpCtx.lineTo(c, s))
                              : (this._tmpCtx.setLineDash([Math.round(e), Math.round(e)]),
                                this._tmpCtx.moveTo(h, s),
                                this._tmpCtx.lineTo(h + u, s),
                                this._tmpCtx.moveTo(h + u + e, s),
                                this._tmpCtx.lineTo(c, s)),
                              (l = (0, o.computeNextVariantOffset)(c - h, e, l));
                            break;
                          case 5:
                            const g = 0.6,
                              v = 0.3,
                              f = c - h,
                              p = Math.floor(g * f),
                              C = Math.floor(v * f),
                              m = f - p - C;
                            this._tmpCtx.setLineDash([p, C, m]), this._tmpCtx.moveTo(h, s), this._tmpCtx.lineTo(c, s);
                            break;
                          default:
                            this._tmpCtx.moveTo(h, s), this._tmpCtx.lineTo(c, s);
                        }
                        this._tmpCtx.stroke(), this._tmpCtx.restore();
                      }
                      if ((this._tmpCtx.restore(), !F && this._config.fontSize >= 12 && !this._config.allowTransparency && " " !== h)) {
                        this._tmpCtx.save(), (this._tmpCtx.textBaseline = "alphabetic");
                        const t = this._tmpCtx.measureText(h);
                        if ((this._tmpCtx.restore(), "actualBoundingBoxDescent" in t && t.actualBoundingBoxDescent > 0)) {
                          this._tmpCtx.save();
                          const t = new Path2D();
                          t.rect(i, s - Math.ceil(e / 2), this._config.deviceCellWidth * P, n - s + Math.ceil(e / 2)),
                            this._tmpCtx.clip(t),
                            (this._tmpCtx.lineWidth = 3 * this._config.devicePixelRatio),
                            (this._tmpCtx.strokeStyle = y.css),
                            this._tmpCtx.strokeText(h, B, B + this._config.deviceCharHeight),
                            this._tmpCtx.restore();
                        }
                      }
                    }
                    if (x) {
                      const e = Math.max(1, Math.floor((this._config.fontSize * this._config.devicePixelRatio) / 15)),
                        t = e % 2 == 1 ? 0.5 : 0;
                      (this._tmpCtx.lineWidth = e),
                        (this._tmpCtx.strokeStyle = this._tmpCtx.fillStyle),
                        this._tmpCtx.beginPath(),
                        this._tmpCtx.moveTo(B, B + t),
                        this._tmpCtx.lineTo(B + this._config.deviceCharWidth * P, B + t),
                        this._tmpCtx.stroke();
                    }
                    if ((F || this._tmpCtx.fillText(h, B, B + this._config.deviceCharHeight), "_" === h && !this._config.allowTransparency)) {
                      let e = f(this._tmpCtx.getImageData(B, B, this._config.deviceCellWidth, this._config.deviceCellHeight), y, D, I);
                      if (e)
                        for (
                          let t = 1;
                          t <= 5 &&
                          (this._tmpCtx.save(),
                          (this._tmpCtx.fillStyle = y.css),
                          this._tmpCtx.fillRect(0, 0, this._tmpCanvas.width, this._tmpCanvas.height),
                          this._tmpCtx.restore(),
                          this._tmpCtx.fillText(h, B, B + this._config.deviceCharHeight - t),
                          (e = f(this._tmpCtx.getImageData(B, B, this._config.deviceCellWidth, this._config.deviceCellHeight), y, D, I)),
                          e);
                          t++
                        );
                    }
                    if (L) {
                      const e = Math.max(1, Math.floor((this._config.fontSize * this._config.devicePixelRatio) / 10)),
                        t = this._tmpCtx.lineWidth % 2 == 1 ? 0.5 : 0;
                      (this._tmpCtx.lineWidth = e),
                        (this._tmpCtx.strokeStyle = this._tmpCtx.fillStyle),
                        this._tmpCtx.beginPath(),
                        this._tmpCtx.moveTo(B, B + Math.floor(this._config.deviceCharHeight / 2) - t),
                        this._tmpCtx.lineTo(B + this._config.deviceCharWidth * P, B + Math.floor(this._config.deviceCharHeight / 2) - t),
                        this._tmpCtx.stroke();
                    }
                    this._tmpCtx.restore();
                    const O = this._tmpCtx.getImageData(0, 0, this._tmpCanvas.width, this._tmpCanvas.height);
                    let k;
                    if (
                      ((k = this._config.allowTransparency
                        ? (function (e) {
                            for (let t = 0; t < e.data.length; t += 4) if (e.data[t + 3] > 0) return !1;
                            return !0;
                          })(O)
                        : f(O, y, D, I)),
                      k)
                    )
                      return _;
                    const $ = this._findGlyphBoundingBox(O, this._workBoundingBox, l, T, F, B);
                    let U, N;
                    for (;;) {
                      if (0 === this._activePages.length) {
                        const e = this._createNewPage();
                        (U = e), (N = e.currentRow), (N.height = $.size.y);
                        break;
                      }
                      (U = this._activePages[this._activePages.length - 1]), (N = U.currentRow);
                      for (const e of this._activePages) $.size.y <= e.currentRow.height && ((U = e), (N = e.currentRow));
                      for (let e = this._activePages.length - 1; e >= 0; e--)
                        for (const t of this._activePages[e].fixedRows)
                          t.height <= N.height && $.size.y <= t.height && ((U = this._activePages[e]), (N = t));
                      if (N.y + $.size.y >= U.canvas.height || N.height > $.size.y + 2) {
                        let e = !1;
                        if (U.currentRow.y + U.currentRow.height + $.size.y >= U.canvas.height) {
                          let t;
                          for (const e of this._activePages)
                            if (e.currentRow.y + e.currentRow.height + $.size.y < e.canvas.height) {
                              t = e;
                              break;
                            }
                          if (t) U = t;
                          else if (
                            g.maxAtlasPages &&
                            this._pages.length >= g.maxAtlasPages &&
                            N.y + $.size.y <= U.canvas.height &&
                            N.height >= $.size.y &&
                            N.x + $.size.x <= U.canvas.width
                          )
                            e = !0;
                          else {
                            const t = this._createNewPage();
                            (U = t), (N = t.currentRow), (N.height = $.size.y), (e = !0);
                          }
                        }
                        e ||
                          (U.currentRow.height > 0 && U.fixedRows.push(U.currentRow),
                          (N = { x: 0, y: U.currentRow.y + U.currentRow.height, height: $.size.y }),
                          U.fixedRows.push(N),
                          (U.currentRow = { x: 0, y: N.y + N.height, height: 0 }));
                      }
                      if (N.x + $.size.x <= U.canvas.width) break;
                      N === U.currentRow ? ((N.x = 0), (N.y += N.height), (N.height = 0)) : U.fixedRows.splice(U.fixedRows.indexOf(N), 1);
                    }
                    return (
                      ($.texturePage = this._pages.indexOf(U)),
                      ($.texturePosition.x = N.x),
                      ($.texturePosition.y = N.y),
                      ($.texturePositionClipSpace.x = N.x / U.canvas.width),
                      ($.texturePositionClipSpace.y = N.y / U.canvas.height),
                      ($.sizeClipSpace.x /= U.canvas.width),
                      ($.sizeClipSpace.y /= U.canvas.height),
                      (N.height = Math.max(N.height, $.size.y)),
                      (N.x += $.size.x),
                      U.ctx.putImageData(
                        O,
                        $.texturePosition.x - this._workBoundingBox.left,
                        $.texturePosition.y - this._workBoundingBox.top,
                        this._workBoundingBox.left,
                        this._workBoundingBox.top,
                        $.size.x,
                        $.size.y
                      ),
                      U.addGlyph($),
                      U.version++,
                      $
                    );
                  }
                  _findGlyphBoundingBox(e, t, i, s, r, o) {
                    t.top = 0;
                    const n = s ? this._config.deviceCellHeight : this._tmpCanvas.height,
                      a = s ? this._config.deviceCellWidth : i;
                    let h = !1;
                    for (let l = 0; l < n; l++) {
                      for (let i = 0; i < a; i++) {
                        const s = l * this._tmpCanvas.width * 4 + 4 * i + 3;
                        if (0 !== e.data[s]) {
                          (t.top = l), (h = !0);
                          break;
                        }
                      }
                      if (h) break;
                    }
                    (t.left = 0), (h = !1);
                    for (let l = 0; l < o + a; l++) {
                      for (let i = 0; i < n; i++) {
                        const s = i * this._tmpCanvas.width * 4 + 4 * l + 3;
                        if (0 !== e.data[s]) {
                          (t.left = l), (h = !0);
                          break;
                        }
                      }
                      if (h) break;
                    }
                    (t.right = a), (h = !1);
                    for (let l = o + a - 1; l >= o; l--) {
                      for (let i = 0; i < n; i++) {
                        const s = i * this._tmpCanvas.width * 4 + 4 * l + 3;
                        if (0 !== e.data[s]) {
                          (t.right = l), (h = !0);
                          break;
                        }
                      }
                      if (h) break;
                    }
                    (t.bottom = n), (h = !1);
                    for (let l = n - 1; l >= 0; l--) {
                      for (let i = 0; i < a; i++) {
                        const s = l * this._tmpCanvas.width * 4 + 4 * i + 3;
                        if (0 !== e.data[s]) {
                          (t.bottom = l), (h = !0);
                          break;
                        }
                      }
                      if (h) break;
                    }
                    return {
                      texturePage: 0,
                      texturePosition: { x: 0, y: 0 },
                      texturePositionClipSpace: { x: 0, y: 0 },
                      size: { x: t.right - t.left + 1, y: t.bottom - t.top + 1 },
                      sizeClipSpace: { x: t.right - t.left + 1, y: t.bottom - t.top + 1 },
                      offset: {
                        x: -t.left + o + (s || r ? Math.floor((this._config.deviceCellWidth - this._config.deviceCharWidth) / 2) : 0),
                        y:
                          -t.top +
                          o +
                          (s || r
                            ? 1 === this._config.lineHeight
                              ? 0
                              : Math.round((this._config.deviceCellHeight - this._config.deviceCharHeight) / 2)
                            : 0),
                      },
                    };
                  }
                }
                t.TextureAtlas = g;
                class v {
                  get percentageUsed() {
                    return this._usedPixels / (this.canvas.width * this.canvas.height);
                  }
                  get glyphs() {
                    return this._glyphs;
                  }
                  addGlyph(e) {
                    this._glyphs.push(e), (this._usedPixels += e.size.x * e.size.y);
                  }
                  constructor(e, t, i) {
                    if (
                      ((this._usedPixels = 0),
                      (this._glyphs = []),
                      (this.version = 0),
                      (this.currentRow = { x: 0, y: 0, height: 0 }),
                      (this.fixedRows = []),
                      i)
                    )
                      for (const s of i) this._glyphs.push(...s.glyphs), (this._usedPixels += s._usedPixels);
                    (this.canvas = p(e, t, t)), (this.ctx = (0, o.throwIfFalsy)(this.canvas.getContext("2d", { alpha: !0 })));
                  }
                  clear() {
                    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height),
                      (this.currentRow.x = 0),
                      (this.currentRow.y = 0),
                      (this.currentRow.height = 0),
                      (this.fixedRows.length = 0),
                      this.version++;
                  }
                }
                function f(e, t, i, s) {
                  const r = t.rgba >>> 24,
                    o = (t.rgba >>> 16) & 255,
                    n = (t.rgba >>> 8) & 255,
                    a = i.rgba >>> 24,
                    h = (i.rgba >>> 16) & 255,
                    l = (i.rgba >>> 8) & 255,
                    c = Math.floor((Math.abs(r - a) + Math.abs(o - h) + Math.abs(n - l)) / 12);
                  let d = !0;
                  for (let _ = 0; _ < e.data.length; _ += 4)
                    (e.data[_] === r && e.data[_ + 1] === o && e.data[_ + 2] === n) ||
                    (s && Math.abs(e.data[_] - r) + Math.abs(e.data[_ + 1] - o) + Math.abs(e.data[_ + 2] - n) < c)
                      ? (e.data[_ + 3] = 0)
                      : (d = !1);
                  return d;
                }
                function p(e, t, i) {
                  const s = e.createElement("canvas");
                  return (s.width = t), (s.height = i), s;
                }
              },
              160: (e, t) => {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.contrastRatio = t.toPaddedHex = t.rgba = t.rgb = t.css = t.color = t.channels = t.NULL_COLOR = void 0);
                let i = 0,
                  s = 0,
                  r = 0,
                  o = 0;
                var n, a, h, l, c;
                function d(e) {
                  const t = e.toString(16);
                  return t.length < 2 ? "0" + t : t;
                }
                function _(e, t) {
                  return e < t ? (t + 0.05) / (e + 0.05) : (e + 0.05) / (t + 0.05);
                }
                (t.NULL_COLOR = { css: "#00000000", rgba: 0 }),
                  (function (e) {
                    (e.toCss = function (e, t, i, s) {
                      return void 0 !== s ? `#${d(e)}${d(t)}${d(i)}${d(s)}` : `#${d(e)}${d(t)}${d(i)}`;
                    }),
                      (e.toRgba = function (e, t, i, s = 255) {
                        return ((e << 24) | (t << 16) | (i << 8) | s) >>> 0;
                      }),
                      (e.toColor = function (t, i, s, r) {
                        return { css: e.toCss(t, i, s, r), rgba: e.toRgba(t, i, s, r) };
                      });
                  })(n || (t.channels = n = {})),
                  (function (e) {
                    function t(e, t) {
                      return (o = Math.round(255 * t)), ([i, s, r] = c.toChannels(e.rgba)), { css: n.toCss(i, s, r, o), rgba: n.toRgba(i, s, r, o) };
                    }
                    (e.blend = function (e, t) {
                      if (((o = (255 & t.rgba) / 255), 1 === o)) return { css: t.css, rgba: t.rgba };
                      const a = (t.rgba >> 24) & 255,
                        h = (t.rgba >> 16) & 255,
                        l = (t.rgba >> 8) & 255,
                        c = (e.rgba >> 24) & 255,
                        d = (e.rgba >> 16) & 255,
                        _ = (e.rgba >> 8) & 255;
                      return (
                        (i = c + Math.round((a - c) * o)),
                        (s = d + Math.round((h - d) * o)),
                        (r = _ + Math.round((l - _) * o)),
                        { css: n.toCss(i, s, r), rgba: n.toRgba(i, s, r) }
                      );
                    }),
                      (e.isOpaque = function (e) {
                        return 255 == (255 & e.rgba);
                      }),
                      (e.ensureContrastRatio = function (e, t, i) {
                        const s = c.ensureContrastRatio(e.rgba, t.rgba, i);
                        if (s) return n.toColor((s >> 24) & 255, (s >> 16) & 255, (s >> 8) & 255);
                      }),
                      (e.opaque = function (e) {
                        const t = (255 | e.rgba) >>> 0;
                        return ([i, s, r] = c.toChannels(t)), { css: n.toCss(i, s, r), rgba: t };
                      }),
                      (e.opacity = t),
                      (e.multiplyOpacity = function (e, i) {
                        return (o = 255 & e.rgba), t(e, (o * i) / 255);
                      }),
                      (e.toColorRGB = function (e) {
                        return [(e.rgba >> 24) & 255, (e.rgba >> 16) & 255, (e.rgba >> 8) & 255];
                      });
                  })(a || (t.color = a = {})),
                  (function (e) {
                    let t, a;
                    try {
                      const e = document.createElement("canvas");
                      (e.width = 1), (e.height = 1);
                      const i = e.getContext("2d", { willReadFrequently: !0 });
                      i && ((t = i), (t.globalCompositeOperation = "copy"), (a = t.createLinearGradient(0, 0, 1, 1)));
                    } catch {}
                    e.toColor = function (e) {
                      if (e.match(/#[\da-f]{3,8}/i))
                        switch (e.length) {
                          case 4:
                            return (
                              (i = parseInt(e.slice(1, 2).repeat(2), 16)),
                              (s = parseInt(e.slice(2, 3).repeat(2), 16)),
                              (r = parseInt(e.slice(3, 4).repeat(2), 16)),
                              n.toColor(i, s, r)
                            );
                          case 5:
                            return (
                              (i = parseInt(e.slice(1, 2).repeat(2), 16)),
                              (s = parseInt(e.slice(2, 3).repeat(2), 16)),
                              (r = parseInt(e.slice(3, 4).repeat(2), 16)),
                              (o = parseInt(e.slice(4, 5).repeat(2), 16)),
                              n.toColor(i, s, r, o)
                            );
                          case 7:
                            return { css: e, rgba: ((parseInt(e.slice(1), 16) << 8) | 255) >>> 0 };
                          case 9:
                            return { css: e, rgba: parseInt(e.slice(1), 16) >>> 0 };
                        }
                      const h = e.match(/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(,\s*(0|1|\d?\.(\d+))\s*)?\)/);
                      if (h)
                        return (
                          (i = parseInt(h[1])),
                          (s = parseInt(h[2])),
                          (r = parseInt(h[3])),
                          (o = Math.round(255 * (void 0 === h[5] ? 1 : parseFloat(h[5])))),
                          n.toColor(i, s, r, o)
                        );
                      if (!t || !a) throw new Error("css.toColor: Unsupported css format");
                      if (((t.fillStyle = a), (t.fillStyle = e), "string" != typeof t.fillStyle))
                        throw new Error("css.toColor: Unsupported css format");
                      if ((t.fillRect(0, 0, 1, 1), ([i, s, r, o] = t.getImageData(0, 0, 1, 1).data), 255 !== o))
                        throw new Error("css.toColor: Unsupported css format");
                      return { rgba: n.toRgba(i, s, r, o), css: e };
                    };
                  })(h || (t.css = h = {})),
                  (function (e) {
                    function t(e, t, i) {
                      const s = e / 255,
                        r = t / 255,
                        o = i / 255;
                      return (
                        0.2126 * (s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4)) +
                        0.7152 * (r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4)) +
                        0.0722 * (o <= 0.03928 ? o / 12.92 : Math.pow((o + 0.055) / 1.055, 2.4))
                      );
                    }
                    (e.relativeLuminance = function (e) {
                      return t((e >> 16) & 255, (e >> 8) & 255, 255 & e);
                    }),
                      (e.relativeLuminance2 = t);
                  })(l || (t.rgb = l = {})),
                  (function (e) {
                    function t(e, t, i) {
                      const s = (e >> 24) & 255,
                        r = (e >> 16) & 255,
                        o = (e >> 8) & 255;
                      let n = (t >> 24) & 255,
                        a = (t >> 16) & 255,
                        h = (t >> 8) & 255,
                        c = _(l.relativeLuminance2(n, a, h), l.relativeLuminance2(s, r, o));
                      for (; c < i && (n > 0 || a > 0 || h > 0); )
                        (n -= Math.max(0, Math.ceil(0.1 * n))),
                          (a -= Math.max(0, Math.ceil(0.1 * a))),
                          (h -= Math.max(0, Math.ceil(0.1 * h))),
                          (c = _(l.relativeLuminance2(n, a, h), l.relativeLuminance2(s, r, o)));
                      return ((n << 24) | (a << 16) | (h << 8) | 255) >>> 0;
                    }
                    function a(e, t, i) {
                      const s = (e >> 24) & 255,
                        r = (e >> 16) & 255,
                        o = (e >> 8) & 255;
                      let n = (t >> 24) & 255,
                        a = (t >> 16) & 255,
                        h = (t >> 8) & 255,
                        c = _(l.relativeLuminance2(n, a, h), l.relativeLuminance2(s, r, o));
                      for (; c < i && (n < 255 || a < 255 || h < 255); )
                        (n = Math.min(255, n + Math.ceil(0.1 * (255 - n)))),
                          (a = Math.min(255, a + Math.ceil(0.1 * (255 - a)))),
                          (h = Math.min(255, h + Math.ceil(0.1 * (255 - h)))),
                          (c = _(l.relativeLuminance2(n, a, h), l.relativeLuminance2(s, r, o)));
                      return ((n << 24) | (a << 16) | (h << 8) | 255) >>> 0;
                    }
                    (e.blend = function (e, t) {
                      if (((o = (255 & t) / 255), 1 === o)) return t;
                      const a = (t >> 24) & 255,
                        h = (t >> 16) & 255,
                        l = (t >> 8) & 255,
                        c = (e >> 24) & 255,
                        d = (e >> 16) & 255,
                        _ = (e >> 8) & 255;
                      return (
                        (i = c + Math.round((a - c) * o)), (s = d + Math.round((h - d) * o)), (r = _ + Math.round((l - _) * o)), n.toRgba(i, s, r)
                      );
                    }),
                      (e.ensureContrastRatio = function (e, i, s) {
                        const r = l.relativeLuminance(e >> 8),
                          o = l.relativeLuminance(i >> 8);
                        if (_(r, o) < s) {
                          if (o < r) {
                            const o = t(e, i, s),
                              n = _(r, l.relativeLuminance(o >> 8));
                            if (n < s) {
                              const t = a(e, i, s);
                              return n > _(r, l.relativeLuminance(t >> 8)) ? o : t;
                            }
                            return o;
                          }
                          const n = a(e, i, s),
                            h = _(r, l.relativeLuminance(n >> 8));
                          if (h < s) {
                            const o = t(e, i, s);
                            return h > _(r, l.relativeLuminance(o >> 8)) ? n : o;
                          }
                          return n;
                        }
                      }),
                      (e.reduceLuminance = t),
                      (e.increaseLuminance = a),
                      (e.toChannels = function (e) {
                        return [(e >> 24) & 255, (e >> 16) & 255, (e >> 8) & 255, 255 & e];
                      });
                  })(c || (t.rgba = c = {})),
                  (t.toPaddedHex = d),
                  (t.contrastRatio = _);
              },
              345: (e, t) => {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.runAndSubscribe = t.forwardEvent = t.EventEmitter = void 0),
                  (t.EventEmitter = class {
                    constructor() {
                      (this._listeners = []), (this._disposed = !1);
                    }
                    get event() {
                      return (
                        this._event ||
                          (this._event = (e) => (
                            this._listeners.push(e),
                            {
                              dispose: () => {
                                if (!this._disposed)
                                  for (let t = 0; t < this._listeners.length; t++)
                                    if (this._listeners[t] === e) return void this._listeners.splice(t, 1);
                              },
                            }
                          )),
                        this._event
                      );
                    }
                    fire(e, t) {
                      const i = [];
                      for (let s = 0; s < this._listeners.length; s++) i.push(this._listeners[s]);
                      for (let s = 0; s < i.length; s++) i[s].call(void 0, e, t);
                    }
                    dispose() {
                      this.clearListeners(), (this._disposed = !0);
                    }
                    clearListeners() {
                      this._listeners && (this._listeners.length = 0);
                    }
                  }),
                  (t.forwardEvent = function (e, t) {
                    return e((e) => t.fire(e));
                  }),
                  (t.runAndSubscribe = function (e, t) {
                    return t(void 0), e((e) => t(e));
                  });
              },
              859: (e, t) => {
                function i(e) {
                  for (const t of e) t.dispose();
                  e.length = 0;
                }
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.getDisposeArrayDisposable = t.disposeArray = t.toDisposable = t.MutableDisposable = t.Disposable = void 0),
                  (t.Disposable = class {
                    constructor() {
                      (this._disposables = []), (this._isDisposed = !1);
                    }
                    dispose() {
                      this._isDisposed = !0;
                      for (const e of this._disposables) e.dispose();
                      this._disposables.length = 0;
                    }
                    register(e) {
                      return this._disposables.push(e), e;
                    }
                    unregister(e) {
                      const t = this._disposables.indexOf(e);
                      -1 !== t && this._disposables.splice(t, 1);
                    }
                  }),
                  (t.MutableDisposable = class {
                    constructor() {
                      this._isDisposed = !1;
                    }
                    get value() {
                      return this._isDisposed ? void 0 : this._value;
                    }
                    set value(e) {
                      this._isDisposed || e === this._value || (this._value?.dispose(), (this._value = e));
                    }
                    clear() {
                      this.value = void 0;
                    }
                    dispose() {
                      (this._isDisposed = !0), this._value?.dispose(), (this._value = void 0);
                    }
                  }),
                  (t.toDisposable = function (e) {
                    return { dispose: e };
                  }),
                  (t.disposeArray = i),
                  (t.getDisposeArrayDisposable = function (e) {
                    return { dispose: () => i(e) };
                  });
              },
              485: (e, t) => {
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.FourKeyMap = t.TwoKeyMap = void 0);
                class i {
                  constructor() {
                    this._data = {};
                  }
                  set(e, t, i) {
                    this._data[e] || (this._data[e] = {}), (this._data[e][t] = i);
                  }
                  get(e, t) {
                    return this._data[e] ? this._data[e][t] : void 0;
                  }
                  clear() {
                    this._data = {};
                  }
                }
                (t.TwoKeyMap = i),
                  (t.FourKeyMap = class {
                    constructor() {
                      this._data = new i();
                    }
                    set(e, t, s, r, o) {
                      this._data.get(e, t) || this._data.set(e, t, new i()), this._data.get(e, t).set(s, r, o);
                    }
                    get(e, t, i, s) {
                      return this._data.get(e, t)?.get(i, s);
                    }
                    clear() {
                      this._data.clear();
                    }
                  });
              },
              399: (e, t) => {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.isChromeOS =
                    t.isLinux =
                    t.isWindows =
                    t.isIphone =
                    t.isIpad =
                    t.isMac =
                    t.getSafariVersion =
                    t.isSafari =
                    t.isLegacyEdge =
                    t.isFirefox =
                    t.isNode =
                      void 0),
                  (t.isNode = "undefined" != typeof s && "title" in s);
                const i = t.isNode ? "node" : navigator.userAgent,
                  r = t.isNode ? "node" : navigator.platform;
                (t.isFirefox = i.includes("Firefox")),
                  (t.isLegacyEdge = i.includes("Edge")),
                  (t.isSafari = /^((?!chrome|android).)*safari/i.test(i)),
                  (t.getSafariVersion = function () {
                    if (!t.isSafari) return 0;
                    const e = i.match(/Version\/(\d+)/);
                    return null === e || e.length < 2 ? 0 : parseInt(e[1]);
                  }),
                  (t.isMac = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"].includes(r)),
                  (t.isIpad = "iPad" === r),
                  (t.isIphone = "iPhone" === r),
                  (t.isWindows = ["Windows", "Win16", "Win32", "WinCE"].includes(r)),
                  (t.isLinux = r.indexOf("Linux") >= 0),
                  (t.isChromeOS = /\bCrOS\b/.test(i));
              },
              385: (e, t, i) => {
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.DebouncedIdleTask = t.IdleTaskQueue = t.PriorityTaskQueue = void 0);
                const s = i(399);
                class r {
                  constructor() {
                    (this._tasks = []), (this._i = 0);
                  }
                  enqueue(e) {
                    this._tasks.push(e), this._start();
                  }
                  flush() {
                    for (; this._i < this._tasks.length; ) this._tasks[this._i]() || this._i++;
                    this.clear();
                  }
                  clear() {
                    this._idleCallback && (this._cancelCallback(this._idleCallback), (this._idleCallback = void 0)),
                      (this._i = 0),
                      (this._tasks.length = 0);
                  }
                  _start() {
                    this._idleCallback || (this._idleCallback = this._requestCallback(this._process.bind(this)));
                  }
                  _process(e) {
                    this._idleCallback = void 0;
                    let t = 0,
                      i = 0,
                      s = e.timeRemaining(),
                      r = 0;
                    for (; this._i < this._tasks.length; ) {
                      if (
                        ((t = Date.now()),
                        this._tasks[this._i]() || this._i++,
                        (t = Math.max(1, Date.now() - t)),
                        (i = Math.max(t, i)),
                        (r = e.timeRemaining()),
                        1.5 * i > r)
                      )
                        return (
                          s - t < -20 && console.warn(`task queue exceeded allotted deadline by ${Math.abs(Math.round(s - t))}ms`), void this._start()
                        );
                      s = r;
                    }
                    this.clear();
                  }
                }
                class o extends r {
                  _requestCallback(e) {
                    return setTimeout(() => e(this._createDeadline(16)));
                  }
                  _cancelCallback(e) {
                    clearTimeout(e);
                  }
                  _createDeadline(e) {
                    const t = Date.now() + e;
                    return { timeRemaining: () => Math.max(0, t - Date.now()) };
                  }
                }
                (t.PriorityTaskQueue = o),
                  (t.IdleTaskQueue =
                    !s.isNode && "requestIdleCallback" in window
                      ? class extends r {
                          _requestCallback(e) {
                            return requestIdleCallback(e);
                          }
                          _cancelCallback(e) {
                            cancelIdleCallback(e);
                          }
                        }
                      : o),
                  (t.DebouncedIdleTask = class {
                    constructor() {
                      this._queue = new t.IdleTaskQueue();
                    }
                    set(e) {
                      this._queue.clear(), this._queue.enqueue(e);
                    }
                    flush() {
                      this._queue.flush();
                    }
                  });
              },
              147: (e, t) => {
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.ExtendedAttrs = t.AttributeData = void 0);
                class i {
                  constructor() {
                    (this.fg = 0), (this.bg = 0), (this.extended = new s());
                  }
                  static toColorRGB(e) {
                    return [(e >>> 16) & 255, (e >>> 8) & 255, 255 & e];
                  }
                  static fromColorRGB(e) {
                    return ((255 & e[0]) << 16) | ((255 & e[1]) << 8) | (255 & e[2]);
                  }
                  clone() {
                    const e = new i();
                    return (e.fg = this.fg), (e.bg = this.bg), (e.extended = this.extended.clone()), e;
                  }
                  isInverse() {
                    return 67108864 & this.fg;
                  }
                  isBold() {
                    return 134217728 & this.fg;
                  }
                  isUnderline() {
                    return this.hasExtendedAttrs() && 0 !== this.extended.underlineStyle ? 1 : 268435456 & this.fg;
                  }
                  isBlink() {
                    return 536870912 & this.fg;
                  }
                  isInvisible() {
                    return 1073741824 & this.fg;
                  }
                  isItalic() {
                    return 67108864 & this.bg;
                  }
                  isDim() {
                    return 134217728 & this.bg;
                  }
                  isStrikethrough() {
                    return 2147483648 & this.fg;
                  }
                  isProtected() {
                    return 536870912 & this.bg;
                  }
                  isOverline() {
                    return 1073741824 & this.bg;
                  }
                  getFgColorMode() {
                    return 50331648 & this.fg;
                  }
                  getBgColorMode() {
                    return 50331648 & this.bg;
                  }
                  isFgRGB() {
                    return 50331648 == (50331648 & this.fg);
                  }
                  isBgRGB() {
                    return 50331648 == (50331648 & this.bg);
                  }
                  isFgPalette() {
                    return 16777216 == (50331648 & this.fg) || 33554432 == (50331648 & this.fg);
                  }
                  isBgPalette() {
                    return 16777216 == (50331648 & this.bg) || 33554432 == (50331648 & this.bg);
                  }
                  isFgDefault() {
                    return 0 == (50331648 & this.fg);
                  }
                  isBgDefault() {
                    return 0 == (50331648 & this.bg);
                  }
                  isAttributeDefault() {
                    return 0 === this.fg && 0 === this.bg;
                  }
                  getFgColor() {
                    switch (50331648 & this.fg) {
                      case 16777216:
                      case 33554432:
                        return 255 & this.fg;
                      case 50331648:
                        return 16777215 & this.fg;
                      default:
                        return -1;
                    }
                  }
                  getBgColor() {
                    switch (50331648 & this.bg) {
                      case 16777216:
                      case 33554432:
                        return 255 & this.bg;
                      case 50331648:
                        return 16777215 & this.bg;
                      default:
                        return -1;
                    }
                  }
                  hasExtendedAttrs() {
                    return 268435456 & this.bg;
                  }
                  updateExtended() {
                    this.extended.isEmpty() ? (this.bg &= -268435457) : (this.bg |= 268435456);
                  }
                  getUnderlineColor() {
                    if (268435456 & this.bg && ~this.extended.underlineColor)
                      switch (50331648 & this.extended.underlineColor) {
                        case 16777216:
                        case 33554432:
                          return 255 & this.extended.underlineColor;
                        case 50331648:
                          return 16777215 & this.extended.underlineColor;
                        default:
                          return this.getFgColor();
                      }
                    return this.getFgColor();
                  }
                  getUnderlineColorMode() {
                    return 268435456 & this.bg && ~this.extended.underlineColor ? 50331648 & this.extended.underlineColor : this.getFgColorMode();
                  }
                  isUnderlineColorRGB() {
                    return 268435456 & this.bg && ~this.extended.underlineColor
                      ? 50331648 == (50331648 & this.extended.underlineColor)
                      : this.isFgRGB();
                  }
                  isUnderlineColorPalette() {
                    return 268435456 & this.bg && ~this.extended.underlineColor
                      ? 16777216 == (50331648 & this.extended.underlineColor) || 33554432 == (50331648 & this.extended.underlineColor)
                      : this.isFgPalette();
                  }
                  isUnderlineColorDefault() {
                    return 268435456 & this.bg && ~this.extended.underlineColor ? 0 == (50331648 & this.extended.underlineColor) : this.isFgDefault();
                  }
                  getUnderlineStyle() {
                    return 268435456 & this.fg ? (268435456 & this.bg ? this.extended.underlineStyle : 1) : 0;
                  }
                  getUnderlineVariantOffset() {
                    return this.extended.underlineVariantOffset;
                  }
                }
                t.AttributeData = i;
                class s {
                  get ext() {
                    return this._urlId ? (-469762049 & this._ext) | (this.underlineStyle << 26) : this._ext;
                  }
                  set ext(e) {
                    this._ext = e;
                  }
                  get underlineStyle() {
                    return this._urlId ? 5 : (469762048 & this._ext) >> 26;
                  }
                  set underlineStyle(e) {
                    (this._ext &= -469762049), (this._ext |= (e << 26) & 469762048);
                  }
                  get underlineColor() {
                    return 67108863 & this._ext;
                  }
                  set underlineColor(e) {
                    (this._ext &= -67108864), (this._ext |= 67108863 & e);
                  }
                  get urlId() {
                    return this._urlId;
                  }
                  set urlId(e) {
                    this._urlId = e;
                  }
                  get underlineVariantOffset() {
                    const e = (3758096384 & this._ext) >> 29;
                    return e < 0 ? 4294967288 ^ e : e;
                  }
                  set underlineVariantOffset(e) {
                    (this._ext &= 536870911), (this._ext |= (e << 29) & 3758096384);
                  }
                  constructor(e = 0, t = 0) {
                    (this._ext = 0), (this._urlId = 0), (this._ext = e), (this._urlId = t);
                  }
                  clone() {
                    return new s(this._ext, this._urlId);
                  }
                  isEmpty() {
                    return 0 === this.underlineStyle && 0 === this._urlId;
                  }
                }
                t.ExtendedAttrs = s;
              },
              782: (e, t, i) => {
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.CellData = void 0);
                const s = i(133),
                  r = i(855),
                  o = i(147);
                class n extends o.AttributeData {
                  constructor() {
                    super(...arguments),
                      (this.content = 0),
                      (this.fg = 0),
                      (this.bg = 0),
                      (this.extended = new o.ExtendedAttrs()),
                      (this.combinedData = "");
                  }
                  static fromCharData(e) {
                    const t = new n();
                    return t.setFromCharData(e), t;
                  }
                  isCombined() {
                    return 2097152 & this.content;
                  }
                  getWidth() {
                    return this.content >> 22;
                  }
                  getChars() {
                    return 2097152 & this.content
                      ? this.combinedData
                      : 2097151 & this.content
                        ? (0, s.stringFromCodePoint)(2097151 & this.content)
                        : "";
                  }
                  getCode() {
                    return this.isCombined() ? this.combinedData.charCodeAt(this.combinedData.length - 1) : 2097151 & this.content;
                  }
                  setFromCharData(e) {
                    (this.fg = e[r.CHAR_DATA_ATTR_INDEX]), (this.bg = 0);
                    let t = !1;
                    if (e[r.CHAR_DATA_CHAR_INDEX].length > 2) t = !0;
                    else if (2 === e[r.CHAR_DATA_CHAR_INDEX].length) {
                      const i = e[r.CHAR_DATA_CHAR_INDEX].charCodeAt(0);
                      if (55296 <= i && i <= 56319) {
                        const s = e[r.CHAR_DATA_CHAR_INDEX].charCodeAt(1);
                        56320 <= s && s <= 57343
                          ? (this.content = (1024 * (i - 55296) + s - 56320 + 65536) | (e[r.CHAR_DATA_WIDTH_INDEX] << 22))
                          : (t = !0);
                      } else t = !0;
                    } else this.content = e[r.CHAR_DATA_CHAR_INDEX].charCodeAt(0) | (e[r.CHAR_DATA_WIDTH_INDEX] << 22);
                    t && ((this.combinedData = e[r.CHAR_DATA_CHAR_INDEX]), (this.content = 2097152 | (e[r.CHAR_DATA_WIDTH_INDEX] << 22)));
                  }
                  getAsCharData() {
                    return [this.fg, this.getChars(), this.getWidth(), this.getCode()];
                  }
                }
                t.CellData = n;
              },
              855: (e, t) => {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.WHITESPACE_CELL_CODE =
                    t.WHITESPACE_CELL_WIDTH =
                    t.WHITESPACE_CELL_CHAR =
                    t.NULL_CELL_CODE =
                    t.NULL_CELL_WIDTH =
                    t.NULL_CELL_CHAR =
                    t.CHAR_DATA_CODE_INDEX =
                    t.CHAR_DATA_WIDTH_INDEX =
                    t.CHAR_DATA_CHAR_INDEX =
                    t.CHAR_DATA_ATTR_INDEX =
                    t.DEFAULT_EXT =
                    t.DEFAULT_ATTR =
                    t.DEFAULT_COLOR =
                      void 0),
                  (t.DEFAULT_COLOR = 0),
                  (t.DEFAULT_ATTR = 256 | (t.DEFAULT_COLOR << 9)),
                  (t.DEFAULT_EXT = 0),
                  (t.CHAR_DATA_ATTR_INDEX = 0),
                  (t.CHAR_DATA_CHAR_INDEX = 1),
                  (t.CHAR_DATA_WIDTH_INDEX = 2),
                  (t.CHAR_DATA_CODE_INDEX = 3),
                  (t.NULL_CELL_CHAR = ""),
                  (t.NULL_CELL_WIDTH = 1),
                  (t.NULL_CELL_CODE = 0),
                  (t.WHITESPACE_CELL_CHAR = " "),
                  (t.WHITESPACE_CELL_WIDTH = 1),
                  (t.WHITESPACE_CELL_CODE = 32);
              },
              133: (e, t) => {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.Utf8ToUtf32 = t.StringToUtf32 = t.utf32ToString = t.stringFromCodePoint = void 0),
                  (t.stringFromCodePoint = function (e) {
                    return e > 65535
                      ? ((e -= 65536), String.fromCharCode(55296 + (e >> 10)) + String.fromCharCode((e % 1024) + 56320))
                      : String.fromCharCode(e);
                  }),
                  (t.utf32ToString = function (e, t = 0, i = e.length) {
                    let s = "";
                    for (let r = t; r < i; ++r) {
                      let t = e[r];
                      t > 65535
                        ? ((t -= 65536), (s += String.fromCharCode(55296 + (t >> 10)) + String.fromCharCode((t % 1024) + 56320)))
                        : (s += String.fromCharCode(t));
                    }
                    return s;
                  }),
                  (t.StringToUtf32 = class {
                    constructor() {
                      this._interim = 0;
                    }
                    clear() {
                      this._interim = 0;
                    }
                    decode(e, t) {
                      const i = e.length;
                      if (!i) return 0;
                      let s = 0,
                        r = 0;
                      if (this._interim) {
                        const i = e.charCodeAt(r++);
                        56320 <= i && i <= 57343
                          ? (t[s++] = 1024 * (this._interim - 55296) + i - 56320 + 65536)
                          : ((t[s++] = this._interim), (t[s++] = i)),
                          (this._interim = 0);
                      }
                      for (let o = r; o < i; ++o) {
                        const r = e.charCodeAt(o);
                        if (55296 <= r && r <= 56319) {
                          if (++o >= i) return (this._interim = r), s;
                          const n = e.charCodeAt(o);
                          56320 <= n && n <= 57343 ? (t[s++] = 1024 * (r - 55296) + n - 56320 + 65536) : ((t[s++] = r), (t[s++] = n));
                        } else 65279 !== r && (t[s++] = r);
                      }
                      return s;
                    }
                  }),
                  (t.Utf8ToUtf32 = class {
                    constructor() {
                      this.interim = new Uint8Array(3);
                    }
                    clear() {
                      this.interim.fill(0);
                    }
                    decode(e, t) {
                      const i = e.length;
                      if (!i) return 0;
                      let s,
                        r,
                        o,
                        n,
                        a = 0,
                        h = 0,
                        l = 0;
                      if (this.interim[0]) {
                        let s = !1,
                          r = this.interim[0];
                        r &= 192 == (224 & r) ? 31 : 224 == (240 & r) ? 15 : 7;
                        let o,
                          n = 0;
                        for (; (o = 63 & this.interim[++n]) && n < 4; ) (r <<= 6), (r |= o);
                        const h = 192 == (224 & this.interim[0]) ? 2 : 224 == (240 & this.interim[0]) ? 3 : 4,
                          c = h - n;
                        for (; l < c; ) {
                          if (l >= i) return 0;
                          if (((o = e[l++]), 128 != (192 & o))) {
                            l--, (s = !0);
                            break;
                          }
                          (this.interim[n++] = o), (r <<= 6), (r |= 63 & o);
                        }
                        s ||
                          (2 === h
                            ? r < 128
                              ? l--
                              : (t[a++] = r)
                            : 3 === h
                              ? r < 2048 || (r >= 55296 && r <= 57343) || 65279 === r || (t[a++] = r)
                              : r < 65536 || r > 1114111 || (t[a++] = r)),
                          this.interim.fill(0);
                      }
                      const c = i - 4;
                      let d = l;
                      for (; d < i; ) {
                        for (; !(!(d < c) || 128 & (s = e[d]) || 128 & (r = e[d + 1]) || 128 & (o = e[d + 2]) || 128 & (n = e[d + 3])); )
                          (t[a++] = s), (t[a++] = r), (t[a++] = o), (t[a++] = n), (d += 4);
                        if (((s = e[d++]), s < 128)) t[a++] = s;
                        else if (192 == (224 & s)) {
                          if (d >= i) return (this.interim[0] = s), a;
                          if (((r = e[d++]), 128 != (192 & r))) {
                            d--;
                            continue;
                          }
                          if (((h = ((31 & s) << 6) | (63 & r)), h < 128)) {
                            d--;
                            continue;
                          }
                          t[a++] = h;
                        } else if (224 == (240 & s)) {
                          if (d >= i) return (this.interim[0] = s), a;
                          if (((r = e[d++]), 128 != (192 & r))) {
                            d--;
                            continue;
                          }
                          if (d >= i) return (this.interim[0] = s), (this.interim[1] = r), a;
                          if (((o = e[d++]), 128 != (192 & o))) {
                            d--;
                            continue;
                          }
                          if (((h = ((15 & s) << 12) | ((63 & r) << 6) | (63 & o)), h < 2048 || (h >= 55296 && h <= 57343) || 65279 === h)) continue;
                          t[a++] = h;
                        } else if (240 == (248 & s)) {
                          if (d >= i) return (this.interim[0] = s), a;
                          if (((r = e[d++]), 128 != (192 & r))) {
                            d--;
                            continue;
                          }
                          if (d >= i) return (this.interim[0] = s), (this.interim[1] = r), a;
                          if (((o = e[d++]), 128 != (192 & o))) {
                            d--;
                            continue;
                          }
                          if (d >= i) return (this.interim[0] = s), (this.interim[1] = r), (this.interim[2] = o), a;
                          if (((n = e[d++]), 128 != (192 & n))) {
                            d--;
                            continue;
                          }
                          if (((h = ((7 & s) << 18) | ((63 & r) << 12) | ((63 & o) << 6) | (63 & n)), h < 65536 || h > 1114111)) continue;
                          t[a++] = h;
                        }
                      }
                      return a;
                    }
                  });
              },
              776: function (e, t, i) {
                var s =
                    (this && this.__decorate) ||
                    function (e, t, i, s) {
                      var r,
                        o = arguments.length,
                        n = o < 3 ? t : null === s ? (s = Object.getOwnPropertyDescriptor(t, i)) : s;
                      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, i, s);
                      else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (n = (o < 3 ? r(n) : o > 3 ? r(t, i, n) : r(t, i)) || n);
                      return o > 3 && n && Object.defineProperty(t, i, n), n;
                    },
                  r =
                    (this && this.__param) ||
                    function (e, t) {
                      return function (i, s) {
                        t(i, s, e);
                      };
                    };
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.traceCall = t.setTraceLogger = t.LogService = void 0);
                const o = i(859),
                  n = i(97),
                  a = {
                    trace: n.LogLevelEnum.TRACE,
                    debug: n.LogLevelEnum.DEBUG,
                    info: n.LogLevelEnum.INFO,
                    warn: n.LogLevelEnum.WARN,
                    error: n.LogLevelEnum.ERROR,
                    off: n.LogLevelEnum.OFF,
                  };
                let h,
                  l = (t.LogService = class extends o.Disposable {
                    get logLevel() {
                      return this._logLevel;
                    }
                    constructor(e) {
                      super(),
                        (this._optionsService = e),
                        (this._logLevel = n.LogLevelEnum.OFF),
                        this._updateLogLevel(),
                        this.register(this._optionsService.onSpecificOptionChange("logLevel", () => this._updateLogLevel())),
                        (h = this);
                    }
                    _updateLogLevel() {
                      this._logLevel = a[this._optionsService.rawOptions.logLevel];
                    }
                    _evalLazyOptionalParams(e) {
                      for (let t = 0; t < e.length; t++) "function" == typeof e[t] && (e[t] = e[t]());
                    }
                    _log(e, t, i) {
                      this._evalLazyOptionalParams(i), e.call(console, (this._optionsService.options.logger ? "" : "xterm.js: ") + t, ...i);
                    }
                    trace(e, ...t) {
                      this._logLevel <= n.LogLevelEnum.TRACE &&
                        this._log(this._optionsService.options.logger?.trace.bind(this._optionsService.options.logger) ?? console.log, e, t);
                    }
                    debug(e, ...t) {
                      this._logLevel <= n.LogLevelEnum.DEBUG &&
                        this._log(this._optionsService.options.logger?.debug.bind(this._optionsService.options.logger) ?? console.log, e, t);
                    }
                    info(e, ...t) {
                      this._logLevel <= n.LogLevelEnum.INFO &&
                        this._log(this._optionsService.options.logger?.info.bind(this._optionsService.options.logger) ?? console.info, e, t);
                    }
                    warn(e, ...t) {
                      this._logLevel <= n.LogLevelEnum.WARN &&
                        this._log(this._optionsService.options.logger?.warn.bind(this._optionsService.options.logger) ?? console.warn, e, t);
                    }
                    error(e, ...t) {
                      this._logLevel <= n.LogLevelEnum.ERROR &&
                        this._log(this._optionsService.options.logger?.error.bind(this._optionsService.options.logger) ?? console.error, e, t);
                    }
                  });
                (t.LogService = l = s([r(0, n.IOptionsService)], l)),
                  (t.setTraceLogger = function (e) {
                    h = e;
                  }),
                  (t.traceCall = function (e, t, i) {
                    if ("function" != typeof i.value) throw new Error("not supported");
                    const s = i.value;
                    i.value = function (...e) {
                      if (h.logLevel !== n.LogLevelEnum.TRACE) return s.apply(this, e);
                      h.trace(`GlyphRenderer#${s.name}(${e.map((e) => JSON.stringify(e)).join(", ")})`);
                      const t = s.apply(this, e);
                      return h.trace(`GlyphRenderer#${s.name} return`, t), t;
                    };
                  });
              },
              726: (e, t) => {
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.createDecorator = t.getServiceDependencies = t.serviceRegistry = void 0);
                const i = "di$target",
                  s = "di$dependencies";
                (t.serviceRegistry = new Map()),
                  (t.getServiceDependencies = function (e) {
                    return e[s] || [];
                  }),
                  (t.createDecorator = function (e) {
                    if (t.serviceRegistry.has(e)) return t.serviceRegistry.get(e);
                    const r = function (e, t, o) {
                      if (3 !== arguments.length) throw new Error("@IServiceName-decorator can only be used to decorate a parameter");
                      !(function (e, t, r) {
                        t[i] === t ? t[s].push({ id: e, index: r }) : ((t[s] = [{ id: e, index: r }]), (t[i] = t));
                      })(r, e, o);
                    };
                    return (r.toString = () => e), t.serviceRegistry.set(e, r), r;
                  });
              },
              97: (e, t, i) => {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.IDecorationService =
                    t.IUnicodeService =
                    t.IOscLinkService =
                    t.IOptionsService =
                    t.ILogService =
                    t.LogLevelEnum =
                    t.IInstantiationService =
                    t.ICharsetService =
                    t.ICoreService =
                    t.ICoreMouseService =
                    t.IBufferService =
                      void 0);
                const s = i(726);
                var r;
                (t.IBufferService = (0, s.createDecorator)("BufferService")),
                  (t.ICoreMouseService = (0, s.createDecorator)("CoreMouseService")),
                  (t.ICoreService = (0, s.createDecorator)("CoreService")),
                  (t.ICharsetService = (0, s.createDecorator)("CharsetService")),
                  (t.IInstantiationService = (0, s.createDecorator)("InstantiationService")),
                  (function (e) {
                    (e[(e.TRACE = 0)] = "TRACE"),
                      (e[(e.DEBUG = 1)] = "DEBUG"),
                      (e[(e.INFO = 2)] = "INFO"),
                      (e[(e.WARN = 3)] = "WARN"),
                      (e[(e.ERROR = 4)] = "ERROR"),
                      (e[(e.OFF = 5)] = "OFF");
                  })(r || (t.LogLevelEnum = r = {})),
                  (t.ILogService = (0, s.createDecorator)("LogService")),
                  (t.IOptionsService = (0, s.createDecorator)("OptionsService")),
                  (t.IOscLinkService = (0, s.createDecorator)("OscLinkService")),
                  (t.IUnicodeService = (0, s.createDecorator)("UnicodeService")),
                  (t.IDecorationService = (0, s.createDecorator)("DecorationService"));
              },
            },
            t = {};
          function i(s) {
            var r = t[s];
            if (void 0 !== r) return r.exports;
            var o = (t[s] = { exports: {} });
            return e[s].call(o.exports, o, o.exports, i), o.exports;
          }
          var r = {};
          return (
            (() => {
              var e = r;
              Object.defineProperty(e, "__esModule", { value: !0 }), (e.WebglAddon = void 0);
              const t = i(345),
                s = i(859),
                o = i(399),
                n = i(666),
                a = i(776);
              class h extends s.Disposable {
                constructor(e) {
                  if (o.isSafari && (0, o.getSafariVersion)() < 16) {
                    const e = { antialias: !1, depth: !1, preserveDrawingBuffer: !0 };
                    if (!document.createElement("canvas").getContext("webgl2", e)) throw new Error("Webgl2 is only supported on Safari 16 and above");
                  }
                  super(),
                    (this._preserveDrawingBuffer = e),
                    (this._onChangeTextureAtlas = this.register(new t.EventEmitter())),
                    (this.onChangeTextureAtlas = this._onChangeTextureAtlas.event),
                    (this._onAddTextureAtlasCanvas = this.register(new t.EventEmitter())),
                    (this.onAddTextureAtlasCanvas = this._onAddTextureAtlasCanvas.event),
                    (this._onRemoveTextureAtlasCanvas = this.register(new t.EventEmitter())),
                    (this.onRemoveTextureAtlasCanvas = this._onRemoveTextureAtlasCanvas.event),
                    (this._onContextLoss = this.register(new t.EventEmitter())),
                    (this.onContextLoss = this._onContextLoss.event);
                }
                activate(e) {
                  const i = e._core;
                  if (!e.element) return void this.register(i.onWillOpen(() => this.activate(e)));
                  this._terminal = e;
                  const r = i.coreService,
                    o = i.optionsService,
                    h = i,
                    l = h._renderService,
                    c = h._characterJoinerService,
                    d = h._charSizeService,
                    _ = h._coreBrowserService,
                    u = h._decorationService,
                    g = h._logService,
                    v = h._themeService;
                  (0, a.setTraceLogger)(g),
                    (this._renderer = this.register(new n.WebglRenderer(e, c, d, _, r, u, o, v, this._preserveDrawingBuffer))),
                    this.register((0, t.forwardEvent)(this._renderer.onContextLoss, this._onContextLoss)),
                    this.register((0, t.forwardEvent)(this._renderer.onChangeTextureAtlas, this._onChangeTextureAtlas)),
                    this.register((0, t.forwardEvent)(this._renderer.onAddTextureAtlasCanvas, this._onAddTextureAtlasCanvas)),
                    this.register((0, t.forwardEvent)(this._renderer.onRemoveTextureAtlasCanvas, this._onRemoveTextureAtlasCanvas)),
                    l.setRenderer(this._renderer),
                    this.register(
                      (0, s.toDisposable)(() => {
                        const t = this._terminal._core._renderService;
                        t.setRenderer(this._terminal._core._createRenderer()), t.handleResize(e.cols, e.rows);
                      })
                    );
                }
                get textureAtlas() {
                  return this._renderer?.textureAtlas;
                }
                clearTextureAtlas() {
                  this._renderer?.clearTextureAtlas();
                }
              }
              e.WebglAddon = h;
            })(),
            r
          );
        })()
      );
    },
    65606: (e) => {
      var t = (e.exports = {});
      var i;
      var s;
      function r() {
        throw new Error("setTimeout has not been defined");
      }
      function o() {
        throw new Error("clearTimeout has not been defined");
      }
      (function () {
        try {
          if (typeof setTimeout === "function") {
            i = setTimeout;
          } else {
            i = r;
          }
        } catch (e) {
          i = r;
        }
        try {
          if (typeof clearTimeout === "function") {
            s = clearTimeout;
          } else {
            s = o;
          }
        } catch (e) {
          s = o;
        }
      })();
      function n(e) {
        if (i === setTimeout) {
          return setTimeout(e, 0);
        }
        if ((i === r || !i) && setTimeout) {
          i = setTimeout;
          return setTimeout(e, 0);
        }
        try {
          return i(e, 0);
        } catch (t) {
          try {
            return i.call(null, e, 0);
          } catch (t) {
            return i.call(this, e, 0);
          }
        }
      }
      function a(e) {
        if (s === clearTimeout) {
          return clearTimeout(e);
        }
        if ((s === o || !s) && clearTimeout) {
          s = clearTimeout;
          return clearTimeout(e);
        }
        try {
          return s(e);
        } catch (t) {
          try {
            return s.call(null, e);
          } catch (t) {
            return s.call(this, e);
          }
        }
      }
      var h = [];
      var l = false;
      var c;
      var d = -1;
      function _() {
        if (!l || !c) {
          return;
        }
        l = false;
        if (c.length) {
          h = c.concat(h);
        } else {
          d = -1;
        }
        if (h.length) {
          u();
        }
      }
      function u() {
        if (l) {
          return;
        }
        var e = n(_);
        l = true;
        var t = h.length;
        while (t) {
          c = h;
          h = [];
          while (++d < t) {
            if (c) {
              c[d].run();
            }
          }
          d = -1;
          t = h.length;
        }
        c = null;
        l = false;
        a(e);
      }
      t.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
            t[i - 1] = arguments[i];
          }
        }
        h.push(new g(e, t));
        if (h.length === 1 && !l) {
          n(u);
        }
      };
      function g(e, t) {
        this.fun = e;
        this.array = t;
      }
      g.prototype.run = function () {
        this.fun.apply(null, this.array);
      };
      t.title = "browser";
      t.browser = true;
      t.env = {};
      t.argv = [];
      t.version = "";
      t.versions = {};
      function v() {}
      t.on = v;
      t.addListener = v;
      t.once = v;
      t.off = v;
      t.removeListener = v;
      t.removeAllListeners = v;
      t.emit = v;
      t.prependListener = v;
      t.prependOnceListener = v;
      t.listeners = function (e) {
        return [];
      };
      t.binding = function (e) {
        throw new Error("process.binding is not supported");
      };
      t.cwd = function () {
        return "/";
      };
      t.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      };
      t.umask = function () {
        return 0;
      };
    },
  },
]);

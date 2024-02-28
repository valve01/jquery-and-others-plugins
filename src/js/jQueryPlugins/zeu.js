!(function (t, e) {
	'object' == typeof exports && 'object' == typeof module
		? (module.exports = e())
		: 'function' == typeof define && define.amd
		? define('zeu', [], e)
		: 'object' == typeof exports
		? (exports.zeu = e())
		: (t.zeu = e());
})(window, function () {
	return (function (t) {
		var e = {};
		function i(r) {
			if (e[r]) return e[r].exports;
			var o = (e[r] = { i: r, l: !1, exports: {} });
			return t[r].call(o.exports, o, o.exports, i), (o.l = !0), o.exports;
		}
		return (
			(i.m = t),
			(i.c = e),
			(i.d = function (t, e, r) {
				i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
			}),
			(i.r = function (t) {
				'undefined' != typeof Symbol &&
					Symbol.toStringTag &&
					Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
					Object.defineProperty(t, '__esModule', { value: !0 });
			}),
			(i.t = function (t, e) {
				if ((1 & e && (t = i(t)), 8 & e)) return t;
				if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
				var r = Object.create(null);
				if (
					(i.r(r),
					Object.defineProperty(r, 'default', { enumerable: !0, value: t }),
					2 & e && 'string' != typeof t)
				)
					for (var o in t)
						i.d(
							r,
							o,
							function (e) {
								return t[e];
							}.bind(null, o),
						);
				return r;
			}),
			(i.n = function (t) {
				var e =
					t && t.__esModule
						? function () {
								return t.default;
						  }
						: function () {
								return t;
						  };
				return i.d(e, 'a', e), e;
			}),
			(i.o = function (t, e) {
				return Object.prototype.hasOwnProperty.call(t, e);
			}),
			(i.p = ''),
			i((i.s = 20))
		);
	})([
		function (t, e, i) {
			'use strict';
			Object.defineProperty(e, '__esModule', { value: !0 }), (e.COLOR = void 0);
			e.COLOR = {
				lightGreen: '#00d7af',
				lightWhite: '#f8f8ff',
				lightGrey: '#e0e0e0',
				lightBlack: '#343a42',
				black: '#000000',
				white: '#ffffff',
				red: '#dc3547',
				blue: '#007bfb',
				yellow: '#ffc108',
				cyan: '#17a2b9',
				grey: '#6c757e',
				green: '#28a748',
				orange: '#ffa500',
				transparent: 'rgba(255, 255, 255, 0)',
			};
		},
		function (t, e, i) {
			'use strict';
			Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
			var r = i(4),
				o = h(i(2)),
				n = h(i(18)),
				s = i(0);
			function h(t) {
				return t && t.__esModule ? t : { default: t };
			}
			function a(t, e) {
				for (var i = 0; i < e.length; i++) {
					var r = e[i];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(t, r.key, r);
				}
			}
			var l = (function () {
				function t(e) {
					var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
						r = arguments[2],
						o = arguments[3];
					!(function (t, e) {
						if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
					})(this, t),
						(this._canvas = document.getElementById(e)),
						(this._ctx = this._canvas.getContext('2d')),
						(this._x = 0),
						(this._y = 0),
						(this._viewWidth = r),
						(this._viewHeight = o),
						(this._scaleX = 1),
						(this._scaleY = 1);
					var h = this._canvas.height || this._canvas.parentNode.clientHeight || o;
					this.scaleByHeight(h),
						(this._display = !0),
						(this._eventQueue = []),
						(this.drawFrame = this.drawFrame.bind(this)),
						(this._shape = new n.default(this._ctx));
					var a = {
						on: !1,
						lastCall: 0,
						dashOffSet: 0,
						text: '',
						interval: 1500,
						lineColor: s.COLOR.red,
						fontColor: s.COLOR.red,
						bgColor: s.COLOR.yellow,
					};
					(this._alert = a),
						(this.alertFunc = this.alertFunc.bind(this)),
						this.setOptions(i),
						this.postConstructor();
				}
				return (
					(function (t, e, i) {
						e && a(t.prototype, e), i && a(t, i);
					})(t, [
						{ key: 'setOptions', value: function (t) {} },
						{
							key: 'postConstructor',
							value: function () {
								this.removeFromAnimationQueue(), this.addToAnimationQueue();
							},
						},
						{
							key: 'drawFrame',
							value: function () {
								if (this._eventQueue.length > 0) {
									var t = this._eventQueue[0];
									'move' === t.type &&
										(this._x === t.destX && this._y === t.destY
											? this._eventQueue.shift()
											: ((this._x = o.default.getNextPos(this._x, t.destX, t.speedX)),
											  (this._y = o.default.getNextPos(this._y, t.destY, t.speedY))));
								}
								this.isDisplay() &&
									(this.clear(),
									this.save(),
									this.drawObject(),
									this._ctx.restore(),
									this.isAlert() &&
										(this.save(),
										(this._alert.lastCall = this.nextAlert(this.alertFunc, this._alert.lastCall, this._alert.interval)),
										this._ctx.restore()));
							},
						},
						{ key: 'drawObject', value: function () {} },
						{
							key: 'clear',
							value: function () {
								this._ctx.clearRect(this._x, this._y, this._width, this._height);
							},
						},
						{
							key: 'scale',
							value: function () {
								this._ctx.scale(this._scaleX, this._scaleY);
							},
						},
						{
							key: 'save',
							value: function () {
								this._ctx.save(), this.scale();
							},
						},
						{
							key: 'addToAnimationQueue',
							value: function () {
								-1 === this.getAnimationFrameArrayPos() &&
									r.GLOBAL.requestAnimationFrameArray.push(this.drawFrameObj());
							},
						},
						{
							key: 'removeFromAnimationQueue',
							value: function () {
								var t = this.getAnimationFrameArrayPos();
								-1 !== t && r.GLOBAL.requestAnimationFrameArray.splice(t, 1);
							},
						},
						{
							key: 'drawFrameObj',
							value: function () {
								return { func: this.drawFrame, self: this };
							},
						},
						{
							key: 'getAnimationFrameArrayPos',
							value: function () {
								var t = this;
								return r.GLOBAL.requestAnimationFrameArray.findIndex(function (e) {
									return e.self._canvas.id === t._canvas.id;
								});
							},
						},
						{
							key: 'nextAlert',
							value: function (t, e, i) {
								var r = Date.now();
								return r - e < i ? (t.call(), e) : r - e < 2 * i ? e : r;
							},
						},
						{
							key: 'alertFunc',
							value: function () {
								this._shape.fillRect(this._x, this._y, this._width, this._height, this._alert.bgColor),
									this._ctx.setLineDash([20, 16]),
									(this._ctx.lineDashOffset = -this._alert.dashOffSet),
									(this._ctx.lineWidth = 20),
									(this._ctx.strokeStyle = this._alert.lineColor),
									this._ctx.strokeRect(this._x, this._y, this._width, this._height),
									this._alert.dashOffSet++,
									this._alert.dashOffSet > 32 && (this._alert.dashOffSet = 0),
									this._shape.fillText(
										this._alert.text,
										(this._width - this._x) / 2,
										(this._height - this._y) / 2 + 10,
										'Bold 30px Arial',
										'center',
										this._alert.fontColor,
									);
							},
						},
						{
							key: 'destroy',
							value: function () {
								this.removeFromAnimationQueue(),
									this.clear(),
									(this._canvas = null),
									(this._ctx = null),
									(this._alert = null);
							},
						},
						{
							key: 'alertOn',
							value: function () {
								var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
								(this._alert.text = t.text || 'ALERT'),
									(this._alert.interval = t.interval || 1500),
									(this._alert.bgColor = t.bgColor || s.COLOR.yellow),
									(this._alert.fontColor = t.fontColor || s.COLOR.red),
									(this._alert.lineColor = t.lineColor || s.COLOR.red),
									(this._alert.on = !0);
							},
						},
						{
							key: 'alertOff',
							value: function () {
								this._alert.on = !1;
							},
						},
						{
							key: 'isAlert',
							value: function () {
								return this._alert.on;
							},
						},
						{
							key: 'moveTo',
							value: function (t, e, i) {
								for (var r = this._x, o = this._y, n = this._eventQueue.length - 1; n >= 0; n--) {
									var s = this._eventQueue[n];
									if ('move' === s.type) {
										(r = s.destX), (o = s.destY);
										break;
									}
								}
								var h = i / 60,
									a = Math.abs(t - r) / h,
									l = Math.abs(e - o) / h,
									u = t > r ? a : -a,
									c = e > o ? l : -l;
								return this._eventQueue.push({ type: 'move', destX: t, destY: e, speedX: u, speedY: c }), this;
							},
						},
						{
							key: 'scaleTo',
							value: function (t, e) {
								return (
									(this._scaleX = t),
									(this._scaleY = e),
									(this._width = this._scaleX * this._viewWidth),
									(this._height = this._scaleY * this._viewHeight),
									this
								);
							},
						},
						{
							key: 'scaleByHeight',
							value: function (t) {
								return (
									(this._scaleY = t / this._viewHeight),
									(this._scaleX = this._scaleY),
									(this._width = this._scaleX * this._viewWidth),
									(this._height = this._scaleY * this._viewHeight),
									this
								);
							},
						},
						{
							key: 'show',
							value: function () {
								this._display = !0;
							},
						},
						{
							key: 'hide',
							value: function () {
								this._display = !1;
							},
						},
						{
							key: 'isDisplay',
							value: function () {
								return this._display;
							},
						},
						{
							key: 'isAnimationOn',
							get: function () {
								return -1 !== this.getAnimationFrameArrayPos();
							},
						},
						{
							key: 'canvas',
							get: function () {
								return this._canvas;
							},
						},
						{
							key: 'context',
							get: function () {
								return this._ctx;
							},
						},
						{
							key: 'eventQueue',
							get: function () {
								return this._eventQueue;
							},
						},
						{
							key: 'viewWidth',
							get: function () {
								return this._viewWidth;
							},
						},
						{
							key: 'viewHeight',
							get: function () {
								return this._viewHeight;
							},
						},
					]),
					t
				);
			})();
			(e.default = l), (t.exports = e.default);
		},
		function (t, e, i) {
			'use strict';
			function r(t, e) {
				for (var i = 0; i < e.length; i++) {
					var r = e[i];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(t, r.key, r);
				}
			}
			Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
			var o = (function () {
				function t() {
					!(function (t, e) {
						if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
					})(this, t);
				}
				return (
					(function (t, e, i) {
						e && r(t.prototype, e), i && r(t, i);
					})(t, null, [
						{
							key: 'getRandomInt',
							value: function (t, e) {
								return Math.floor(Math.random() * (e - t + 1)) + t;
							},
						},
						{
							key: 'getRandomColor',
							value: function () {
								return '#' + (((1 << 24) * Math.random()) | 0).toString(16);
							},
						},
						{
							key: 'has',
							value: function (t, e) {
								return !!t && hasOwnProperty.call(t, e);
							},
						},
						{
							key: 'addHour',
							value: function (t) {
								var e = new Date();
								return e.setHours(e.getHours() + t), e;
							},
						},
						{
							key: 'getAngleByDate',
							value: function (t, e) {
								return ((t * Math.PI) / 6) * e.getSeconds() + ((t * Math.PI) / 6e3) * e.getMilliseconds();
							},
						},
						{
							key: 'getNextAngleByDegree',
							value: function (t, e) {
								return t >= 360 ? 0 : t + e;
							},
						},
						{
							key: 'getAngleByDegree',
							value: function (t) {
								return (t * Math.PI) / 180;
							},
						},
						{
							key: 'hexToRgba',
							value: function (t, e) {
								var i = t.replace('#', '');
								return (
									'rgba(' +
									parseInt(i.substring(0, 2), 16) +
									',' +
									parseInt(i.substring(2, 4), 16) +
									',' +
									parseInt(i.substring(4, 6), 16) +
									',' +
									e / 100 +
									')'
								);
							},
						},
						{
							key: 'hexToRgb',
							value: function (t) {
								var e = t.replace('#', ''),
									i = [];
								return (
									(i[0] = parseInt(e.substring(0, 2), 16)),
									(i[1] = parseInt(e.substring(2, 4), 16)),
									(i[2] = parseInt(e.substring(4, 6), 16)),
									i
								);
							},
						},
						{
							key: 'hex',
							value: function (t) {
								var e = '0123456789abcdef',
									i = parseInt(t, 10);
								return 0 === i || isNaN(t)
									? '00'
									: ((i = Math.round(Math.min(Math.max(0, i), 255))),
									  e.charAt((i - (i % 16)) / 16) + e.charAt(i % 16));
							},
						},
						{
							key: 'convertToHex',
							value: function (t) {
								return this.hex(t[0]) + this.hex(t[1]) + this.hex(t[2]);
							},
						},
						{
							key: 'generateGradientColor',
							value: function (t, e, i) {
								for (var r = this.hexToRgb(t), o = this.hexToRgb(e), n = i, s = 0, h = [], a = 0; a < n; a++) {
									var l = [];
									(s += 1 / n),
										(l[0] = r[0] * s + (1 - s) * o[0]),
										(l[1] = r[1] * s + (1 - s) * o[1]),
										(l[2] = r[2] * s + (1 - s) * o[2]),
										h.push(this.convertToHex(l));
								}
								return h;
							},
						},
						{
							key: 'isDefined',
							value: function (t) {
								return void 0 !== t && null !== t;
							},
						},
						{
							key: 'leftPadZero',
							value: function (t) {
								return t < 10 ? '0' + t : t;
							},
						},
						{
							key: 'getNextPos',
							value: function (t, e, i) {
								return i > 0 && t + i >= e ? e : i < 0 && t + i <= e ? e : t + i;
							},
						},
						{
							key: 'shuffleArray',
							value: function (t) {
								for (var e = 0, i = 0, r = t.length - 1; r > 0; r--)
									(e = Math.floor(Math.random() * (r + 1))), (i = t[r]), (t[r] = t[e]), (t[e] = i);
								return t;
							},
						},
					]),
					t
				);
			})();
			(e.default = o), (t.exports = e.default);
		},
		function (t, e, i) {
			'use strict';
			Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
			var r = (function (t) {
				return t && t.__esModule ? t : { default: t };
			})(i(5));
			function o(t, e) {
				for (var i = 0; i < e.length; i++) {
					var r = e[i];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(t, r.key, r);
				}
			}
			var n = new ((function () {
				function t() {
					!(function (t, e) {
						if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
					})(this, t),
						(this._fps = 60);
				}
				return (
					(function (t, e, i) {
						e && o(t.prototype, e), i && o(t, i);
					})(t, [
						{
							key: 'fps',
							set: function (t) {
								(this._fps = t), r.default.setFps(t);
							},
							get: function () {
								return this._fps;
							},
						},
					]),
					t
				);
			})())();
			(e.default = n), (t.exports = e.default);
		},
		function (t, e, i) {
			'use strict';
			Object.defineProperty(e, '__esModule', { value: !0 }), (e.GLOBAL = void 0);
			e.GLOBAL = { requestAnimationFrameArray: [] };
		},
		function (t, e, i) {
			'use strict';
			Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
			var r = i(4),
				o = (function (t) {
					return t && t.__esModule ? t : { default: t };
				})(i(3));
			function n(t, e) {
				for (var i = 0; i < e.length; i++) {
					var r = e[i];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(t, r.key, r);
				}
			}
			var s = new ((function () {
				function t() {
					!(function (t, e) {
						if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
					})(this, t),
						(this.render = this.render.bind(this)),
						(this._fps = o.default._fps),
						(this._fpsInterval = 1e3 / this._fps),
						(this._lastFrame = Date.now()),
						window.requestAnimationFrame ||
							(window.requestAnimFrame = function () {
								return (
									window.webkitRequestAnimationFrame ||
									window.mozRequestAnimationFrame ||
									window.oRequestAnimationFrame ||
									window.msRequestAnimationFrame
								);
							});
				}
				return (
					(function (t, e, i) {
						e && n(t.prototype, e), i && n(t, i);
					})(t, [
						{
							key: 'render',
							value: function () {
								var t = Date.now(),
									e = t - this._lastFrame;
								if (e > this._fpsInterval) {
									this._lastFrame = t - (e % this._fpsInterval);
									for (var i = 0; i < r.GLOBAL.requestAnimationFrameArray.length; i++) {
										r.GLOBAL.requestAnimationFrameArray[i].func.call();
									}
								}
								window.requestAnimationFrame(this.render);
							},
						},
						{
							key: 'setFps',
							value: function (t) {
								(this._fps = t), (this._fpsInterval = 1e3 / this._fps);
							},
						},
					]),
					t
				);
			})())();
			(e.default = s), (t.exports = e.default);
		},
		function (t, e, i) {
			'use strict';
			Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
			var r = s(i(1)),
				o = s(i(2)),
				n = i(0);
			function s(t) {
				return t && t.__esModule ? t : { default: t };
			}
			function h(t) {
				return (h =
					'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
						? function (t) {
								return typeof t;
						  }
						: function (t) {
								return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
									? 'symbol'
									: typeof t;
						  })(t);
			}
			function a(t, e) {
				for (var i = 0; i < e.length; i++) {
					var r = e[i];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(t, r.key, r);
				}
			}
			function l(t, e) {
				return !e || ('object' !== h(e) && 'function' != typeof e)
					? (function (t) {
							if (void 0 === t)
								throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return t;
					  })(t)
					: e;
			}
			function u(t, e) {
				return (u =
					Object.setPrototypeOf ||
					function (t, e) {
						return (t.__proto__ = e), t;
					})(t, e);
			}
			var c = (function (t) {
				function e(t) {
					var i,
						r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					!(function (t, e) {
						if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
					})(this, e);
					var o = r.viewWidth || 200,
						n = r.viewHeight || 200;
					return (
						((i = l(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, r, o, n)))._rows = []), i
					);
				}
				return (
					(function (t, e) {
						if ('function' != typeof e && null !== e)
							throw new TypeError('Super expression must either be null or a function');
						(t.prototype = Object.create(e && e.prototype, {
							constructor: { value: t, writable: !0, configurable: !0 },
						})),
							e && u(t, e);
					})(e, r.default),
					(function (t, e, i) {
						e && a(t.prototype, e), i && a(t, i);
					})(e, [
						{
							key: 'setOptions',
							value: function () {
								var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
								(this._rowHeight = t.rowHeight || 20),
									(this._space = t.space || 0),
									(this._font = t.font || '10px Arial'),
									(this._speed = t.speed || 5),
									(this._order = t.order || 'asc');
							},
						},
						{
							key: 'sort',
							value: function () {
								'asc' === this._order
									? this._rows.sort(function (t, e) {
											return t.score - e.score;
									  })
									: this._rows.sort(function (t, e) {
											return e.score - t.score;
									  });
							},
						},
						{
							key: 'drawObject',
							value: function () {
								for (var t = 0; t < this._rows.length; t++) {
									var e = this._rows[t];
									if (
										(this._shape.fillRect(e.x, e.y, this._viewWidth, this._rowHeight, e.bgColor),
										this._shape.fillText(
											e.text.value,
											e.x + e.text.xOffset,
											e.y + e.text.yOffset,
											this._font,
											'left',
											e.text.color,
										),
										'move' === e.moveType)
									) {
										var i = t * (this._rowHeight + this._space),
											r = i > e.y ? this._speed : -this._speed;
										this._rows[t].y = o.default.getNextPos(e.y, i, r);
									} else
										'remove' === e.moveType &&
											(e.destX < 0 &&
												e.x === e.destX &&
												((this._rows[t].speedX = 2 * this._speed), (this._rows[t].destX = this._viewWidth + 10)),
											(this._rows[t].x = o.default.getNextPos(e.x, this._rows[t].destX, this._rows[t].speedX)));
								}
								for (var n = this._rows.length - 1; n >= 0; n--) {
									var s = this._rows[n];
									'remove' === s.moveType && s.destX > 0 && s.x === s.destX && this._rows.splice(n, 1);
								}
							},
						},
						{
							key: 'update',
							value: function () {
								for (
									var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
										e = t.id,
										i = t.text || {},
										r = !1,
										o = 0;
									o < this._rows.length;
									o++
								)
									if (this._rows[o].id === e) {
										this._rows[o].score !== t.score && (r = !0),
											(this._rows[o].moveType = 'move'),
											(this._rows[o].score = t.score || this._rows[o].score),
											(this._rows[o].bgColor = t.bgColor || this._rows[o].bgColor),
											(this._rows[o].text.value = i.value || this._rows[o].text.value),
											(this._rows[o].text.color = i.color || this._rows[o].text.color);
										break;
									}
								r && this.sort();
							},
						},
						{
							key: 'remove',
							value: function (t) {
								for (var e = !1, i = 0; i < this._rows.length; i++)
									if (this._rows[i].id === t && 'remove' !== this._rows[i].moveType) {
										(this._rows[i].moveType = 'remove'),
											(this._rows[i].speedX = -this._speed),
											(this._rows[i].destX = -40),
											(e = !0);
										break;
									}
								e && this.sort();
							},
						},
						{
							key: 'add',
							value: function () {
								for (
									var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = 0;
									e < this._rows.length;
									e++
								)
									if (this._rows.id === t.id) return;
								var i = t.text || {},
									r = {
										id: t.id,
										score: t.score || 0,
										bgColor: t.bgColor || n.COLOR.blue,
										text: {
											value: i.value || '',
											color: i.color || n.COLOR.white,
											xOffset: i.xOffset || 0,
											yOffset: i.yOffset || 0,
										},
										x: 0,
										y: 0,
										destX: 0,
										destY: 0,
										speedX: 0,
										speedY: 0,
										moveType: 'move',
									};
								this._rows.push(r), this.sort();
							},
						},
						{
							key: 'rows',
							get: function () {
								return this._rows;
							},
						},
					]),
					e
				);
			})();
			(e.default = c), (t.exports = e.default);
		},
		function (t, e, i) {
			'use strict';
			Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
			var r = (function (t) {
					return t && t.__esModule ? t : { default: t };
				})(i(1)),
				o = i(0);
			function n(t) {
				return (n =
					'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
						? function (t) {
								return typeof t;
						  }
						: function (t) {
								return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
									? 'symbol'
									: typeof t;
						  })(t);
			}
			function s(t, e) {
				for (var i = 0; i < e.length; i++) {
					var r = e[i];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(t, r.key, r);
				}
			}
			function h(t, e) {
				return !e || ('object' !== n(e) && 'function' != typeof e)
					? (function (t) {
							if (void 0 === t)
								throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return t;
					  })(t)
					: e;
			}
			function a(t, e) {
				return (a =
					Object.setPrototypeOf ||
					function (t, e) {
						return (t.__proto__ = e), t;
					})(t, e);
			}
			var l = (function (t) {
				function e(t) {
					var i,
						r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					!(function (t, e) {
						if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
					})(this, e);
					var o = r.viewWidth || 200,
						n = r.viewHeight || 200;
					return (
						((i = h(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, r, o, n)))._nodes = []), i
					);
				}
				return (
					(function (t, e) {
						if ('function' != typeof e && null !== e)
							throw new TypeError('Super expression must either be null or a function');
						(t.prototype = Object.create(e && e.prototype, {
							constructor: { value: t, writable: !0, configurable: !0 },
						})),
							e && a(t, e);
					})(e, r.default),
					(function (t, e, i) {
						e && s(t.prototype, e), i && s(t, i);
					})(e, [
						{
							key: 'setOptions',
							value: function () {
								var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
								(this._space = t.space || 5), (this._radius = t.radius || 20), (this._border = t.border || 3);
							},
						},
						{
							key: 'drawObject',
							value: function () {
								var t = this,
									e = this._space,
									i = this._radius,
									r = (Math.pow(3, 0.5) * i) / 2;
								this._ctx.lineWidth = this._border;
								var o = Date.now();
								this._nodes.forEach(function (n) {
									var s = n.x % 2 == 0 ? e + r : (3 * e) / 2 + 2 * r,
										h = e + i + (r + e / 2) * Math.pow(3, 0.5) * n.x;
									if (
										(t.drawHex(
											s + (2 * r + e) * n.y,
											h,
											i,
											n.bgColor,
											n.borderColor,
											n.text,
											n.text.xOffset,
											n.text.yOffset,
										),
										n.blink.on)
									) {
										var a = n.blink.interval,
											l = n.blink.lastCall;
										o - l < a
											? t.drawHex(
													s + (2 * r + e) * n.y,
													h,
													i,
													n.blink.bgColor,
													n.blink.borderColor,
													n.blink.text,
													n.text.xOffset,
													n.text.yOffset,
											  )
											: o - l < 2 * a || (n.blink.lastCall = o);
									}
								});
							},
						},
						{
							key: 'drawHex',
							value: function (t, e, i, r, o, n, s, h) {
								var a = (Math.pow(3, 0.5) * i) / 2;
								(this._ctx.strokeStyle = o),
									this._ctx.beginPath(),
									this._ctx.moveTo(t, e - i),
									this._ctx.lineTo(t + a, e - i / 2),
									this._ctx.lineTo(t + a, e + i / 2),
									this._ctx.lineTo(t, e + i),
									this._ctx.lineTo(t - a, e + i / 2),
									this._ctx.lineTo(t - a, e - i / 2),
									this._ctx.lineTo(t, e - i),
									this._ctx.closePath(),
									this._ctx.stroke(),
									(this._ctx.fillStyle = r),
									this._ctx.fill(),
									this._shape.fillText(n.value, t + s, e + h, n.font, 'center', n.color);
							},
						},
						{
							key: 'saveHex',
							value: function () {
								for (
									var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
										e = t.text || {},
										i = {
											id: t.id,
											x: t.x,
											y: t.y,
											bgColor: t.bgColor || o.COLOR.white,
											borderColor: t.borderColor || o.COLOR.white,
											text: {
												value: e.value || '',
												color: e.color || o.COLOR.black,
												font: e.font || '12px Arial',
												xOffset: e.xOffset || 0,
												yOffset: e.yOffset || 0,
											},
											blink: {
												text: { value: '', color: o.COLOR.black },
												borderColor: t.borderColor || o.COLOR.white,
												bgColor: o.COLOR.red,
												interval: 1e3,
												on: !1,
												lastCall: 0,
											},
										},
										r = !1,
										n = 0;
									n < this._nodes.length;
									n++
								)
									if (this._nodes[n].id === i.id) {
										(this._nodes[n] = i), (r = !0);
										break;
									}
								r || this._nodes.push(i);
							},
						},
						{
							key: 'blinkOn',
							value: function () {
								for (
									var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
										e = t.text || {},
										i = 0;
									i < this._nodes.length;
									i++
								)
									if (this._nodes[i].id === t.id) {
										(this._nodes[i].blink.text.value = e.value || ''),
											(this._nodes[i].blink.text.color = e.color || o.COLOR.black),
											(this._nodes[i].blink.borderColor = t.borderColor || o.COLOR.white),
											(this._nodes[i].blink.bgColor = t.bgColor || o.COLOR.red),
											(this._nodes[i].blink.interval = t.interval || 1e3),
											(this._nodes[i].blink.on = !0);
										break;
									}
							},
						},
						{
							key: 'blinkOff',
							value: function (t) {
								for (var e = 0; e < this._nodes.length; e++)
									if (this._nodes[e].id === t) {
										this._nodes[e].blink.on = !1;
										break;
									}
							},
						},
					]),
					e
				);
			})();
			(e.default = l), (t.exports = e.default);
		},
		function (t, e, i) {
			'use strict';
			Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
			var r = s(i(1)),
				o = s(i(2)),
				n = i(0);
			function s(t) {
				return t && t.__esModule ? t : { default: t };
			}
			function h(t) {
				return (h =
					'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
						? function (t) {
								return typeof t;
						  }
						: function (t) {
								return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
									? 'symbol'
									: typeof t;
						  })(t);
			}
			function a(t) {
				return (
					(function (t) {
						if (Array.isArray(t)) {
							for (var e = 0, i = new Array(t.length); e < t.length; e++) i[e] = t[e];
							return i;
						}
					})(t) ||
					(function (t) {
						if (Symbol.iterator in Object(t) || '[object Arguments]' === Object.prototype.toString.call(t))
							return Array.from(t);
					})(t) ||
					(function () {
						throw new TypeError('Invalid attempt to spread non-iterable instance');
					})()
				);
			}
			function l(t, e) {
				for (var i = 0; i < e.length; i++) {
					var r = e[i];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(t, r.key, r);
				}
			}
			function u(t, e) {
				return !e || ('object' !== h(e) && 'function' != typeof e)
					? (function (t) {
							if (void 0 === t)
								throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return t;
					  })(t)
					: e;
			}
			function c(t, e) {
				return (c =
					Object.setPrototypeOf ||
					function (t, e) {
						return (t.__proto__ = e), t;
					})(t, e);
			}
			var f = (function (t) {
				function e(t) {
					var i,
						r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					!(function (t, e) {
						if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
					})(this, e);
					var o = r.viewWidth || 200,
						n = r.viewHeight || 200;
					return (
						((i = u(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, r, o, n)))._signalQueues =
							[]),
						i
					);
				}
				return (
					(function (t, e) {
						if ('function' != typeof e && null !== e)
							throw new TypeError('Super expression must either be null or a function');
						(t.prototype = Object.create(e && e.prototype, {
							constructor: { value: t, writable: !0, configurable: !0 },
						})),
							e && c(t, e);
					})(e, r.default),
					(function (t, e, i) {
						e && l(t.prototype, e), i && l(t, i);
					})(e, [
						{
							key: 'setOptions',
							value: function () {
								var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
								this._nodes = t.nodes || [];
							},
						},
						{
							key: 'drawObject',
							value: function () {
								var t = this;
								this._nodes.forEach(function (e) {
									(e.neighbors || []).forEach(function (i) {
										var r = t.getNodeById(i.id),
											o = i.edge || {},
											s = o.width || 1,
											h = o.color || n.COLOR.grey,
											a = o.dash || [];
										null !== r &&
											(0 !== a.length ? t._ctx.setLineDash(a) : t._ctx.setLineDash([]),
											t._shape.line(e.x, e.y, r.x, r.y, s, h));
									});
								});
								for (var e = [], i = 0; i < this._signalQueues.length; i++) {
									var r = this._signalQueues[i];
									(this._signalQueues[i].x = o.default.getNextPos(r.x, r.destX, r.speedX)),
										(this._signalQueues[i].y = o.default.getNextPos(r.y, r.destY, r.speedY)),
										r.x === r.destX && r.y === r.destY ? e.push(i) : this._shape.fillCircle(r.x, r.y, r.size, r.color);
								}
								for (var s = e.length - 1; s >= 0; s--) this._signalQueues.splice(e[s], 1);
								this._nodes.forEach(function (e) {
									var i = e.text || {},
										r = i.value || '',
										o = i.color || n.COLOR.black,
										s = i.font || '12px Arial',
										h = i.xOffset || 0,
										a = i.yOffset || 0;
									t._shape.fillCircle(e.x, e.y, e.size, e.color),
										t._shape.fillText(r, e.x + h, e.y + a, s, 'center', o);
								});
							},
						},
						{
							key: 'getNodeById',
							value: function (t) {
								return this._nodes.find(function (e) {
									return e.id === t;
								});
							},
						},
						{
							key: 'addNodes',
							value: function () {
								var t,
									e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
								(t = this._nodes).push.apply(t, a(e));
							},
						},
						{
							key: 'addNeighbor',
							value: function (t) {
								for (
									var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = 0;
									i < this._nodes.length;
									i++
								)
									if (this._nodes[i].id === t) {
										(this._nodes[i].neighbors = this._nodes[i].neighbors || []), this._nodes[i].neighbors.push(e);
										break;
									}
							},
						},
						{
							key: 'signal',
							value: function () {
								var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
									e = t.color || n.COLOR.black,
									i = t.duration || 2e3,
									r = t.size || 3,
									o = this.getNodeById(t.from),
									s = this.getNodeById(t.to),
									h = Math.abs(s.x - o.x) / (i / 60),
									a = Math.abs(s.y - o.y) / (i / 60),
									l = s.x > o.x ? h : -h,
									u = s.y > o.y ? a : -a;
								this._signalQueues.push({
									x: o.x,
									y: o.y,
									destX: s.x,
									destY: s.y,
									speedX: l,
									speedY: u,
									color: e,
									size: r,
								});
							},
						},
						{
							key: 'nodes',
							get: function () {
								return this._nodes;
							},
						},
					]),
					e
				);
			})();
			(e.default = f), (t.exports = e.default);
		},
		function (t, e, i) {
			'use strict';
			Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
			var r = s(i(2)),
				o = s(i(1)),
				n = i(0);
			function s(t) {
				return t && t.__esModule ? t : { default: t };
			}
			function h(t) {
				return (h =
					'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
						? function (t) {
								return typeof t;
						  }
						: function (t) {
								return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
									? 'symbol'
									: typeof t;
						  })(t);
			}
			function a(t, e) {
				for (var i = 0; i < e.length; i++) {
					var r = e[i];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(t, r.key, r);
				}
			}
			function l(t, e) {
				return !e || ('object' !== h(e) && 'function' != typeof e)
					? (function (t) {
							if (void 0 === t)
								throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return t;
					  })(t)
					: e;
			}
			function u(t, e) {
				return (u =
					Object.setPrototypeOf ||
					function (t, e) {
						return (t.__proto__ = e), t;
					})(t, e);
			}
			var c = (function (t) {
				function e(t) {
					var i,
						r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					!(function (t, e) {
						if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
					})(this, e);
					var o = r.viewWidth || 200;
					return (
						((i = l(
							this,
							(e.__proto__ || Object.getPrototypeOf(e)).call(this, t, r, o, 100),
						))._borderWidth = 8),
						(i._borderHeight = 30),
						(i._space = 10),
						(i._waveY = 0),
						(i._waveSpeed = 1),
						(i._isWaveOn = !1),
						i
					);
				}
				return (
					(function (t, e) {
						if ('function' != typeof e && null !== e)
							throw new TypeError('Super expression must either be null or a function');
						(t.prototype = Object.create(e && e.prototype, {
							constructor: { value: t, writable: !0, configurable: !0 },
						})),
							e && u(t, e);
					})(e, o.default),
					(function (t, e, i) {
						e && a(t.prototype, e), i && a(t, i);
					})(e, [
						{
							key: 'setOptions',
							value: function () {
								var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
									e = t.text || {};
								(this._textValue = e.value || ''),
									(this.textColor = e.fontColor || n.COLOR.white),
									(this.textBgColor = e.bgColor || n.COLOR.blue),
									(this.bgColor = t.bgColor || 'rgba(0, 0, 0, 0.01)'),
									(this.borderColor = t.borderColor || n.COLOR.blue),
									(this.waveColor = t.waveColor || n.COLOR.blue);
							},
						},
						{
							key: 'clear',
							value: function () {
								(this._ctx.fillStyle = this.bgColor), this._ctx.fillRect(0, 0, this._width, this._height);
							},
						},
						{
							key: 'drawObject',
							value: function () {
								if (((this._ctx.textAlign = 'center'), this._isWaveOn)) {
									this._waveY >= this._viewHeight / 2 + 1
										? ((this._waveY = 0), (this._isWaveOn = !1))
										: ((this._ctx.fillStyle = this.waveColor),
										  this._ctx.beginPath(),
										  this._ctx.fillRect(0, this._waveY, this._viewWidth + 1, 1),
										  this._ctx.closePath(),
										  this._ctx.beginPath(),
										  this._ctx.fillRect(0, this._viewHeight - this._waveY - 1, this._viewWidth, 1),
										  this._ctx.closePath(),
										  (this._waveY = r.default.getNextPos(this._waveY, this._viewHeight / 2 + 1, this._waveSpeed)));
								}
								(this._ctx.fillStyle = this.borderColor),
									this._ctx.fillRect(0, 0, this._borderHeight, this._borderWidth),
									this._ctx.fillRect(0, 0, this._borderWidth, this._borderHeight),
									this._ctx.fillRect(0, this._viewHeight - this._borderHeight, this._borderWidth, this._borderHeight),
									this._ctx.fillRect(0, this._viewHeight - this._borderWidth, this._borderHeight, this._borderWidth),
									this._ctx.fillRect(this._viewWidth - this._borderHeight, 0, this._borderHeight, this._borderWidth),
									this._ctx.fillRect(this._viewWidth - this._borderWidth, 0, this._borderWidth, this._borderHeight),
									this._ctx.fillRect(
										this._viewWidth - this._borderHeight,
										this._viewHeight - this._borderWidth,
										this._borderHeight,
										this._borderWidth,
									),
									this._ctx.fillRect(
										this._viewWidth - this._borderWidth,
										this._viewHeight - this._borderHeight,
										this._borderWidth,
										this._borderHeight,
									),
									(this._ctx.fillStyle = this.textBgColor),
									this._ctx.fillRect(
										this._borderWidth + this._space,
										this._borderWidth + this._space,
										this._viewWidth - 2 * (this._borderWidth + this._space),
										this._viewHeight - 2 * (this._borderWidth + this._space),
									),
									this._shape.fillText(
										this._textValue,
										this._viewWidth / 2,
										this._viewHeight - 35,
										'40px Arial',
										'center',
										this.textColor,
									);
							},
						},
						{
							key: 'value',
							set: function (t) {
								(this._textValue = t), (this._isWaveOn = !0);
							},
						},
					]),
					e
				);
			})();
			(e.default = c), (t.exports = e.default);
		},
		function (t, e, i) {
			'use strict';
			Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
			var r = s(i(2)),
				o = s(i(1)),
				n = i(0);
			function s(t) {
				return t && t.__esModule ? t : { default: t };
			}
			function h(t) {
				return (h =
					'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
						? function (t) {
								return typeof t;
						  }
						: function (t) {
								return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
									? 'symbol'
									: typeof t;
						  })(t);
			}
			function a(t, e) {
				for (var i = 0; i < e.length; i++) {
					var r = e[i];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(t, r.key, r);
				}
			}
			function l(t, e) {
				return !e || ('object' !== h(e) && 'function' != typeof e)
					? (function (t) {
							if (void 0 === t)
								throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return t;
					  })(t)
					: e;
			}
			function u(t, e) {
				return (u =
					Object.setPrototypeOf ||
					function (t, e) {
						return (t.__proto__ = e), t;
					})(t, e);
			}
			var c = (function (t) {
				function e(t, i) {
					var r;
					return (
						(function (t, e) {
							if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
						})(this, e),
						((r = l(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i, 200, 200)))._font =
							'25px Arial'),
						(r._degree1 = 0),
						(r._degree2 = 0),
						(r._degree3 = 0),
						(r._degree4 = 0),
						r
					);
				}
				return (
					(function (t, e) {
						if ('function' != typeof e && null !== e)
							throw new TypeError('Super expression must either be null or a function');
						(t.prototype = Object.create(e && e.prototype, {
							constructor: { value: t, writable: !0, configurable: !0 },
						})),
							e && u(t, e);
					})(e, o.default),
					(function (t, e, i) {
						e && a(t.prototype, e), i && a(t, i);
					})(e, [
						{
							key: 'setOptions',
							value: function () {
								var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
									e = t.circle1 || {},
									i = t.circle2 || {},
									r = t.circle3 || {},
									o = t.circle4 || {},
									s = t.text || {};
								(this.speed1 = e.speed || 0.5),
									(this.color1 = e.color || n.COLOR.red),
									(this.speed2 = i.speed || -0.5),
									(this.color2 = i.color || n.COLOR.yellow),
									(this.speed3 = r.speed || 0.5),
									(this.color3 = r.color || n.COLOR.blue),
									(this.speed4 = o.speed || -0.5),
									(this.color4 = o.color || n.COLOR.grey),
									(this.textColor = s.color || n.COLOR.green),
									(this.textValue = s.value || '');
							},
						},
						{
							key: 'drawObject',
							value: function () {
								(this._degree1 = r.default.getNextAngleByDegree(this._degree1, this.speed1)),
									(this._degree2 = r.default.getNextAngleByDegree(this._degree2, this.speed2)),
									(this._degree3 = r.default.getNextAngleByDegree(this._degree3, this.speed3)),
									(this._degree4 = r.default.getNextAngleByDegree(this._degree4, this.speed4));
								var t = r.default.getAngleByDegree(this._degree1),
									e = r.default.getAngleByDegree(this._degree2),
									i = r.default.getAngleByDegree(this._degree3),
									o = r.default.getAngleByDegree(this._degree4);
								this._ctx.translate(100, 100),
									this._ctx.rotate(t),
									(this._ctx.strokeStyle = this.color1),
									(this._ctx.lineWidth = 8);
								for (var n = 0.5, s = 0, h = n, a = 0; a < 6; a++)
									this._ctx.beginPath(),
										this._ctx.arc(0, 0, 90, Math.PI * s, Math.PI * h),
										this._ctx.stroke(),
										this._ctx.closePath(),
										(h = (s = h + 0.02) + (n /= 1.7));
								this._ctx.restore(), this.save(), this._ctx.translate(100, 100), this._ctx.rotate(i);
								for (var l = 0; l < 360; l += 9) {
									var u = r.default.getAngleByDegree(l),
										c = 64 * Math.cos(u),
										f = 64 * Math.sin(u);
									this._shape.fillCircle(c, f, 3, this.color3);
								}
								this._ctx.restore(), this.save(), this._ctx.translate(100, 100), this._ctx.rotate(e);
								for (var _ = 0; _ < 360; _ += 8) {
									var d = r.default.getAngleByDegree(_),
										p = 70 * Math.cos(d),
										b = 70 * Math.sin(d),
										y = 83 * Math.cos(d),
										v = 83 * Math.sin(d);
									this._shape.line(p, b, y, v, 6, this.color2);
								}
								this._ctx.restore(),
									this.save(),
									this._ctx.translate(100, 100),
									this._ctx.rotate(o),
									(this._ctx.lineWidth = 5),
									(this._ctx.strokeStyle = this.color4),
									(s = 0),
									(h = n = 1.76 / 12);
								for (var g = 0; g < 12; g++)
									this._ctx.beginPath(),
										this._ctx.arc(0, 0, 56, Math.PI * s, Math.PI * h),
										this._ctx.stroke(),
										this._ctx.closePath(),
										(h = (s = h + 0.02) + n);
								this._ctx.restore(),
									this.save(),
									this._shape.fillText(this.textValue, 100, 110, this._font, 'center', this.textColor);
							},
						},
					]),
					e
				);
			})();
			(e.default = c), (t.exports = e.default);
		},
		function (t, e, i) {
			'use strict';
			Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
			var r = i(0),
				o = s(i(2)),
				n = s(i(1));
			function s(t) {
				return t && t.__esModule ? t : { default: t };
			}
			function h(t) {
				return (h =
					'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
						? function (t) {
								return typeof t;
						  }
						: function (t) {
								return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
									? 'symbol'
									: typeof t;
						  })(t);
			}
			function a(t, e) {
				for (var i = 0; i < e.length; i++) {
					var r = e[i];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(t, r.key, r);
				}
			}
			function l(t, e) {
				return !e || ('object' !== h(e) && 'function' != typeof e)
					? (function (t) {
							if (void 0 === t)
								throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return t;
					  })(t)
					: e;
			}
			function u(t, e) {
				return (u =
					Object.setPrototypeOf ||
					function (t, e) {
						return (t.__proto__ = e), t;
					})(t, e);
			}
			var c = (function (t) {
				function e(t) {
					var i,
						r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					!(function (t, e) {
						if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
					})(this, e);
					var o = r.viewWidth || 200;
					return (
						((i = l(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, r, o, 100)))._lineWidth = 5),
						(i._arrowWidth = 30),
						(i._pctHeight = 30),
						(i._actualPctHeight = i._pctHeight - i._lineWidth / 2),
						(i._meterWidth = i._viewWidth - 2 * i._arrowWidth),
						(i._meterHeight = 100 - i._pctHeight - i._lineWidth / 2),
						(i._middleBarHeight = i._meterHeight / 2 + i._pctHeight),
						(i._barX = (i._percentageValue / 100) * i._meterWidth + i._arrowWidth),
						(i._nextBarX = i._barX),
						(i._arrow = null),
						(i._arrowSpeed = 0.6),
						(i._leftArrowX = -5),
						(i._rightArrowX = i._viewWidth + 5),
						i
					);
				}
				return (
					(function (t, e) {
						if ('function' != typeof e && null !== e)
							throw new TypeError('Super expression must either be null or a function');
						(t.prototype = Object.create(e && e.prototype, {
							constructor: { value: t, writable: !0, configurable: !0 },
						})),
							e && u(t, e);
					})(e, n.default),
					(function (t, e, i) {
						e && a(t.prototype, e), i && a(t, i);
					})(e, [
						{
							key: 'setOptions',
							value: function () {
								var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
									e = t.bar || {},
									i = t.marker || {};
								(this.markerBgColor = i.bgColor || r.COLOR.black),
									(this.markerFontColor = i.fontColor || r.COLOR.white),
									(this.speed = e.speed || 5),
									(this.fillColor = e.fillColor || r.COLOR.red),
									(this.bgColor = e.bgColor || r.COLOR.lightWhite),
									(this._lineColor = e.borderColor || r.COLOR.lightGreen),
									(this._percentageValue = t.value || 0),
									(this.displayValue = t.displayValue || ''),
									(this.arrowColor = t.arrowColor || r.COLOR.blue);
							},
						},
						{
							key: 'drawObject',
							value: function () {
								(this._ctx.globalCompositeOperation = 'destination-over'),
									this._ctx.beginPath(),
									this._ctx.rect(this._arrowWidth, this._pctHeight, this._barX - this._arrowWidth, this._meterHeight),
									this._ctx.clip(),
									this._shape.fillText(
										this.displayValue,
										this._viewWidth / 2,
										75,
										'30px Arial',
										'center',
										this.bgColor,
									),
									(this._ctx.fillStyle = this.fillColor),
									this._ctx.fillRect(
										this._arrowWidth,
										this._pctHeight,
										this._barX - this._arrowWidth,
										this._meterHeight,
									),
									this._ctx.restore(),
									this.save(),
									(this._ctx.globalCompositeOperation = 'destination-over'),
									this._ctx.beginPath(),
									this._ctx.rect(
										this._barX,
										this._pctHeight,
										this._viewWidth - this._barX - this._arrowWidth,
										this._meterHeight,
									),
									this._ctx.clip(),
									this._shape.fillText(
										this.displayValue,
										this._viewWidth / 2,
										75,
										'30px Arial',
										'center',
										this.fillColor,
									),
									this._shape.fillRect(
										this._barX,
										this._pctHeight,
										this._viewWidth - this._barX - this._arrowWidth,
										this._meterHeight,
										this.bgColor,
									),
									this._ctx.restore(),
									this.save(),
									(this._ctx.globalCompositeOperation = 'source-over'),
									(this._ctx.lineWidth = this._lineWidth),
									(this._ctx.strokeStyle = this._lineColor),
									this._ctx.beginPath(),
									this._ctx.rect(this._arrowWidth, this._pctHeight, this._meterWidth, this._meterHeight),
									this._ctx.stroke(),
									this._ctx.closePath(),
									(this._ctx.fillStyle = this.markerBgColor),
									this._ctx.fillRect(this._barX - 25, 0, 50, this._actualPctHeight),
									this._shape.fillText(
										this._percentageValue + '%',
										this._barX,
										20,
										'16px Arial',
										'center',
										this.markerFontColor,
									),
									this._ctx.beginPath(),
									(this._ctx.fillStyle = this.markerBgColor),
									this._ctx.moveTo(this._barX - 8, this._actualPctHeight - this._lineWidth / 2),
									this._ctx.lineTo(this._barX, this._pctHeight + this._lineWidth / 2),
									this._ctx.lineTo(this._barX + 8, this._actualPctHeight - this._lineWidth / 2),
									this._ctx.fill(),
									this._ctx.closePath(),
									null === this._arrow
										? (this.drawLeftArrow(), this.drawRightArrow())
										: 'left' === this._arrow
										? this.drawLeftArrow()
										: this.drawRightArrow(),
									(this._barX = o.default.getNextPos(this._barX, this._nextBarX, this.speed));
							},
						},
						{
							key: 'drawLeftArrow',
							value: function () {
								this._leftArrowX <= 0
									? (this._leftArrowX = this._arrowWidth - 3)
									: (this._leftArrowX = o.default.getNextPos(this._leftArrowX, 0, -this._arrowSpeed)),
									this._shape.fillTriangle(
										this._leftArrowX,
										this._actualPctHeight + 10,
										this._leftArrowX - 20,
										this._middleBarHeight,
										this._leftArrowX,
										90,
										this.arrowColor,
									);
							},
						},
						{
							key: 'drawRightArrow',
							value: function () {
								this._rightArrowX >= this._viewWidth
									? (this._rightArrowX = this._arrowWidth + 3 + this._meterWidth)
									: (this._rightArrowX = o.default.getNextPos(this._rightArrowX, this._viewWidth, this._arrowSpeed)),
									this._shape.fillTriangle(
										this._rightArrowX,
										this._actualPctHeight + 10,
										this._rightArrowX + 20,
										this._middleBarHeight,
										this._rightArrowX,
										90,
										this.arrowColor,
									);
							},
						},
						{
							key: 'value',
							set: function (t) {
								(t >= 0 || t <= 100) &&
									(t < this._percentageValue
										? ((this.speed = -Math.abs(this.speed)), (this._arrow = 'left'))
										: t > this._percentageValue
										? ((this.speed = Math.abs(this.speed)), (this._arrow = 'right'))
										: (this._arrow = null),
									(this._percentageValue = Math.floor(t)),
									(this._nextBarX = (this._percentageValue / 100) * this._meterWidth + this._arrowWidth));
							},
						},
					]),
					e
				);
			})();
			(e.default = c), (t.exports = e.default);
		},
		function (t, e, i) {
			'use strict';
			Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
			var r = i(0),
				o = (function (t) {
					return t && t.__esModule ? t : { default: t };
				})(i(1));
			function n(t) {
				return (n =
					'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
						? function (t) {
								return typeof t;
						  }
						: function (t) {
								return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
									? 'symbol'
									: typeof t;
						  })(t);
			}
			function s(t, e) {
				for (var i = 0; i < e.length; i++) {
					var r = e[i];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(t, r.key, r);
				}
			}
			function h(t, e) {
				return !e || ('object' !== n(e) && 'function' != typeof e)
					? (function (t) {
							if (void 0 === t)
								throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return t;
					  })(t)
					: e;
			}
			function a(t, e) {
				return (a =
					Object.setPrototypeOf ||
					function (t, e) {
						return (t.__proto__ = e), t;
					})(t, e);
			}
			var l = (function (t) {
				function e(t) {
					var i,
						r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					!(function (t, e) {
						if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
					})(this, e);
					var o = r.viewWidth || 100,
						n = r.viewHeight || 200;
					return (
						((i = h(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, r, o, n)))._queue = []),
						(i._arcWidth = 10),
						i
					);
				}
				return (
					(function (t, e) {
						if ('function' != typeof e && null !== e)
							throw new TypeError('Super expression must either be null or a function');
						(t.prototype = Object.create(e && e.prototype, {
							constructor: { value: t, writable: !0, configurable: !0 },
						})),
							e && a(t, e);
					})(e, o.default),
					(function (t, e, i) {
						e && s(t.prototype, e), i && s(t, i);
					})(e, [
						{
							key: 'setOptions',
							value: function () {
								var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
								(this._barHeight = t.barHeight || 20),
									(this._speed = t.speed || 5),
									(this._space = t.space || 5),
									(this._maxQueueCapacity = t.maxQueueCapacity || 20);
							},
						},
						{
							key: 'drawObject',
							value: function () {
								for (
									var t = Math.floor(this._viewHeight / (this._barHeight + this._space)),
										e = Math.min(this._queue.length, t),
										i = 0;
									i < e;
									i++
								) {
									var r = this._queue[i],
										o = (this._barHeight + this._space) * i + this._space;
									o < r.y ? (r.y -= this._speed) : (r.y = o),
										this._shape.fillRect(
											r.x,
											r.y,
											this._viewWidth - 2 * (this._arcWidth + r.space),
											this._barHeight,
											r.color,
										),
										this._ctx.beginPath(),
										this._ctx.moveTo(r.x, r.y),
										this._ctx.quadraticCurveTo(
											r.x - this._arcWidth,
											r.y + this._barHeight / 2,
											r.x,
											r.y + this._barHeight,
										),
										this._ctx.fill(),
										this._ctx.closePath(),
										this._ctx.beginPath(),
										this._ctx.moveTo(this._viewWidth - this._arcWidth - r.space, r.y),
										this._ctx.quadraticCurveTo(
											this._viewWidth - r.space,
											r.y + this._barHeight / 2,
											this._viewWidth - this._arcWidth - r.space,
											r.y + this._barHeight,
										),
										this._ctx.fill(),
										this._ctx.closePath();
								}
							},
						},
						{
							key: 'push',
							value: function () {
								var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
									e = t.color || r.COLOR.blue,
									i = t.space || 0;
								this._queue.length >= this._maxQueueCapacity && this.pop(),
									this._queue.push({
										x: this._arcWidth + i,
										y: this._viewHeight + this._barHeight,
										color: e,
										space: i,
									});
							},
						},
						{
							key: 'pop',
							value: function () {
								this._queue.length > 0 && this._queue.shift();
							},
						},
						{
							key: 'queueSize',
							get: function () {
								return this._queue.length;
							},
						},
					]),
					e
				);
			})();
			(e.default = l), (t.exports = e.default);
		},
		function (t, e, i) {
			'use strict';
			Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
			var r = s(i(2)),
				o = i(0),
				n = s(i(1));
			function s(t) {
				return t && t.__esModule ? t : { default: t };
			}
			function h(t) {
				return (h =
					'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
						? function (t) {
								return typeof t;
						  }
						: function (t) {
								return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
									? 'symbol'
									: typeof t;
						  })(t);
			}
			function a(t, e) {
				for (var i = 0; i < e.length; i++) {
					var r = e[i];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(t, r.key, r);
				}
			}
			function l(t, e) {
				return !e || ('object' !== h(e) && 'function' != typeof e)
					? (function (t) {
							if (void 0 === t)
								throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return t;
					  })(t)
					: e;
			}
			function u(t, e, i) {
				return (u =
					'undefined' != typeof Reflect && Reflect.get
						? Reflect.get
						: function (t, e, i) {
								var r = (function (t, e) {
									for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = c(t)); );
									return t;
								})(t, e);
								if (r) {
									var o = Object.getOwnPropertyDescriptor(r, e);
									return o.get ? o.get.call(i) : o.value;
								}
						  })(t, e, i || t);
			}
			function c(t) {
				return (c = Object.setPrototypeOf
					? Object.getPrototypeOf
					: function (t) {
							return t.__proto__ || Object.getPrototypeOf(t);
					  })(t);
			}
			function f(t, e) {
				return (f =
					Object.setPrototypeOf ||
					function (t, e) {
						return (t.__proto__ = e), t;
					})(t, e);
			}
			var _ = (function (t) {
				function e(t) {
					var i,
						r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					!(function (t, e) {
						if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
					})(this, e);
					var o = r.viewWidth || 200;
					return (
						((i = l(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, r, o, 100)))._queue = []),
						(i._lastSec = 0),
						(i._timer = null),
						i.drawSeconds(),
						i
					);
				}
				return (
					(function (t, e) {
						if ('function' != typeof e && null !== e)
							throw new TypeError('Super expression must either be null or a function');
						(t.prototype = Object.create(e && e.prototype, {
							constructor: { value: t, writable: !0, configurable: !0 },
						})),
							e && f(t, e);
					})(e, n.default),
					(function (t, e, i) {
						e && a(t.prototype, e), i && a(t, i);
					})(e, [
						{
							key: 'setOptions',
							value: function () {
								var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
								(this._speed = t.speed || 2),
									(this._fontColor = t.fontColor || o.COLOR.black),
									(this._maxQueueCapacity = t.maxQueueCapacity || 30);
							},
						},
						{
							key: 'postConstructor',
							value: function () {
								u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), 'postConstructor', this).call(this),
									this.tick();
							},
						},
						{
							key: 'destroy',
							value: function () {
								null != this._timer && clearInterval(this._timer),
									u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), 'destroy', this).call(this);
							},
						},
						{
							key: 'beat',
							value: function () {
								var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
									e = t.color || o.COLOR.green,
									i = t.space || 0;
								this._queue.length >= this._maxQueueCapacity && this._queue.shift(),
									this._queue.push({ time: null, x: -30, color: e, space: i });
							},
						},
						{
							key: 'tick',
							value: function () {
								var t = this;
								null == this._timer &&
									(this._timer = setInterval(function () {
										t.drawSeconds();
									}, 1e3));
							},
						},
						{
							key: 'drawSeconds',
							value: function () {
								this._queue.length >= this._maxQueueCapacity && this._queue.shift();
								var t = new Date(),
									e = r.default.leftPadZero(t.getMinutes()) + ':' + r.default.leftPadZero(t.getSeconds());
								e !== this._lastSec && (this._queue.push({ time: e, x: -30 }), (this._lastSec = e));
							},
						},
						{
							key: 'drawObject',
							value: function () {
								(this._ctx.textAlign = 'center'),
									(this._ctx.font = '12px Arial'),
									this._shape.fillRect(0, 50, this._viewWidth, 2, this._fontColor);
								for (var t = 0; t < this._queue.length; t++) {
									var e = this._queue[t];
									null != e.time
										? ((this._ctx.fillStyle = this._fontColor),
										  this._ctx.fillText(e.time, e.x, 90),
										  this._shape.fillRect(e.x - 1, 45, 2, 12, this._fontColor))
										: ((this._ctx.fillStyle = e.color),
										  this._ctx.beginPath(),
										  this._ctx.moveTo(e.x - 10, 50),
										  this._ctx.quadraticCurveTo(e.x - 5, 2 * e.space - 20, e.x, 50),
										  this._ctx.quadraticCurveTo(e.x + 5, 100 - 1 * e.space, e.x + 10, 50),
										  this._ctx.closePath(),
										  this._ctx.fill()),
										(e.x += this._speed);
								}
							},
						},
					]),
					e
				);
			})();
			(e.default = _), (t.exports = e.default);
		},
		function (t, e, i) {
			'use strict';
			Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
			var r = s(i(1)),
				o = i(0),
				n = s(i(2));
			function s(t) {
				return t && t.__esModule ? t : { default: t };
			}
			function h(t) {
				return (h =
					'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
						? function (t) {
								return typeof t;
						  }
						: function (t) {
								return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
									? 'symbol'
									: typeof t;
						  })(t);
			}
			function a(t, e) {
				for (var i = 0; i < e.length; i++) {
					var r = e[i];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(t, r.key, r);
				}
			}
			function l(t, e) {
				return !e || ('object' !== h(e) && 'function' != typeof e)
					? (function (t) {
							if (void 0 === t)
								throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return t;
					  })(t)
					: e;
			}
			function u(t, e) {
				return (u =
					Object.setPrototypeOf ||
					function (t, e) {
						return (t.__proto__ = e), t;
					})(t, e);
			}
			var c = (function (t) {
				function e(t) {
					var i,
						r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					!(function (t, e) {
						if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
					})(this, e);
					var o = r.viewHeight || 200;
					return (
						((i = l(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, r, 100, o)))._lineWidth = 3),
						(i._numberHeight = 20),
						(i._minMax = 'min'),
						(i._meterWidth = i._viewWidth / 2),
						(i._meterHeight = i._viewHeight - 2 * i._numberHeight),
						(i._numberStart = (i._viewWidth - i._meterWidth - i._lineWidth) / 2),
						(i._actualValue = i._value),
						(i._barY =
							i._viewHeight -
							((i._value - i._minValue) / (i._maxValue - i._minValue)) * i._meterHeight -
							i._numberHeight),
						(i._nextBarY = i._barY),
						i
					);
				}
				return (
					(function (t, e) {
						if ('function' != typeof e && null !== e)
							throw new TypeError('Super expression must either be null or a function');
						(t.prototype = Object.create(e && e.prototype, {
							constructor: { value: t, writable: !0, configurable: !0 },
						})),
							e && u(t, e);
					})(e, r.default),
					(function (t, e, i) {
						e && a(t.prototype, e), i && a(t, i);
					})(e, [
						{
							key: 'setOptions',
							value: function () {
								var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
									e = t.min || {},
									i = t.max || {},
									r = t.bar || {},
									n = t.marker || {};
								(this._minFontColor = e.fontColor || o.COLOR.white),
									(this._minValue = e.value || 0),
									(this._minBgColor = e.bgColor || o.COLOR.red),
									(this._maxFontColor = i.fontColor || o.COLOR.white),
									(this._maxValue = i.value || 100),
									(this._maxBgColor = i.bgColor || o.COLOR.blue),
									(this._barBorderColor = r.borderColor || o.COLOR.black),
									(this.barFillColor = r.fillColor || o.COLOR.green),
									(this._isGraident = r.graident || !1),
									(this._speed = r.speed || 5),
									(this.markerBgColor = n.bgColor || o.COLOR.yellow),
									(this._markerFontColor = n.fontColor || o.COLOR.white),
									(this._value = t.value || 0);
							},
						},
						{
							key: 'drawObject',
							value: function () {
								var t = this.barFillColor;
								if (this._isGraident) {
									var e = this._ctx.createLinearGradient(
										this._viewWidth / 2,
										this._barY,
										this._viewWidth / 2,
										this._meterHeight + this._numberHeight,
									);
									e.addColorStop(0, this.barFillColor), e.addColorStop(1, 'white'), (t = e);
								}
								this._shape.fillRect(
									(this._viewWidth - this._meterWidth) / 2,
									this._barY,
									this._meterWidth,
									this._viewHeight - this._barY - this._numberHeight,
									t,
								),
									this._ctx.beginPath(),
									(this._ctx.lineWidth = this._lineWidth),
									(this._ctx.strokeStyle = this._barBorderColor),
									this._ctx.rect(
										(this._viewWidth - this._meterWidth) / 2,
										this._numberHeight,
										this._meterWidth,
										this._meterHeight,
									),
									this._ctx.stroke(),
									this._ctx.closePath(),
									this.drawMin(),
									this.drawMax(),
									this.drawMarker(),
									(this._barY = n.default.getNextPos(this._barY, this._nextBarY, this._speed));
							},
						},
						{
							key: 'drawMin',
							value: function () {
								this._shape.fillRect(
									this._numberStart,
									this._viewHeight - this._numberHeight - this._lineWidth / 2,
									this._meterWidth + this._lineWidth,
									this._numberHeight + this._lineWidth / 2,
									this._minBgColor,
								),
									this._shape.fillText(
										this._minValue,
										this._meterWidth,
										this._meterHeight + this._numberHeight + 15,
										'15px Arial',
										'center',
										this._minFontColor,
									);
							},
						},
						{
							key: 'drawMax',
							value: function () {
								this._shape.fillRect(
									this._numberStart,
									0,
									this._meterWidth + this._lineWidth,
									this._numberHeight + this._lineWidth / 2,
									this._maxBgColor,
								),
									this._shape.fillText(
										this._maxValue,
										this._meterWidth,
										this._numberHeight - 4,
										'15px Arial',
										'center',
										this._maxFontColor,
									);
							},
						},
						{
							key: 'drawMarker',
							value: function () {
								var t = 'max' === this._minMax || 'min' === this._minMax ? this._actualValue : this._value;
								this._shape.fillRect(
									this._numberStart + this._meterWidth + this._lineWidth,
									this._barY - 8,
									this._viewWidth - (this._numberStart + this._meterWidth + this._lineWidth),
									16,
									this.markerBgColor,
								),
									this._shape.fillRect(
										0,
										this._barY - this._lineWidth / 2,
										this._numberStart + this._meterWidth + this._lineWidth,
										this._lineWidth,
										this.markerBgColor,
									),
									this._shape.fillText(
										t,
										((this._viewWidth - this._meterWidth) / 4) * 3 + this._meterWidth,
										this._barY + 4,
										'10px Arial',
										'center',
										this._markerFontColor,
									);
							},
						},
						{
							key: 'value',
							set: function (t) {
								var e = t;
								(this._actualValue = e),
									e >= this._maxValue
										? ((this._minMax = 'max'), (e = this._maxValue))
										: e <= this._minValue
										? ((this._minMax = 'min'), (e = this._minValue))
										: (this._minMax = 'normal'),
									(this._speed = e < this._value ? Math.abs(this._speed) : -Math.abs(this._speed)),
									(this._nextBarY =
										this._viewHeight -
										((e - this._minValue) / (this._maxValue - this._minValue)) * this._meterHeight -
										this._numberHeight),
									(this._value = e);
							},
						},
					]),
					e
				);
			})();
			(e.default = c), (t.exports = e.default);
		},
		function (t, e, i) {
			'use strict';
			Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
			var r = i(0),
				o = s(i(2)),
				n = s(i(1));
			function s(t) {
				return t && t.__esModule ? t : { default: t };
			}
			function h(t) {
				return (h =
					'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
						? function (t) {
								return typeof t;
						  }
						: function (t) {
								return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
									? 'symbol'
									: typeof t;
						  })(t);
			}
			function a(t, e) {
				for (var i = 0; i < e.length; i++) {
					var r = e[i];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(t, r.key, r);
				}
			}
			function l(t, e) {
				return !e || ('object' !== h(e) && 'function' != typeof e)
					? (function (t) {
							if (void 0 === t)
								throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return t;
					  })(t)
					: e;
			}
			function u(t, e) {
				return (u =
					Object.setPrototypeOf ||
					function (t, e) {
						return (t.__proto__ = e), t;
					})(t, e);
			}
			var c = (function (t) {
				function e(t, i) {
					var r;
					return (
						(function (t, e) {
							if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
						})(this, e),
						((r = l(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i, 200, 200)))._degree = 0),
						r
					);
				}
				return (
					(function (t, e) {
						if ('function' != typeof e && null !== e)
							throw new TypeError('Super expression must either be null or a function');
						(t.prototype = Object.create(e && e.prototype, {
							constructor: { value: t, writable: !0, configurable: !0 },
						})),
							e && u(t, e);
					})(e, n.default),
					(function (t, e, i) {
						e && a(t.prototype, e), i && a(t, i);
					})(e, [
						{
							key: 'setOptions',
							value: function () {
								var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
									e = t.center || {};
								(this.fanColor = t.fanColor || r.COLOR.green),
									(this.centerColor = e.color || r.COLOR.green),
									(this.centerBgColor = e.bgColor || r.COLOR.white),
									(this.speed = t.speed || 1);
							},
						},
						{
							key: 'drawObject',
							value: function () {
								this._degree = o.default.getNextAngleByDegree(this._degree, this.speed);
								var t = o.default.getAngleByDegree(this._degree);
								this._ctx.translate(100, 100),
									this._ctx.rotate(t),
									this._ctx.beginPath(),
									this._ctx.moveTo(0, 0),
									this._ctx.quadraticCurveTo(-60, -80, 0, -90),
									this._ctx.quadraticCurveTo(80, -100, 0, 0),
									this._ctx.quadraticCurveTo(80, -60, 90, 0),
									this._ctx.quadraticCurveTo(100, 80, 0, 0),
									this._ctx.quadraticCurveTo(60, 80, 0, 90),
									this._ctx.quadraticCurveTo(-80, 100, 0, 0),
									this._ctx.quadraticCurveTo(-80, 60, -90, 0),
									this._ctx.quadraticCurveTo(-100, -80, 0, 0),
									(this._ctx.fillStyle = this.fanColor),
									this._ctx.fill(),
									this._ctx.closePath(),
									this._shape.fillCircle(0, 0, 35, this.centerBgColor),
									this._shape.fillCircle(0, 0, 30, this.centerColor),
									this._shape.fillCircle(0, 0, 10, this.centerBgColor);
							},
						},
					]),
					e
				);
			})();
			(e.default = c), (t.exports = e.default);
		},
		function (t, e, i) {
			'use strict';
			function r(t, e) {
				for (var i = 0; i < e.length; i++) {
					var r = e[i];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(t, r.key, r);
				}
			}
			Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
			var o = (function () {
				function t(e, i, r, o, n, s) {
					!(function (t, e) {
						if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
					})(this, t),
						(this._ctx = e),
						(this._barWidth = i),
						(this._verBarHeight = (o - 3 * i) / 2),
						(this._horBarHeight = r - 2 * i),
						(this._dashColor = n),
						(this._numberColor = s);
				}
				return (
					(function (t, e, i) {
						e && r(t.prototype, e), i && r(t, i);
					})(t, [
						{
							key: 'drawColon',
							value: function () {
								this._ctx.beginPath(),
									(this._ctx.fillStyle = this._numberColor),
									this._ctx.fillRect(
										0,
										(2 * this._verBarHeight + this._barWidth) / 3,
										this._barWidth,
										this._barWidth,
									),
									this._ctx.fillRect(
										0,
										((2 * this._verBarHeight + this._barWidth) / 3) * 2 + this._barWidth,
										this._barWidth,
										this._barWidth,
									),
									this._ctx.closePath();
							},
						},
						{
							key: 'drawEmpty',
							value: function () {
								this._ctx.beginPath(),
									(this._ctx.fillStyle = this._dashColor),
									this._ctx.moveTo(0, 0),
									this.topLeft(),
									this.bottomLeft(),
									this.topRight(),
									this.bottomRight(),
									this.top(),
									this.middle(),
									this.bottom(),
									this._ctx.closePath();
							},
						},
						{
							key: 'topLeft',
							value: function () {
								this._ctx.fillRect(0, this._barWidth, this._barWidth, this._verBarHeight);
							},
						},
						{
							key: 'bottomLeft',
							value: function () {
								this._ctx.fillRect(0, 2 * this._barWidth + this._verBarHeight, this._barWidth, this._verBarHeight);
							},
						},
						{
							key: 'topRight',
							value: function () {
								this._ctx.fillRect(
									this._barWidth + this._horBarHeight,
									this._barWidth,
									this._barWidth,
									this._verBarHeight,
								);
							},
						},
						{
							key: 'bottomRight',
							value: function () {
								this._ctx.fillRect(
									this._barWidth + this._horBarHeight,
									2 * this._barWidth + this._verBarHeight,
									this._barWidth,
									this._verBarHeight,
								);
							},
						},
						{
							key: 'top',
							value: function () {
								this._ctx.fillRect(this._barWidth, 0, this._horBarHeight, this._barWidth);
							},
						},
						{
							key: 'middle',
							value: function () {
								this._ctx.fillRect(
									this._barWidth,
									this._barWidth + this._verBarHeight,
									this._horBarHeight,
									this._barWidth,
								);
							},
						},
						{
							key: 'bottom',
							value: function () {
								this._ctx.fillRect(
									this._barWidth,
									2 * this._barWidth + 2 * this._verBarHeight,
									this._horBarHeight,
									this._barWidth,
								);
							},
						},
						{
							key: 'drawNumber',
							value: function (t) {
								switch ((this.drawEmpty(), this._ctx.beginPath(), (this._ctx.fillStyle = this._numberColor), t)) {
									case 0:
										this.top(), this.bottom(), this.topLeft(), this.topRight(), this.bottomLeft(), this.bottomRight();
										break;
									case 1:
										this.topRight(), this.bottomRight();
										break;
									case 2:
										this.top(), this.topRight(), this.middle(), this.bottomLeft(), this.bottom();
										break;
									case 3:
										this.top(), this.middle(), this.bottom(), this.topRight(), this.bottomRight();
										break;
									case 4:
										this.middle(), this.topLeft(), this.topRight(), this.bottomRight();
										break;
									case 5:
										this.top(), this.middle(), this.bottom(), this.topLeft(), this.bottomRight();
										break;
									case 6:
										this.top(), this.middle(), this.bottom(), this.topLeft(), this.bottomLeft(), this.bottomRight();
										break;
									case 7:
										this.top(), this.topRight(), this.bottomRight();
										break;
									case 8:
										this.topLeft(),
											this.bottomLeft(),
											this.topRight(),
											this.bottomRight(),
											this.top(),
											this.middle(),
											this.bottom();
										break;
									case 9:
										this.top(), this.middle(), this.topLeft(), this.topRight(), this.bottomRight();
								}
								this._ctx.closePath();
							},
						},
					]),
					t
				);
			})();
			(e.default = o), (t.exports = e.default);
		},
		function (t, e, i) {
			'use strict';
			Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
			var r = h(i(2)),
				o = i(0),
				n = h(i(1)),
				s = h(i(16));
			function h(t) {
				return t && t.__esModule ? t : { default: t };
			}
			function a(t) {
				return (a =
					'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
						? function (t) {
								return typeof t;
						  }
						: function (t) {
								return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
									? 'symbol'
									: typeof t;
						  })(t);
			}
			function l(t, e) {
				for (var i = 0; i < e.length; i++) {
					var r = e[i];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(t, r.key, r);
				}
			}
			function u(t, e) {
				return !e || ('object' !== a(e) && 'function' != typeof e)
					? (function (t) {
							if (void 0 === t)
								throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return t;
					  })(t)
					: e;
			}
			function c(t, e, i) {
				return (c =
					'undefined' != typeof Reflect && Reflect.get
						? Reflect.get
						: function (t, e, i) {
								var r = (function (t, e) {
									for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = f(t)); );
									return t;
								})(t, e);
								if (r) {
									var o = Object.getOwnPropertyDescriptor(r, e);
									return o.get ? o.get.call(i) : o.value;
								}
						  })(t, e, i || t);
			}
			function f(t) {
				return (f = Object.setPrototypeOf
					? Object.getPrototypeOf
					: function (t) {
							return t.__proto__ || Object.getPrototypeOf(t);
					  })(t);
			}
			function _(t, e) {
				return (_ =
					Object.setPrototypeOf ||
					function (t, e) {
						return (t.__proto__ = e), t;
					})(t, e);
			}
			var d = (function (t) {
				function e(t) {
					var i,
						r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return (
						(function (t, e) {
							if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
						})(this, e),
						((i = u(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, r, 400, 100)))._barWidth = 8),
						(i._space = 12),
						(i._numberWidth = 50),
						(i._numberHeight = 100),
						(i._ds = new s.default(
							i._ctx,
							i._barWidth,
							i._numberWidth,
							i._numberHeight,
							i._dashColor,
							i._numberColor,
						)),
						(i._timer = null),
						i
					);
				}
				return (
					(function (t, e) {
						if ('function' != typeof e && null !== e)
							throw new TypeError('Super expression must either be null or a function');
						(t.prototype = Object.create(e && e.prototype, {
							constructor: { value: t, writable: !0, configurable: !0 },
						})),
							e && _(t, e);
					})(e, n.default),
					(function (t, e, i) {
						e && l(t.prototype, e), i && l(t, i);
					})(e, [
						{
							key: 'postConstructor',
							value: function () {
								this.tick();
							},
						},
						{
							key: 'setOptions',
							value: function () {
								var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
								(this._numberColor = t.numberColor || o.COLOR.red),
									(this._dashColor = t.dashColor || o.COLOR.lightGrey),
									(this._hourOffset = t.hourOffset || 0);
							},
						},
						{
							key: 'destroy',
							value: function () {
								this.stopTick(),
									c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), 'destroy', this).call(this);
							},
						},
						{
							key: 'tick',
							value: function () {
								var t = this;
								null == this._timer &&
									(this._timer = setInterval(function () {
										t.drawTime();
									}, 1e3));
							},
						},
						{
							key: 'stopTick',
							value: function () {
								null != this._timer && (clearInterval(this._timer), (this._timer = null));
							},
						},
						{
							key: 'drawTime',
							value: function () {
								var t = r.default.addHour(this._hourOffset);
								this.clear(),
									this.save(),
									this.drawTwoDigits(this._ds, t.getHours(), this._numberWidth + this._space),
									this._ds.drawColon(),
									this._ctx.translate(this._barWidth + this._space, 0),
									this.drawTwoDigits(this._ds, t.getMinutes(), this._numberWidth + this._space),
									this._ds.drawColon(),
									this._ctx.translate(this._barWidth + this._space, 0),
									this.drawTwoDigits(this._ds, t.getSeconds(), this._numberWidth + this._space),
									this._ctx.restore();
							},
						},
						{
							key: 'drawTwoDigits',
							value: function (t, e, i) {
								if (e < 10) t.drawNumber(0), this._ctx.translate(i, 0), t.drawNumber(e), this._ctx.translate(i, 0);
								else {
									var r = Math.floor(e / 10),
										o = e % 10;
									t.drawNumber(r), this._ctx.translate(i, 0), t.drawNumber(o), this._ctx.translate(i, 0);
								}
							},
						},
					]),
					e
				);
			})();
			(e.default = d), (t.exports = e.default);
		},
		function (t, e, i) {
			'use strict';
			function r(t, e) {
				for (var i = 0; i < e.length; i++) {
					var r = e[i];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(t, r.key, r);
				}
			}
			Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
			var o = (function () {
				function t(e) {
					!(function (t, e) {
						if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
					})(this, t),
						(this._ctx = e);
				}
				return (
					(function (t, e, i) {
						e && r(t.prototype, e), i && r(t, i);
					})(t, [
						{
							key: 'fillRect',
							value: function (t, e, i, r, o) {
								this._ctx.beginPath(),
									(this._ctx.fillStyle = o),
									this._ctx.fillRect(t, e, i, r),
									this._ctx.closePath();
							},
						},
						{
							key: 'fillTriangle',
							value: function (t, e, i, r, o, n, s) {
								this._ctx.beginPath(),
									(this._ctx.fillStyle = s),
									this._ctx.moveTo(t, e),
									this._ctx.lineTo(i, r),
									this._ctx.lineTo(o, n),
									this._ctx.fill(),
									this._ctx.closePath();
							},
						},
						{
							key: 'fillText',
							value: function (t, e, i, r, o, n) {
								this._ctx.beginPath(),
									(this._ctx.font = r),
									(this._ctx.textAlign = o),
									(this._ctx.fillStyle = n),
									this._ctx.fillText(t, e, i),
									this._ctx.closePath();
							},
						},
						{
							key: 'line',
							value: function (t, e, i, r, o, n) {
								this._ctx.beginPath(),
									(this._ctx.lineWidth = o),
									(this._ctx.strokeStyle = n),
									this._ctx.moveTo(t, e),
									this._ctx.lineTo(i, r),
									this._ctx.closePath(),
									this._ctx.stroke();
							},
						},
						{
							key: 'fillCircle',
							value: function (t, e, i, r) {
								this._ctx.beginPath(),
									(this._ctx.fillStyle = r),
									this._ctx.arc(t, e, i, 0, 2 * Math.PI),
									this._ctx.fill(),
									this._ctx.closePath();
							},
						},
					]),
					t
				);
			})();
			(e.default = o), (t.exports = e.default);
		},
		function (t, e, i) {
			'use strict';
			Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
			var r = i(0),
				o = s(i(2)),
				n = s(i(1));
			function s(t) {
				return t && t.__esModule ? t : { default: t };
			}
			function h(t) {
				return (h =
					'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
						? function (t) {
								return typeof t;
						  }
						: function (t) {
								return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
									? 'symbol'
									: typeof t;
						  })(t);
			}
			function a(t, e) {
				for (var i = 0; i < e.length; i++) {
					var r = e[i];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(t, r.key, r);
				}
			}
			function l(t, e) {
				return !e || ('object' !== h(e) && 'function' != typeof e)
					? (function (t) {
							if (void 0 === t)
								throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return t;
					  })(t)
					: e;
			}
			function u(t, e) {
				return (u =
					Object.setPrototypeOf ||
					function (t, e) {
						return (t.__proto__ = e), t;
					})(t, e);
			}
			var c = (function (t) {
				function e(t) {
					var i,
						r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					!(function (t, e) {
						if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
					})(this, e);
					var o = r.viewWidth || 100;
					return (
						((i = l(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, r, o, 200)))._barWidth =
							i._viewWidth - 2 * i._space),
						(i._barHeight = 15),
						(i._currBar = 0),
						(i._numberOfBars = Math.floor(((i._value - i._min) / (i._max - i._min)) * 10)),
						(i._barMax = 100 * i._numberOfBars),
						i
					);
				}
				return (
					(function (t, e) {
						if ('function' != typeof e && null !== e)
							throw new TypeError('Super expression must either be null or a function');
						(t.prototype = Object.create(e && e.prototype, {
							constructor: { value: t, writable: !0, configurable: !0 },
						})),
							e && u(t, e);
					})(e, n.default),
					(function (t, e, i) {
						e && a(t.prototype, e), i && a(t, i);
					})(e, [
						{
							key: 'setOptions',
							value: function () {
								var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
								(this._min = t.min || 0),
									(this._max = t.max || 100),
									(this._value = t.value || 0),
									(this.dashColor = t.dashColor || r.COLOR.grey),
									(this.barColor = t.barColor || r.COLOR.green),
									(this.speed = t.speed || 5),
									(this._isGradient = t.gradient || !1),
									(this._space = t.space || 20);
							},
						},
						{
							key: 'drawObject',
							value: function () {
								for (var t = 0; t < 10; t++) {
									var e = 5 + 20 * t;
									this._shape.fillRect(this._space, e, this._barWidth, this._barHeight, this.dashColor);
								}
								if (this._currBar >= this._barMax) this._currBar = -100;
								else {
									var i = this._currBar / 100,
										n = [];
									this._isGradient
										? (n = o.default.generateGradientColor(r.COLOR.white, this.barColor, i))
										: (this._ctx.fillStyle = this.barColor);
									for (var s = 0; s < i; s++) {
										var h = this._viewHeight - (15 + 20 * s);
										this._isGradient && (this._ctx.fillStyle = '#' + n[s]),
											this._ctx.beginPath(),
											this._ctx.fillRect(this._space, h, this._barWidth, this._barHeight),
											this._ctx.closePath();
									}
									this._currBar += this.speed;
								}
							},
						},
						{
							key: 'value',
							set: function (t) {
								(this._value = t),
									(this._numberOfBars = Math.floor(((this._value - this._min) / (this._max - this._min)) * 10)),
									(this._barMax = 100 * this._numberOfBars);
							},
						},
						{
							key: 'valuePct',
							get: function () {
								return Math.floor(((this._value - this._min) / (this._max - this._min)) * 100);
							},
						},
					]),
					e
				);
			})();
			(e.default = c), (t.exports = e.default);
		},
		function (t, e, i) {
			'use strict';
			Object.defineProperty(e, '__esModule', { value: !0 }),
				Object.defineProperty(e, 'Settings', {
					enumerable: !0,
					get: function () {
						return o.default;
					},
				}),
				Object.defineProperty(e, 'BarMeter', {
					enumerable: !0,
					get: function () {
						return n.default;
					},
				}),
				Object.defineProperty(e, 'DigitalClock', {
					enumerable: !0,
					get: function () {
						return s.default;
					},
				}),
				Object.defineProperty(e, 'RoundFan', {
					enumerable: !0,
					get: function () {
						return h.default;
					},
				}),
				Object.defineProperty(e, 'VolumeMeter', {
					enumerable: !0,
					get: function () {
						return a.default;
					},
				}),
				Object.defineProperty(e, 'Heartbeat', {
					enumerable: !0,
					get: function () {
						return l.default;
					},
				}),
				Object.defineProperty(e, 'MessageQueue', {
					enumerable: !0,
					get: function () {
						return u.default;
					},
				}),
				Object.defineProperty(e, 'TextMeter', {
					enumerable: !0,
					get: function () {
						return c.default;
					},
				}),
				Object.defineProperty(e, 'SpeedCircle', {
					enumerable: !0,
					get: function () {
						return f.default;
					},
				}),
				Object.defineProperty(e, 'TextBox', {
					enumerable: !0,
					get: function () {
						return _.default;
					},
				}),
				Object.defineProperty(e, 'NetworkGraph', {
					enumerable: !0,
					get: function () {
						return d.default;
					},
				}),
				Object.defineProperty(e, 'HexGrid', {
					enumerable: !0,
					get: function () {
						return p.default;
					},
				}),
				Object.defineProperty(e, 'ScoreBoard', {
					enumerable: !0,
					get: function () {
						return b.default;
					},
				});
			var r = y(i(5)),
				o = y(i(3)),
				n = y(i(19)),
				s = y(i(17)),
				h = y(i(15)),
				a = y(i(14)),
				l = y(i(13)),
				u = y(i(12)),
				c = y(i(11)),
				f = y(i(10)),
				_ = y(i(9)),
				d = y(i(8)),
				p = y(i(7)),
				b = y(i(6));
			function y(t) {
				return t && t.__esModule ? t : { default: t };
			}
			r.default.render();
		},
	]);
});
//# sourceMappingURL=zeu.min.js.map

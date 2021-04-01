(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("v-tree-data-table", [], factory);
	else if(typeof exports === 'object')
		exports["v-tree-data-table"] = factory();
	else
		root["v-tree-data-table"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(14);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nodeHelper_js__ = __webpack_require__(9);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    headers: {
      type: Array,
      "default": [],
      required: true
    },
    items: {
      type: Array,
      "default": [],
      required: true
    },
    pagination: {
      type: Object,
      required: true
    },
    totalItems: {
      type: Number,
      required: true
    },
    loading: {
      type: Boolean,
      required: true
    },
    rowsPerPageItems: {
      type: Array,
      "default": function _default() {
        return [5, 10, 25, {
          text: "$vuetify.dataIterator.rowsPerPageAll",
          value: -1
        }];
      }
    },
    rowsPerPageText: {
      type: String,
      "default": "$vuetify.dataTable.rowsPerPageText"
    },
    selectAll: {
      type: [Boolean, String],
      "default": undefined
    },
    value: {
      type: Array,
      "default": undefined
    },
    validDrop: {
      type: Function,
      "default": undefined
    }
  },
  mounted: function mounted() {
    this.setupDragGhosts();
  },
  data: function data() {
    return {
      internalPagination: {},
      flattenedNodes: [],
      overFolder: null,
      draggedNode: null,
      newParentNode: null,
      selected: []
    };
  },
  watch: {
    internalPagination: function internalPagination() {
      // when pagination is changed emit a load
      this.$emit("load", this.internalPagination);
    },
    items: function items() {
      this.flattenNodes();
    },
    value: function value() {
      this.selected = this.value;
    },
    selected: function selected() {
      this.$emit("input", this.selected);
    }
  },
  computed: {
    computedHeaders: function computedHeaders() {
      var headers = this.headers;
      headers.unshift({
        text: "",
        value: "expanded",
        sortable: false
      });
      headers.unshift({
        text: " ",
        value: "sortable",
        sortable: false
      });
      return headers;
    }
  },
  methods: {
    /**
     * Fired when select all is toggled
     */
    toggleSelectAll: function toggleSelectAll() {
      if (this.selected.length > 0) {
        this.selected = [];
      } else {
        this.selected = this.items;
      }
    },

    /*
    Setup drag ghost images
    */
    setupDragGhosts: function setupDragGhosts() {
      this.folderClosedDragGhost = new Image();
      this.folderClosedDragGhost.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfiCAEBCADWj9yyAAAAu0lEQVQ4y+2SoQ6CUBSGv3txXDdnkKQ0M0W5L+BD2Ay+h02fwDcw2Y0m5wsAyWKy0WgGYICFWZQBwY3g/7d//3d2znagcxJzRlxwLWG+syKPgrQK6AWAXrPBpiizTOzZuvhfAQO04sQUE1W6LxYT6V8/y5oQAXrInXHd7sVTLL0zyMbHDjhoswUAgGoL8Ad+B+Si+W+DBBmTNapnxGBAmNkRDoqYpNIpD3aeB2KGwxFtYdbMT7xoxY0O6gWXGzUrgZScUAAAAABJRU5ErkJggg==";
      this.folderClosedDragGhost.height = "24";
      this.folderClosedDragGhost.width = "24";
      this.folderOpenDragGhost = new Image();
      this.folderOpenDragGhost.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfiCAEBDiyyDRfXAAAAe0lEQVQ4y2NgGPqAkYGBgcHYm2ElAzdC8H/DuUZcGpgZGBgYpC4gK2dgYHSQZHx+AJ8N/4lwy1eGiLNbGBiYYK4gqIGLYQ0DAwMDC8yms4z41Rv/Z2BnYEDYQDQY1TA4NEBi+gcDO8H09J/hJ8KGUIZvBI3+xhDKMEwAADaQFZcd2zJpAAAAAElFTkSuQmCC";
      this.folderOpenDragGhost.height = "24";
      this.folderOpenDragGhost.width = "24";
      this.leafDragGhost = new Image();
      this.leafDragGhost.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfiCAEBCCN06K3AAAAAZElEQVQ4y+3TsQmAUAxF0avD/EYEzRvBLSzEHdSRFK0dMPaC8INgZcpwTxMI/AMVAE2E2Gp7gFiSy20LkFZxYl8Q1XK5Hfd9+Sg6gOLMvdUkl1ufm8+xfAnlSqEcwAaN/0+9mwuzISU1axeSPQAAAABJRU5ErkJggg==";
      this.leafDragGhost.height = "24";
      this.leafDragGhost.width = "24";
    },

    /**
     * dragStart handler
     * @param {Event} event Browser Event
     */
    dragStart: function dragStart(event) {
      var draggedNodeId = $(event.target).closest("tr").attr("id");
      this.draggedNode = this.flattenedNodes.filter(function (_node) {
        return _node.id == draggedNodeId;
      })[0];

      if (this.draggedNode.leaf) {
        event.dataTransfer.setDragImage(this.leafDragGhost, -24, -24);
      } else if (this.draggedNode.expanded) {
        event.dataTransfer.setDragImage(this.folderOpenDragGhost, -24, -24);
      } else {
        event.dataTransfer.setDragImage(this.folderClosedDragGhost, -24, -24);
      }
    },

    /**
     * dragEnd handler, clears all active rows
     */
    dragEnd: function dragEnd() {
      this.clearActive();
    },

    /*
    * Slots
    */

    /**
     * dragEnter handler for a slot
     * @param {Event} event Browser Event
     */
    dragEnterSlot: function dragEnterSlot(event) {
      var vm = this;
      var $target = $(event.target);
      this.clearActive();

      if (($target.parents(".drop-row").length > 0 || $target.hasClass(".drop-row")) && this.draggedNode) {
        var validDrop = true;

        if (this.draggedNode && vm.validDrop) {
          validDrop = vm.validDrop(this.draggedNode, $target.parents(".drop-row"), event);
        }

        if (validDrop && parseInt($target.parents(".drop-row").prev().attr("id")) != this.draggedNode.id && parseInt($target.parents(".drop-row").next().attr("id")) != this.draggedNode.id) {
          $target.parents(".drop-row").removeClass("inactive");
          $target.parents(".drop-row").addClass("active");
        }
      }
    },

    /**
     * dragLeave event handler for a slot
     * @param {Event} event Browser Event
     */
    dragLeaveSlot: function dragLeaveSlot(event) {
      $(event.target).parents(".drop-row").removeClass("active");
      $(event.target).parents(".drop-row").addClass("inactive");
    },

    /**
     * dragOver event handler for a slot
     * @param {Event} event Browser Event
     */
    dragOverSlot: function dragOverSlot(event) {
      var vm = this;
      var $target = $(event.target);
      var validDrop = true;

      if (this.draggedNode && vm.validDrop) {
        validDrop = vm.validDrop(this.draggedNode, $target.parents(".drop-row"), event);
      }

      if (validDrop && this.draggedNode && parseInt($target.parents(".drop-row").prev().attr("id")) != this.draggedNode.id && parseInt($target.parents(".drop-row").next().attr("id")) != this.draggedNode.id) {
        event.preventDefault();
      }
    },

    /*
    * Folders
    */

    /**
     * dragEnter event handler for a folder
     * @param {Event} event Browser Event
     */
    dragEnterFolder: function dragEnterFolder(event) {
      var vm = this;
      var $target = $(event.target);
      this.clearActive();
      this.overFolder = $target.parents(".folder")[0];
      var validDrop = true;

      if (this.draggedNode && vm.validDrop) {
        validDrop = vm.validDrop(this.draggedNode, $target.parents(".folder"), event);
      }

      if (this.overFolder) {
        if (this.draggedNode && this.draggedNode.parentNode) {
          if (validDrop && $target.parents(".folder").attr("id") != this.draggedNode.parentNode.id && $target.parents(".folder").attr("id") != this.draggedNode.id) {
            $target.parents(".folder").addClass("active");
          }
        } else if (validDrop && $target.parents(".folder").attr("id") != this.draggedNode.id) {
          $target.parents(".folder").addClass("active");
        }
      }
    },

    /**
     * dragLeave event handler for a folder
     * @param {Event} event Browser Event
     */
    dragLeaveFolder: function dragLeaveFolder(event) {
      var $target = $(event.relatedTarget);

      if (this.overFolder) {
        if (!$.contains(this.overFolder, $target[0])) {
          $(this.overFolder).removeClass("active");
          this.overFolder = null;
        }
      }
    },

    /**
     * dragOver event handler for a folder
     * @param {Event} event Browser Event
     */
    dragOverFolder: function dragOverFolder(event) {
      var vm = this;
      var $target = $(event.target);
      var validDrop = true;

      if (this.draggedNode && vm.validDrop) {
        validDrop = vm.validDrop(this.draggedNode, $target.parents(".folder"), event);
      }

      if (this.draggedNode) {
        if (validDrop && this.draggedNode.parentNode && $target.parents(".folder").attr("id") != this.draggedNode.parentNode.id && $target.parents(".folder").attr("id") != this.draggedNode.id) {
          event.preventDefault();
        } else if (validDrop && $target.parents(".folder").attr("id") != this.draggedNode.id) {
          event.preventDefault();
        }
      }
    },

    /*
    * Leaves
    */

    /**
     * dragEnter event handler for a leaf
     * @param {Event} event Browser Event
     */
    dragEnterLeaf: function dragEnterLeaf(event) {
      var vm = this;
      var $target = $(event.target);
      var validDrop = true;

      if (this.draggedNode, vm.validDrop) {
        validDrop = vm.validDrop(this.draggedNode, $target.parents(".leaf"), event);
      }

      this.clearActive();
      this.overFolder = $target.parents(".leaf")[0];

      if (this.draggedNode) {
        if (validDrop && this.draggedNode.parentNode && $target.parents(".leaf").attr("id") != this.draggedNode.parentNode.id && $target.parents(".leaf").attr("id") != this.draggedNode.id) {
          $target.parents(".leaf").addClass("active");
        } else if (validDrop && $target.parents(".leaf").attr("id") != this.draggedNode.id) {
          $target.parents(".leaf").addClass("active");
        }
      }
    },

    /**
     * dragLeave event handler for a leaf
     * @param {Event} event Browser Event
     */
    dragLeaveLeaf: function dragLeaveLeaf(event) {
      var $target = $(event.relatedTarget);

      if (this.overFolder) {
        if (!$.contains(this.overFolder, $target[0])) {
          $(this.overFolder).removeClass("active");
          this.overFolder = null;
        }
      }
    },

    /**
     * dragOver event handler for a leaf
     * @param {Event} event Browser Event
     */
    dragOverLeaf: function dragOverLeaf(event) {
      var vm = this;
      var $target = $(event.target);
      var validDrop = true;

      if (this.draggedNode, vm.validDrop) {
        validDrop = vm.validDrop(this.draggedNode, $target.parents(".leaf"), event);
      }

      if (this.draggedNode) {
        if (this.draggedNode.parentNode) {
          if (validDrop && $target.parents(".leaf").attr("id") != this.draggedNode.parentNode.id && $target.parents(".leaf").attr("id") != this.draggedNode.id) {
            event.preventDefault();
          }
        } else if (validDrop && $target.parents(".leaf").attr("id") != this.draggedNode.id) {
          event.preventDefault();
        }
      }
    },

    /**
     * drop event handler
     * @param {Event} event Browser Event
     */
    dropRow: function dropRow(event) {
      var vm = this;
      var $target = $(event.target);

      if ($target.parents(".folder").length > 0) {
        var parentNodeId = $(event.target).parents(".folder").attr("id");
        this.newParentNode = this.flattenedNodes.filter(function (_node) {
          return _node.id == parentNodeId;
        })[0];
        $(this.overFolder).removeClass("active");
      } else if ($target.parents(".leaf").length > 0) {
        var _parentNodeId = $(event.target).parents(".leaf").attr("id");

        this.newParentNode = this.flattenedNodes.filter(function (_node) {
          return _node.id == _parentNodeId;
        })[0];
        $(this.overFolder).removeClass("active");
        this.collapseChildren(this.draggedNode);
      } else {
        var previousSiblingId = $(event.target).parents(".drop-row").prev().attr("id");
        var nextSiblingId = $(event.target).parents(".drop-row").next().attr("id");
        this.previousSibling = this.flattenedNodes.filter(function (_node) {
          return _node.id == previousSiblingId;
        })[0];
        this.nextSibling = this.flattenedNodes.filter(function (_node) {
          return _node.id == nextSiblingId;
        })[0]; // remove drag classes

        $(event.target).parents(".drop-row").removeClass("active");
        $(event.target).parents(".drop-row").addClass("inactive");
      }

      this.processDrop();
    },

    /**
     * Process the drop event, move node if needed
     */
    processDrop: function processDrop() {
      var _this = this;

      if (this.draggedNode) {
        var oldParent = this.draggedNode.parentNode;

        if (this.newParentNode) {
          __WEBPACK_IMPORTED_MODULE_0__nodeHelper_js__["a" /* default */].moveNode(this.draggedNode, this.newParentNode);
          this.overFolder = null;
          this.newParentNode = null;
        } else {
          var currentIndex = this.flattenedNodes.indexOf(this.draggedNode);
          var newIndex = 0;
          this.flattenedNodes.splice(currentIndex, 1);

          if (this.previousSibling) {
            newIndex = this.flattenedNodes.indexOf(this.previousSibling) + 1; // If the previous sibilings parent is not the same as the dragged nodes parent then
            // we need to move the dragged node to the parent

            if (this.nextSibling && this.nextSibling.parentNode && this.draggedNode.parentNode && this.draggedNode.parentNode.id && this.nextSibling.parentNode.id != this.draggedNode.parentNode.id) {
              __WEBPACK_IMPORTED_MODULE_0__nodeHelper_js__["a" /* default */].moveNode(this.draggedNode, this.nextSibling.parentNode);
            }

            if (this.nextSibling && this.draggedNode.position > this.nextSibling.position) {
              this.draggedNode.position = this.nextSibling.position;
            } else if (this.previousSibling) {
              this.draggedNode.position = this.previousSibling.position;
            } else {
              this.draggedNode.position = 0;
            }
          } else {
            if (this.draggedNode.parentNode) {
              this.draggedNode.parentNode.children.splice(this.draggedNode.parentNode.children.indexOf(this.draggedNode), 1);
              this.draggedNode.parentNode = null;
              this.draggedNode.depth = 1;
            }

            this.draggedNode.position = 0;
          }

          this.flattenedNodes.splice(newIndex, 0, this.draggedNode);
        }

        var currentNodes = this.unFlattenNodes();
        this.flattenNodes(this.unFlattenNodes());
        this.$emit("drop", this.draggedNode, oldParent, this.draggedNode.parentNode, this.previousSibling, this.nextSibling, this.unFlattenNodes(), function () {
          _this.flattenNodes(currentNodes);
        });
        this.draggedNode = null;
      }
    },

    /**
     * Find the node in items
     * @param {String | Number} nodeId The Node
     * @return {Object} the Node
     */
    findNode: function findNode(nodeId) {
      __WEBPACK_IMPORTED_MODULE_0__nodeHelper_js__["a" /* default */].findNode(nodeId, this.items);
    },

    /**
     * Get the icon for the node
     * @param {Object} node The Node
     */
    expandableIcon: function expandableIcon(node) {
      if (node.expanded) {
        return "folder_open";
      } else {
        return "folder";
      }
    },

    /**
     * Get the style padding for the node
     * @param {Object} node The Node
     */
    nodeStyle: function nodeStyle(node) {
      return {
        paddingLeft: 8 + 12 * node.depth + "px"
      };
    },

    /**
     * Flatten nested nodes
     */
    flattenNodes: function flattenNodes(nodes) {
      nodes = nodes || this.items;
      this.flattenedNodes = __WEBPACK_IMPORTED_MODULE_0__nodeHelper_js__["a" /* default */].flattenNodes(nodes);
    },

    /**
     * UnFlatten flattend nodes
     */
    unFlattenNodes: function unFlattenNodes() {
      return __WEBPACK_IMPORTED_MODULE_0__nodeHelper_js__["a" /* default */].unFlattenNodes(this.flattenedNodes);
    },

    /**
     * Determine if a node should be hidden
     * @param {Object} node The Node
     */
    nodeHidden: function nodeHidden(node) {
      if (!node.parentNode) {
        return null;
      } else if (node.parentNode.expanded) {
        return null;
      } else {
        return "display:none;";
      }
    },

    /**
     * Toggle node from expanded
     * @param {Object} node The Node
     */
    toggleNode: function toggleNode(node) {
      this.$set(node, "expanded", !node.expanded);
      if (!node.expanded) this.collapseChildren(node);
      this.$emit("node-toggle", node);
    },

    /**
     * Collapse all nodes children
     * @param {Object} node The Node
     */
    collapseChildren: function collapseChildren(node) {
      var vm = this;
      this.$set(node, "expanded", false);

      if (node.children) {
        node.children.forEach(function (child) {
          vm.collapseChildren(child);
        });
      }
    },

    /*
    * Helpers
    */

    /**
     * Clear any active classes
     */
    clearActive: function clearActive() {
      $(this.$el).find(".active").removeClass("active");
    }
  }
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_v_tree_data_table_vue__ = __webpack_require__(1);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6295ffe6_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_v_tree_data_table_vue__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(24);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(4)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_v_tree_data_table_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6295ffe6_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_v_tree_data_table_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6295ffe6_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_v_tree_data_table_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\v-tree-data-table.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6295ffe6", Component.options)
  } else {
    hotAPI.reload("data-v-6295ffe6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(7).default
var update = add("a0334ad2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./v-tree-data-table.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./v-tree-data-table.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "\n.v-tree-data-table .folder {\r\n  cursor: pointer;\n}\n.v-tree-data-table .drag * {\r\n  pointer-events: none;\n}\n.v-tree-data-table .inactive {\r\n  border: none !important;\r\n  height: 5px;\r\n  background-color: transparent !important;\n}\n.v-tree-data-table .inactive td {\r\n  height: 5px !important;\n}\n.v-tree-data-table .active {\r\n  background-color: green !important;\n}\n.v-tree-data-table .active td {\r\n  height: 15px !important;\n}\n.v-tree-data-table .sort-handle {\r\n  cursor: move;\n}\r\n", ""]);

// exports


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = addStylesClient;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__listToStyles__ = __webpack_require__(8);
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(__WEBPACK_IMPORTED_MODULE_0__listToStyles__["a" /* default */])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(__WEBPACK_IMPORTED_MODULE_0__listToStyles__["a" /* default */])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = listToStyles;
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_flattenDeep__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_flattenDeep___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_flattenDeep__);

/**
 * @private
 * unFlatten a node
 * @param {Object} node Node to unflatten
 * @param {Array} node Array of flattened nodes
 * @return {Array} Array of unflattened nodes
 */

var unFlattenNode = function unFlattenNode(node, flattenedNodes) {
  var children = flattenedNodes.filter(function (_node) {
    if (_node.parentNode) {
      return _node.parentNode.id == node.id;
    } else {
      return false;
    }
  });

  if (children.length == 0) {
    Object.assign(node, {
      leaf: true,
      children: []
    });
  } else {
    Object.assign(node, {
      children: children,
      leaf: false
    });
    node.children.forEach(function (child) {
      unFlattenNode(child, flattenedNodes);
    });
  }

  return node;
};
/**
 * @private
 * Flatten a node to a single array
 * @param {Object} node Node being flattened
 * @param {Array} [children] Children of node
 * @return {Array} Array of flatten nodes
 */


var flattenNode = function flattenNode(node, children) {
  children = children || [];

  if (node.children) {
    children = children.concat(node.children);
    node.children.forEach(function (child) {
      child.parentNode = node;
      children.splice(children.indexOf(child) + 1, 0, flattenNode(child));
    });
  }

  return __WEBPACK_IMPORTED_MODULE_0_lodash_flattenDeep___default()(children);
};
/**
 * Flatten an array nested nodes
 * @param {Array} nodes Nodes to flatten
 * @return {Array} Array of flatten nodes
 */


var flattenNodes = function flattenNodes(nodes) {
  var flattenNodes = [];
  nodes.forEach(function (node) {
    flattenNodes.push(node);
    flattenNodes.push(flattenNode(node));
  });
  return __WEBPACK_IMPORTED_MODULE_0_lodash_flattenDeep___default()(flattenNodes);
};
/**
 * unFlatten an array nested nodes
 * @param {Array} nodes Nodes to unflatten
 * @return {Array} Array of unflattened nodes
 */


var unFlattenNodes = function unFlattenNodes(nodes) {
  var unFlattenedNodes = [];
  nodes.forEach(function (node) {
    if (!node.parentNode) {
      unFlattenedNodes.push(node);
      unFlattenNode(node, nodes);
    }
  });
  return unFlattenedNodes;
};
/**
 * Moves a node to a new parent
 * @param {Object} node Node being moved
 * @param {Object} newParentNode new Parent Node
 */


var moveNode = function moveNode(node, newParentNode) {
  node.depth = newParentNode.depth + 1;
  node.parentNode = newParentNode;
};
/**
 * Find a node in the tree
 * @param {String | Number} nodeId Id of node to find
 * @param {Array} Array of nodes to look in
 */


var findNode = function findNode(nodeId, nodes) {
  for (var i = 0; i < nodes.length; i++) {
    var _node = nodes[i];

    if (_node.id == nodeId) {
      return _node;
    }

    if (_node.children) {
      var foundNode = findNode(nodeId, _node.children);

      if (foundNode) {
        return foundNode;
      }
    }
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  moveNode: moveNode,
  flattenNodes: flattenNodes,
  unFlattenNodes: unFlattenNodes,
  findNode: findNode
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(11);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Recursively flattens `array`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flattenDeep([1, [2, [3, [4]], 5]]);
 * // => [1, 2, 3, 4, 5]
 */
function flattenDeep(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, INFINITY) : [];
}

module.exports = flattenDeep;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(12),
    isFlattenable = __webpack_require__(13);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(0),
    isArguments = __webpack_require__(17),
    isArray = __webpack_require__(22);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(15);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)))

/***/ }),
/* 16 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(18),
    isObjectLike = __webpack_require__(2);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(19),
    isObjectLike = __webpack_require__(2);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(0),
    getRawTag = __webpack_require__(20),
    objectToString = __webpack_require__(21);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(0);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "v-tree-data-table" },
    [
      _c(
        "v-data-table",
        {
          ref: "dataTable",
          attrs: {
            "select-all": _vm.selectAll,
            "rows-per-page-text": _vm.rowsPerPageText,
            "rows-per-page-items": _vm.rowsPerPageItems,
            headers: _vm.computedHeaders,
            items: _vm.flattenedNodes,
            pagination: _vm.internalPagination,
            "total-items": _vm.totalItems,
            loading: _vm.loading
          },
          on: {
            "update:pagination": function($event) {
              _vm.internalPagination = $event
            }
          },
          scopedSlots: _vm._u(
            [
              {
                key: "headers",
                fn: function(props) {
                  return [
                    _vm._t(
                      "headers",
                      [
                        _c(
                          "tr",
                          [
                            _vm.selectAll
                              ? _c(
                                  "th",
                                  { attrs: { width: "50px" } },
                                  [
                                    _c("v-checkbox", {
                                      attrs: {
                                        "input-value": props.all,
                                        indeterminate: props.indeterminate,
                                        primary: "",
                                        "hide-details": ""
                                      },
                                      nativeOn: {
                                        click: function($event) {
                                          return _vm.toggleSelectAll($event)
                                        }
                                      }
                                    })
                                  ],
                                  1
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm._l(props.headers, function(header) {
                              return [
                                header.sortable
                                  ? _c(
                                      "th",
                                      {
                                        key: header.text,
                                        class: [
                                          "column sortable",
                                          _vm.pagination.descending
                                            ? "desc"
                                            : "asc",
                                          header.value === _vm.pagination.sortBy
                                            ? "active"
                                            : "",
                                          "text-xs-" + (header.align || "left")
                                        ],
                                        on: {
                                          click: function($event) {
                                            return _vm.changeSort(header.value)
                                          }
                                        }
                                      },
                                      [
                                        _c("v-icon", { attrs: { small: "" } }, [
                                          _vm._v("arrow_upward")
                                        ]),
                                        _vm._v(
                                          "\n              " +
                                            _vm._s(header.text) +
                                            "\n            "
                                        )
                                      ],
                                      1
                                    )
                                  : _c(
                                      "th",
                                      {
                                        key: header.text,
                                        class:
                                          "text-xs-" + (header.align || "left")
                                      },
                                      [
                                        _vm._v(
                                          "\n              " +
                                            _vm._s(header.text) +
                                            "\n            "
                                        )
                                      ]
                                    )
                              ]
                            })
                          ],
                          2
                        )
                      ],
                      { props: props }
                    )
                  ]
                }
              },
              {
                key: "items",
                fn: function(props) {
                  return [
                    props.index == 0
                      ? _c(
                          "tr",
                          {
                            staticClass: "drop-row inactive",
                            style: _vm.nodeHidden(props.item),
                            on: {
                              dragenter: function($event) {
                                $event.stopPropagation()
                                $event.preventDefault()
                                return _vm.dragEnterSlot($event)
                              },
                              dragleave: function($event) {
                                $event.stopPropagation()
                                $event.preventDefault()
                                return _vm.dragLeaveSlot($event)
                              },
                              drop: function($event) {
                                $event.stopPropagation()
                                $event.preventDefault()
                                return _vm.dropRow($event)
                              },
                              dragover: function($event) {
                                $event.stopPropagation()
                                return _vm.dragOverSlot($event)
                              }
                            }
                          },
                          [
                            _c("td", {
                              attrs: {
                                colspan:
                                  _vm.computedHeaders.length +
                                  (_vm.selectAll ? 1 : 0)
                              }
                            })
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    props.item.leaf
                      ? _c(
                          "tr",
                          {
                            key: props.item.id,
                            staticClass: "leaf",
                            style: _vm.nodeHidden(props.item),
                            attrs: {
                              active: props.selected,
                              id: props.item.id
                            },
                            on: {
                              dblclick: function(e) {
                                _vm.$emit("dblclick", e, props.item)
                              },
                              contextmenu: function($event) {
                                $event.preventDefault()
                                return (function(e) {
                                  _vm.$emit("contextmenu", e, props.item)
                                })($event)
                              },
                              dragenter: function($event) {
                                $event.stopPropagation()
                                $event.preventDefault()
                                return _vm.dragEnterLeaf($event)
                              },
                              dragleave: function($event) {
                                $event.stopPropagation()
                                $event.preventDefault()
                                return _vm.dragLeaveLeaf($event)
                              },
                              drop: function($event) {
                                $event.stopPropagation()
                                $event.preventDefault()
                                return _vm.dropRow($event)
                              },
                              dragover: function($event) {
                                $event.stopPropagation()
                                return _vm.dragOverLeaf($event)
                              }
                            }
                          },
                          [
                            _vm.selectAll
                              ? _c(
                                  "td",
                                  [
                                    _c("v-checkbox", {
                                      attrs: {
                                        "input-value": props.selected,
                                        primary: "",
                                        "hide-details": ""
                                      },
                                      on: {
                                        click: function($event) {
                                          props.selected = !props.selected
                                        }
                                      }
                                    })
                                  ],
                                  1
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "td",
                              {
                                staticClass: "px-1",
                                staticStyle: { width: "0.1%" }
                              },
                              [
                                _c(
                                  "v-btn",
                                  {
                                    staticClass: "sort-handle",
                                    staticStyle: { cursor: "move" },
                                    attrs: { icon: "", draggable: "" },
                                    on: {
                                      dragstart: function($event) {
                                        $event.stopPropagation()
                                        return _vm.dragStart($event)
                                      },
                                      dragend: function($event) {
                                        $event.stopPropagation()
                                        $event.preventDefault()
                                        return _vm.dragEnd($event)
                                      }
                                    }
                                  },
                                  [_c("v-icon", [_vm._v("drag_handle")])],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            props.item.leaf
                              ? _c(
                                  "td",
                                  {
                                    staticClass: "expandable-node",
                                    staticStyle: { width: "0.1%" },
                                    style: _vm.nodeStyle(props.item)
                                  },
                                  [
                                    _c("v-icon", [
                                      _vm._v("keyboard_arrow_right")
                                    ])
                                  ],
                                  1
                                )
                              : _c(
                                  "td",
                                  {
                                    staticClass: "expandable-node",
                                    staticStyle: { width: "0.1%" },
                                    style: _vm.nodeStyle(props.item),
                                    on: {
                                      click: function($event) {
                                        return _vm.toggleNode(props.item)
                                      }
                                    }
                                  },
                                  [
                                    _c("v-icon", [
                                      _vm._v(
                                        _vm._s(_vm.expandableIcon(props.item))
                                      )
                                    ])
                                  ],
                                  1
                                ),
                            _vm._v(" "),
                            _vm._t("row", null, null, props)
                          ],
                          2
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !props.item.leaf
                      ? _c(
                          "tr",
                          {
                            key: props.item.id,
                            staticClass: "folder",
                            style: _vm.nodeHidden(props.item),
                            attrs: {
                              active: props.selected,
                              id: props.item.id
                            },
                            on: {
                              dblclick: function(e) {
                                _vm.$emit("dblclick", e, props.item)
                              },
                              contextmenu: function($event) {
                                $event.preventDefault()
                                return (function(e) {
                                  _vm.$emit("contextmenu", e, props.item)
                                })($event)
                              },
                              dragenter: function($event) {
                                $event.stopPropagation()
                                $event.preventDefault()
                                return _vm.dragEnterFolder($event)
                              },
                              dragleave: function($event) {
                                $event.stopPropagation()
                                $event.preventDefault()
                                return _vm.dragLeaveFolder($event)
                              },
                              drop: function($event) {
                                $event.stopPropagation()
                                $event.preventDefault()
                                return _vm.dropRow($event)
                              },
                              dragover: function($event) {
                                $event.stopPropagation()
                                return _vm.dragOverFolder($event)
                              }
                            }
                          },
                          [
                            _vm.selectAll
                              ? _c(
                                  "td",
                                  [
                                    _c("v-checkbox", {
                                      attrs: {
                                        "input-value": props.selected,
                                        primary: "",
                                        "hide-details": ""
                                      },
                                      on: {
                                        click: function($event) {
                                          props.selected = !props.selected
                                        }
                                      }
                                    })
                                  ],
                                  1
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "td",
                              {
                                staticClass: "px-1",
                                staticStyle: { width: "0.1%" }
                              },
                              [
                                _c(
                                  "v-btn",
                                  {
                                    staticClass: "sort-handle",
                                    staticStyle: { cursor: "move" },
                                    attrs: { icon: "", draggable: "" },
                                    on: {
                                      dragstart: function($event) {
                                        $event.stopPropagation()
                                        return _vm.dragStart($event)
                                      },
                                      dragend: function($event) {
                                        $event.stopPropagation()
                                        $event.preventDefault()
                                        return _vm.dragEnd($event)
                                      }
                                    }
                                  },
                                  [_c("v-icon", [_vm._v("drag_handle")])],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            props.item.leaf
                              ? _c(
                                  "td",
                                  {
                                    staticClass: "expandable-node",
                                    staticStyle: { width: "0.1%" },
                                    style: _vm.nodeStyle(props.item)
                                  },
                                  [
                                    _c("v-icon", [
                                      _vm._v("keyboard_arrow_right")
                                    ])
                                  ],
                                  1
                                )
                              : _c(
                                  "td",
                                  {
                                    staticClass: "expandable-node",
                                    staticStyle: { width: "0.1%" },
                                    style: _vm.nodeStyle(props.item),
                                    on: {
                                      click: function($event) {
                                        return _vm.toggleNode(props.item)
                                      }
                                    }
                                  },
                                  [
                                    _c("v-icon", [
                                      _vm._v(
                                        _vm._s(_vm.expandableIcon(props.item))
                                      )
                                    ])
                                  ],
                                  1
                                ),
                            _vm._v(" "),
                            _vm._t("row", null, null, props)
                          ],
                          2
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "tr",
                      {
                        staticClass: "drop-row inactive",
                        style: _vm.nodeHidden(props.item),
                        on: {
                          dragenter: function($event) {
                            $event.stopPropagation()
                            $event.preventDefault()
                            return _vm.dragEnterSlot($event)
                          },
                          dragleave: function($event) {
                            $event.stopPropagation()
                            $event.preventDefault()
                            return _vm.dragLeaveSlot($event)
                          },
                          drop: function($event) {
                            $event.stopPropagation()
                            $event.preventDefault()
                            return _vm.dropRow($event)
                          },
                          dragover: function($event) {
                            $event.stopPropagation()
                            return _vm.dragOverSlot($event)
                          }
                        }
                      },
                      [
                        _c("td", {
                          attrs: {
                            colspan:
                              _vm.computedHeaders.length +
                              (_vm.selectAll ? 1 : 0)
                          }
                        })
                      ]
                    )
                  ]
                }
              }
            ],
            null,
            true
          ),
          model: {
            value: _vm.selected,
            callback: function($$v) {
              _vm.selected = $$v
            },
            expression: "selected"
          }
        },
        [
          _c(
            "template",
            { slot: "no-data" },
            [
              _vm._t("no-data", [
                _c("tr", [
                  _c(
                    "td",
                    {
                      staticClass: "text-xs-center",
                      attrs: {
                        colspan: _vm.headers.length + (_vm.selectAll ? 1 : 0)
                      }
                    },
                    [
                      _vm._v(
                        "\n            No matching records found\n          "
                      )
                    ]
                  )
                ])
              ])
            ],
            2
          )
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6295ffe6", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = normalizeComponent;
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  scriptExports = scriptExports || {}

  // ES6 modules interop
  var type = typeof scriptExports.default
  if (type === 'object' || type === 'function') {
    scriptExports = scriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
/******/ ]);
});
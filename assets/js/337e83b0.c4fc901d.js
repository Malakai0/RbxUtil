"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6178],{9607:function(e){e.exports=JSON.parse('{"functions":[{"name":"new","desc":"Constructs a Streamable that watches for a direct child of name `childName`\\nwithin the `parent` Instance. Call `Observe` to observe the existence of\\nthe child within the parent.","params":[{"name":"parent","desc":"","lua_type":"Instance"},{"name":"childName","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"Streamable"}],"function_type":"static","source":{"line":98,"path":"modules/streamable/Streamable.lua"}},{"name":"primary","desc":"Constructs a streamable that watches for the PrimaryPart of the\\ngiven `parent` Model.","params":[{"name":"parent","desc":"","lua_type":"Model"}],"returns":[{"desc":"","lua_type":"Streamable"}],"function_type":"static","source":{"line":151,"path":"modules/streamable/Streamable.lua"}},{"name":"Observe","desc":"Observes the instance. The handler is called anytime the\\ninstance comes into existence, and the trove given is\\ncleaned up when the instance goes away.\\n\\nTo stop observing, disconnect the returned connection.","params":[{"name":"handler","desc":"","lua_type":"(instance: Instance, trove: Trove) -> nil"}],"returns":[{"desc":"","lua_type":"Connection"}],"function_type":"method","source":{"line":192,"path":"modules/streamable/Streamable.lua"}},{"name":"Destroy","desc":"Destroys the Streamable. Any observers will be disconnected,\\nwhich also means that troves within observers will be cleaned\\nup. This should be called when a streamable is no longer needed.","params":[],"returns":[],"function_type":"method","source":{"line":205,"path":"modules/streamable/Streamable.lua"}}],"properties":[{"name":"Instance","desc":"The current instance represented by the Streamable. If this\\nis being observed, it will always exist. If not currently\\nbeing observed, this will be `nil`.","lua_type":"Instance","source":{"line":23,"path":"modules/streamable/Streamable.lua"}}],"types":[],"name":"Streamable","desc":"Because parts in StreamingEnabled games can stream in and out of existence at\\nany point in time, it is hard to write code to interact with them. This is\\nwhere Streamables come into play. Streamables will observe the existence of\\na given instance, and will signal when the instance exists and does not\\nexist.\\n\\nThe API is very simple. Create a Streamable that points to a certain parent\\nand looks for a specific child instance (typically a BasePart). Then, call\\nthe `Observe` method to observe when the instance streams in and out.\\n\\n```lua\\nlocal Streamable = require(packages.Streamable).Streamable\\n\\n-- Models might take a bit to load, but the model instance\\n-- is never removed, thus we can use WaitForChild.\\nlocal model = workspace:WaitForChild(\\"MyModel\\")\\n\\n-- Watch for a specific part in the model:\\nlocal partStreamable = Streamable.new(model, \\"SomePart\\")\\n\\npartStreamable:Observe(function(part, trove)\\n\\tprint(part:GetFullName() .. \\" added\\")\\n\\t-- Run code on the part here.\\n\\t-- Use the trove to manage cleanup when the part goes away.\\n\\ttrove:Add(function()\\n\\t\\t-- General cleanup stuff\\n\\t\\tprint(part.Name .. \\" removed\\")\\n\\tend)\\nend)\\n\\n-- Watch for the PrimaryPart of a model to exist:\\nlocal primaryStreamable = Streamable.primary(model)\\nprimaryStreamable:Observe(function(primary, trove)\\n\\tprint(\\"Model now has a PrimaryPart:\\", primary.Name)\\n\\ttrove:Add(function()\\n\\t\\tprint(\\"Model\'s PrimaryPart has been removed\\")\\n\\tend)\\nend)\\n\\n-- At any given point, accessing the Instance field will\\n-- reference the observed part, if it exists:\\nif partStreamable.Instance then\\n\\tprint(\\"Streamable has its instance:\\", partStreamable.Instance)\\nend\\n\\n-- When/if done, call Destroy on the streamable, which will\\n-- also clean up any observers:\\npartStreamable:Destroy()\\nprimaryStreamable:Destroy()\\n```\\n\\nFor more information on the mechanics of how StreamingEnabled works\\nand what sort of behavior to expect, see the\\n[Content Streaming](https://developer.roblox.com/en-us/articles/content-streaming#technical-behavior)\\npage. It is important to understand that only BaseParts and their descendants are streamed in/out,\\nwhereas other instances are loaded during the initial client load. It is also important to understand\\nthat streaming only occurs on the client. The server has immediate access to everything right away.","realm":["Client"],"source":{"line":85,"path":"modules/streamable/Streamable.lua"}}')}}]);
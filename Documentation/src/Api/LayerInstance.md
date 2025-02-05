# LayerInstance

LayerInstance

## Properties

  
An array containing all tiles generated by Auto-layer rules. The array is already sorted  
in display order (ie. 1st tile is beneath 2nd, which is beneath 3rd etc.).  
Note: if multiple tiles are stacked in the same cell as the result of different rules,  
all tiles behind opaque ones will be discarded.  


```csharp
public TileInstance[] AutoLayerTiles { get; set; }
```

  
Grid-based height  


```csharp
public int _CHei { get; set; }
```

  
Grid-based width  


```csharp
public int _CWid { get; set; }
```

  
Grid size  


```csharp
public int _GridSize { get; set; }
```

  
Layer definition identifier  


```csharp
public string _Identifier { get; set; }
```

  
Unique layer instance identifier  


```csharp
public Guid Iid { get; set; }
```

  
A list of all values in the IntGrid layer, stored in CSV format (Comma Separated  
Values).  Order is from left to right, and top to bottom (ie. first row from left to  
right, followed by second row, etc).  0 means "empty cell" and IntGrid values  
start at 1.  The array size is __cWid x __cHei cells.  


```csharp
public int[] IntGridCsv { get; set; }
```

  
Reference the Layer definition UID  


```csharp
public int LayerDefUid { get; set; }
```

  
Reference to the UID of the level containing this layer instance  


```csharp
public int LevelId { get; set; }
```

  
Layer opacity as Float [0-1]  


```csharp
public float _Opacity { get; set; }
```

  
This layer can use another tileset by overriding the tileset UID here.  


```csharp
public int? OverrideTilesetUid { get; set; }
```

  
X offset in pixels to render this layer, usually 0 (IMPORTANT: this should be added to  
the LayerDef optional offset, so you should probably prefer using __pxTotalOffsetX  
which contains the total offset value)  


```csharp
public int PxOffsetX { get; set; }
```

  
Y offset in pixels to render this layer, usually 0 (IMPORTANT: this should be added to  
the LayerDef optional offset, so you should probably prefer using __pxTotalOffsetX  
which contains the total offset value)  


```csharp
public int PxOffsetY { get; set; }
```

  
Total layer X pixel offset, including both instance and definition offsets.  


```csharp
public int _PxTotalOffsetX { get; set; }
```

  
Total layer Y pixel offset, including both instance and definition offsets.  


```csharp
public int _PxTotalOffsetY { get; set; }
```

  
The definition UID of corresponding Tileset, if any.  


```csharp
public int? _TilesetDefUid { get; set; }
```

  
The relative path to corresponding Tileset, if any.  


```csharp
public string _TilesetRelPath { get; set; }
```

  
Layer type (possible values: IntGrid, Entities, Tiles or AutoLayer)  


```csharp
public LayerType _Type { get; set; }
```

  
Layer instance visibility  


```csharp
public bool Visible { get; set; }
```



namespace LDtk.ContentPipeline;

using System.Text.Json;

using LDtk;

using Microsoft.Xna.Framework.Content;

/// <summary> LDtkFileReader. </summary>
public class LDtkFileReader : ContentTypeReader<LDtkFile>
{
    /// <summary> Read. </summary>
    /// <param name="input"> The ContentReader. </param>
    /// <param name="existingInstance"> The existingInstance. </param>
    /// <returns> The LDtkFile read from the content pipeline. </returns>
    protected override LDtkFile Read(ContentReader input, LDtkFile existingInstance)
    {
        LDtkFile lDtkFile = JsonSerializer.Deserialize<LDtkFile>(input.ReadString(), Constants.SerializeOptions);
        return existingInstance ?? lDtkFile;
    }
}

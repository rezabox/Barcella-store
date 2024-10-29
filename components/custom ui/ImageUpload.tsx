import { CldUploadWidget } from "next-cloudinary";
import React from "react";
import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

interface ImageUploadProps {
  value: string[];
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onChange,
  onRemove,
  value,
}) => {
  const onUplaod = (result: any) => {
    onChange(result.info.secure_url);
  };

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-4">
        {value.map((url) => (
          <Image
            src={url}
            alt="collection"
            className="object-cover rounded-lg"
            width={200}
            height={200}
          />
        ))}
      </div>
      <CldUploadWidget uploadPreset="aks24gfb" onUpload={onUplaod}>
        {({ open }) => {
          return (
            <Button onClick={() => open()} className="bg-grey-1">
              <Plus className="h-4 w-4" /> Upload an Image
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};
export default ImageUpload;

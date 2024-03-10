import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateFolderDto } from "./dto/create-folder.dto";
import { UpdateFolderDto } from "./dto/update-folder.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Folder } from "@/features/folders/folders.model";

@Injectable()
export class FoldersService {
  constructor(@InjectModel(Folder) private folderRepository: typeof Folder) {}

  async create(createFolderDto: CreateFolderDto) {
    return await this.folderRepository.create(createFolderDto);
  }

  async findAll() {
    return await this.folderRepository.findAll();
  }

  async findOne(id: number) {
    return await this.folderRepository.findByPk(id);
  }

  async update(id: number, updateFolderDto: UpdateFolderDto) {
    const [rowsUpdated, [updatedFolder]] = await this.folderRepository.update(
      updateFolderDto,
      {
        where: { id },
        returning: true, // Important to get the updated row back
      }
    );
    if (rowsUpdated > 0) {
      return updatedFolder;
    } else {
      throw new HttpException(
        `Folder with ID ${id} not found`,
        HttpStatus.NOT_FOUND
      );
    }
  }

  async remove(id: number) {
    const rowsDeleted = await this.folderRepository.destroy({ where: { id } });
    if (rowsDeleted > 0) {
      return `Folder with ID ${id} has been successfully deleted`;
    } else {
      throw new HttpException(
        `Folder with ID ${id} not found`,
        HttpStatus.NOT_FOUND
      );
    }
  }
}

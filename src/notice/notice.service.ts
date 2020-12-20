import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate';
import Institute from 'src/institute/institute.entity';
import { Repository } from 'typeorm';
import { CreateNoticeDto } from './dto/create-notice.dto';
import { UpdateNoticeDto } from './dto/update-notice.dto';
import Notice from './notice.entity';

@Injectable()
export class NoticeService {
  constructor(
    @InjectRepository(Notice) private noticeRepository: Repository<Notice>,
  ) {}

  async create(createNoticeDto: CreateNoticeDto, institute: Institute) {
    let newNotice = await this.noticeRepository.create({
      ...createNoticeDto,
      institute: institute,
    });
    await this.noticeRepository.save(newNotice);
    delete newNotice.institute;
    return newNotice;
  }

  async findById(id: number,institute:Institute) {
    let notice = await this.noticeRepository.findOne({id,institute});
    if (!notice) {
      throw new NotFoundException(`${id} not found`);
    }
    return notice;
  }

  async deleteById(noticeId: number,institute:Institute) {
    let res = await this.noticeRepository.delete({ id: noticeId ,institute});
    return {
      is_deleted: res.affected === 1,
    };
  }

  async updateById(id: number, updateNoticeDto: UpdateNoticeDto,institute:Institute) {
    let res = await this.noticeRepository.update({id,institute}, updateNoticeDto);
    return {
      is_updated: res.affected === 1,
    };
  }

  async paginate(options: IPaginationOptions,institute:Institute): Promise<Pagination<Notice>> {
    const queryBuilder = this.noticeRepository.createQueryBuilder('c');
    queryBuilder.where('c.institute',institute);
    return paginate<Notice>(queryBuilder,options);
  }
}

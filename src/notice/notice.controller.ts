import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthenticationGuard } from 'src/shared/guard/jwt-authentication.guard';
import { CreateNoticeDto } from './dto/create-notice.dto';
import { UpdateNoticeDto } from './dto/update-notice.dto';
import { NoticeService } from './notice.service';

@Controller('notice')
export class NoticeController {
  constructor(private noticeService: NoticeService) {}

  @Post()
  @UseGuards(JwtAuthenticationGuard)
  create(@Body() createNoticeDto: CreateNoticeDto, @Req() req: any) {
    return this.noticeService.create(createNoticeDto, req.user);
  }

  @Get(':noticeId')
  findById(@Param('noticeId') noticeId: number) {
    return this.noticeService.findById(noticeId);
  }

  @Delete(':noticeId')
  deleteById(@Param('noticeId') noticeId: number) {
    return this.noticeService.deleteById(noticeId);
  }

  @Patch(':noticeId')
  updateById(
    @Param('noticeId') noticeId: number,
    @Body() updateNoticeDto: UpdateNoticeDto,
  ) {
    return this.noticeService.updateById(noticeId, updateNoticeDto);
  }

  @Get()
  getNotices(@Query('page') page:number) {
      let limit = 10;
      return this.noticeService.paginate({
          limit,
          page,
      })
  }
}

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
import { JwtAuthenticationGuard } from '../shared/guard/jwt-authentication.guard';

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
  @UseGuards(JwtAuthenticationGuard)
  findById(@Param('noticeId') noticeId: number, @Req() req: any) {
    return this.noticeService.findById(noticeId, req.user);
  }

  @Delete(':noticeId')
  @UseGuards(JwtAuthenticationGuard)
  deleteById(@Param('noticeId') noticeId: number, @Req() req: any) {
    return this.noticeService.deleteById(noticeId, req.user);
  }

  @Patch(':noticeId')
  @UseGuards(JwtAuthenticationGuard)
  updateById(
    @Param('noticeId') noticeId: number,
    @Body() updateNoticeDto: UpdateNoticeDto,
    @Req() req: any,
  ) {
    return this.noticeService.updateById(noticeId, updateNoticeDto, req.user);
  }

  @Get()
  @UseGuards(JwtAuthenticationGuard)
  getNotices(@Query('page') page: number, @Req() req: any) {
    let limit = 10;
    return this.noticeService.paginate(
      {
        limit,
        page,
      },
      req.user,
    );
  }
}

import { Module } from '@nestjs/common';
import { TransferSevice } from './transfer.service';

@Module({
  providers: [TransferSevice],
})
export class TransferModule {}

import { IsString, IsOptional, IsIn, MaxLength } from 'class-validator';

export class UpdateTaskDto {
  @IsOptional()
  @IsString()
  @MaxLength(100)
  title?: string;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  description?: string;

  @IsOptional()
  @IsIn(['low', 'medium', 'high'], {
    message: 'Priority must be: low, medium or high',
  })
  priority?: 'low' | 'medium' | 'high';

  @IsOptional()
  @IsIn(['open', 'in_progress', 'done'], {
    message: 'Status must be: open, in_progress or done',
  })
  status?: 'open' | 'in_progress' | 'done';
}

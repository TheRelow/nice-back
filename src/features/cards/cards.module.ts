import {Module} from "@nestjs/common";
import {CardsController} from "@/features/cards/cards.controller";

@Module({
  controllers: [CardsController],
})
export class CardsModule {}

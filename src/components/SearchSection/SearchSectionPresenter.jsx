import PropTypes from 'prop-types';
import SearchBar from './SearchBar/SearchBar.jsx';
import ResponseHandler from './ResponseHandler/ResponseHandler.jsx';
import ContributionGuidelines from './ContributionGuidelines';
import ScoreReactionBoardHandler from './ScoreReactionBoard';
import styles from './SearchSectionPresenter.module.css';

const SearchSectionPresenter = ({
    state,
    searchUserAndStoreResponse,
    searchSectionDispatch,
}) => {
    return (
        <div className={styles.searchSectionDiv} id="searchSection">
            <h2 className={styles.searchSectionH2}>
                Let&apos;s see what rating do you got for the contributed code
            </h2>
            <SearchBar
                searchUserAndStoreResponse={searchUserAndStoreResponse}
            />
            <ResponseHandler
                state={state}
                searchSectionDispatch={searchSectionDispatch}
            />
            <ContributionGuidelines />
            <ScoreReactionBoardHandler
                isScoreReactionPageOpen={state.isScoreReactionPageOpen}
                searchSectionDispatch={searchSectionDispatch}
            />
        </div>
    );
};

SearchSectionPresenter.propTypes = {
    state: PropTypes.object,
    searchUserAndStoreResponse: PropTypes.func,
    searchSectionDispatch: PropTypes.func,
};

export default SearchSectionPresenter;
